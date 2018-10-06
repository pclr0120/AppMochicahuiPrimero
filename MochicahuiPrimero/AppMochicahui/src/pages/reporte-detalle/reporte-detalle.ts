import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation,
  LatLng
} from '@ionic-native/google-maps';
import { Reporte } from '../../Modelo/Reporte';
import { ReporteProvider } from '../../providers/reporte/reporte';

import { PhotoViewPage } from '../photo-view/photo-view'
import { LiteralMapEntry } from '@angular/compiler/src/output/output_ast';
import { FotoVistaPage } from '../foto-vista/foto-vista';

/**
 * Generated class for the ReporteDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reporte-detalle',
  templateUrl: 'reporte-detalle.html',
})
export class ReporteDetallePage {
  private map: GoogleMap;
  private reporteI: Reporte;
  private imgB: string[] = [];
  private BanderFoto: string = "";

  //
  private ubicacionTemp:string[]=[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reporte: ReporteProvider,
    public loadingCtrl: LoadingController
  ) {
    this.imgB[0] = "../assets/iconos/cam3.png";
    this.imgB[1] = "../assets/iconos/cam3.png";
    this.imgB[2] = "../assets/iconos/cam3.png";
    this.reporteI = new Reporte();


   
    this.reporte.GetReporteDetalle(this.reporte.IdReporte);
    this.imgB[0] = this.reporte.DetalleReporte.Foto1;
    this.imgB[1] = this.reporte.DetalleReporte.Foto2;
    this.imgB[2] = this.reporte.DetalleReporte.Foto3;
 
  }

 ionViewDidLoad() {


  //  this.reporte.GetReporteDetalle(this.reporte.IdReporte);
  //  this.imgB[0] =this.reporte.DetalleReporte.Foto1;
  //  this.imgB[1] = this.reporte.DetalleReporte.Foto2;
  //  this.imgB[2] = this.reporte.DetalleReporte.Foto3;
     this. loadMap();

   }
  loadMap() {
    this.ubicacionTemp=this.reporte.DetalleReporte.UbicacionEnvioRep.split(',');
    // Create a map after the view is loaded.

    // (platform is already ready in app.component.ts)

    let Ubicacion = this.reporte.DetalleReporte.UbicacionEnvioRep.split(',');

    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: this.ubicacionTemp[0],
          lng: this.ubicacionTemp[1],
        },
        zoom: 18,
        tilt: 30
      }

      
    });

    this.GetUbicacion();

  }
  GetUbicacion() {

  //  alert({lat:parseFloat(this.ubicacionTemp[0]),lng:parseFloat(this.ubicacionTemp[0])}.lat+"/"+{lat:parseFloat(this.ubicacionTemp[0]),lng:parseFloat(this.ubicacionTemp[0])}.lng)
    this.map.clear();

    // Get the location of you
    let loading = this.loadingCtrl.create({
      content: 'Obteniendo Ubicacion...'
    });

    loading.present();


    let lat0:number=parseFloat(this.ubicacionTemp[0]);
    let lng0:number=parseFloat(this.ubicacionTemp[1]);


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
              position:{lat:parseFloat(lat0.toString()),lng:parseFloat(lng0.toString())},
              animation: GoogleMapsAnimation.BOUNCE
            });

            setTimeout(() => {
              loading.dismiss();
            }, 2000);
            // show the infoWindow
            marker.showInfoWindow();

            // If clicked it, display the alert
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {

            },error=>{ loading.dismiss(); alert("Hubo un error al cargar la ubicacion..") });
          });
      });
  }

  openImage(id) {


    this.reporte.s = this.imgB[id];
    this.navCtrl.push(FotoVistaPage);

  }









}
