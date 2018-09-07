import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
import { Reporte } from '../../Modelo/Reporte';
import { ReporteProvider } from '../../providers/reporte/reporte';
import { PhotoViewer } from '@ionic-native/photo-viewer';

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
  map: GoogleMap;
  reporteI: Reporte;
  imgB: string[] = [];
  BanderFoto: string = "";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private reporte: ReporteProvider,
    public loadingCtrl: LoadingController,
    private photoViewer: PhotoViewer
  ) {
    this.imgB[0] = "../assets/iconos/cam3.png";
    this.imgB[1] = "../assets/iconos/cam3.png";
    this.imgB[2] = "../assets/iconos/cam3.png";
    this.reporteI = new Reporte();
  }

  ionViewDidLoad() {
    this.reporte.DetalleReporte;
   this.reporte.GetReporteDetalle(this.reporte.IdReporte);
   this.imgB[0] =this.reporte.DetalleReporte.Foto1;
   this.imgB[1] = this.reporte.DetalleReporte.Foto2;
   this.imgB[2] = this.reporte.DetalleReporte.Foto3;
  }
  loadMap() {
    // Create a map after the view is loaded.

    // (platform is already ready in app.component.ts)
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
         position:this.reporte.DetalleReporte.UbicacionEnvioRep
        },
        zoom: 18,
        tilt: 30
      }
    });



  }

  openImage(id){

    this.photoViewer.show(this.imgB[id]), 'Evidencia', {share: false}
  }


}
