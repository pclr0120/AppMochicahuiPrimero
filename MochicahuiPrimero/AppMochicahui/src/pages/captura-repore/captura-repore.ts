import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { LoginProvider } from '../../providers/login/login';
import { ReporteProvider } from '../../providers/reporte/reporte';
import { Reporte } from '../../Modelo/Reporte';
import { ReporteConsultaPage } from '../reporte-consulta/reporte-consulta';


@Component({
  selector: 'page-captura-repore',
  templateUrl: 'captura-repore.html',
})
export class CapturaReporePage {
  map: GoogleMap;
  reporteI: Reporte;
  imgB: string[] = [];
  BanderFoto: string = "";
  constructor(public navCtrl: NavController,
    private user: LoginProvider,
    private reporte: ReporteProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public navParams: NavParams,
    private camera: Camera, ) {
    this.imgB[0] = "../assets/iconos/cam3.png";
    this.imgB[1] = "../assets/iconos/cam3.png";
    this.imgB[2] = "../assets/iconos/cam3.png";
    this.reporteI = new Reporte();
  }



  FotoUno() {

    //this.imgB
  }
  OpenCamera(n: number) {

    this.camera.getPicture({

      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 50,
      targetWidth: 50,
      targetHeight: 50,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      let loading = this.loadingCtrl.create({
        content: 'Cargando foto...'
      });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imgB[n] = base64Image;
      alert("tamaño:" + this.imgB[0].length)
      let cont: number = 0;
      for (let index = 0; index < this.imgB.length; index++) {

        if (this.imgB[index] != "../assets/iconos/cam3.png") {
          cont += 1

        } else
          break;



      }
      if (cont == 3)
        this.BanderFoto = "true";
      else
        this.BanderFoto = "";

      setTimeout(() => {
        loading.dismiss();
      }, 1000);

    }, error => {

      alert(JSON.stringify(error));

    });


  }

  OpenPhoto() {

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 20,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      let loading = this.loadingCtrl.create({
        content: 'Cargando foto...'
      });

      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    }, error => {
      alert(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {

    this.loadMap();
  }

  loadMap() {
    // Create a map after the view is loaded.

    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 25.950988,
          lng: -108.931960
        },
        zoom: 18,
        tilt: 30
      }
    });
    this.GetUbicacion();

  }
  GetUbicacion() {
    this.map.clear();

    // Get the location of you
    let loading = this.loadingCtrl.create({
      content: 'Obteniendo Ubicacion...'
    });

    loading.present();




    this.map.getMyLocation()
      .then((location: MyLocation) => {
        console.log(JSON.stringify(location, null, 2));

        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        })
          .then(() => {
            // add a marker
            let marker: Marker = this.map.addMarkerSync({
              title: 'Ubicacion del Problema',
              snippet: '',
              position: location.latLng,
              animation: GoogleMapsAnimation.BOUNCE
            });
            alert("local:" + location.latLng)
            alert(JSON.stringify(this.imgB[0]))
            this.reporteI.UbicacionEnvioRep = location.latLng.toString();
            setTimeout(() => {
              loading.dismiss();
            }, 2000);
            // show the infoWindow
            marker.showInfoWindow();

            // If clicked it, display the alert
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

            });
          });
      });
  }

  EnviarReporte() {
    try {
      this.reporte.reporte.Id = 0;
      this.reporte.reporte.IdUsuario = this.user.DataUser.Id;
      // this.reporte.reporte.IdTipoProblema=this.reporteI.IdTipoProblema;
      this.reporte.reporte.DescripcionUbicacion = this.reporteI.DescripcionUbicacion;
      this.reporte.reporte.UbicacionEnvioRep = this.reporteI.UbicacionEnvioRep;
      this.reporte.reporte.DetalleProblema = this.reporteI.DetalleProblema;
      //this.reporte.reporte.Ubicacion=this.reporteI.Ubicacion;

      this.reporte.reporte.Foto1 = this.imgB[0];
      this.reporte.reporte.Foto2 = this.imgB[1];
      this.reporte.reporte.Foto3 = this.imgB[2];
      this.reporte.reporte.EstadoR = "s/n"
      this.reporte.reporte.Grado = this.reporteI.Grado;
      this.reporte.reporte.Estatus = "ACTIVO";
      alert(JSON.stringify(this.reporte.reporte));
      this.reporte.EnviarReporte().then(res => {
        alert(JSON.stringify(res));
        if (res)
          this.navCtrl.push(ReporteConsultaPage);


      },
        errr => {
          alert("Error en el envio verifique su conexion a internet e intente de nuevo...Erorr#:" + errr);

        });


    } catch (error) {
      alert("Verifique su conexion a  internet...");
    }

  }


}
