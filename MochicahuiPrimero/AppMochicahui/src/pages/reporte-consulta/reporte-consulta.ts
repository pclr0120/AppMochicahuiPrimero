import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReporteProvider } from '../../providers/reporte/reporte';
import { LoginProvider } from '../../providers/login/login';
import { ReporteDetallePage } from '../reporte-detalle/reporte-detalle';

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
    ,public navParams: NavParams,
    private loginU:LoginProvider
    ) {

      this.listaR.GetReporte(this.loginU.DataUser.Id);
  }
  imgb:string="";
  ionViewDidLoad() {
    //this.imgb=this.listaR.ListaReporte[0].Foto1;
    console.log('ionViewDidLoad ReporteConsultaPage');
  }
  ionViewWillEnter(){
    
  }

  OpenDetalle(id:number){
    this.listaR.IdReporte=id;
    this.navCtrl.push(ReporteDetallePage)

  }

}
