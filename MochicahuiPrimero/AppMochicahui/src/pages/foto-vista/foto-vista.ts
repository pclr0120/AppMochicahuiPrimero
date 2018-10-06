import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReporteProvider } from '../../providers/reporte/reporte';

/**
 * Generated class for the FotoVistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-foto-vista',
  templateUrl: 'foto-vista.html',
})
export class FotoVistaPage {
    img:string="";
  constructor(public navCtrl: NavController, private Reporte:ReporteProvider,public navParams: NavParams) {
  
    this.img=this.Reporte.s
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoVistaPage');
  }

  cerrar(){ this.navCtrl.pop() }

}
