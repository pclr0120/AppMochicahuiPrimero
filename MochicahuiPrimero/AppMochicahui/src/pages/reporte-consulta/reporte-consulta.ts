import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReporteProvider } from '../../providers/reporte/reporte';

/**
 * Generated class for the ReporteConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reporte-consulta',
  templateUrl: 'reporte-consulta.html',
})
export class ReporteConsultaPage {

  constructor(public navCtrl: NavController, 
    public listaR:ReporteProvider 
    ,public navParams: NavParams) {
      
      this.listaR.GetReporte(1);
  }
  imgb:string="";
  ionViewDidLoad() {
    //this.imgb=this.listaR.ListaReporte[0].Foto1;
    console.log('ionViewDidLoad ReporteConsultaPage');
  }
  ionViewWillEnter(){
    
  }

}
