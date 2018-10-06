import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReporteProvider } from '../../providers/reporte/reporte';

/**
 * Generated class for the PhotoViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-photo-view',
  templateUrl: 'photo-view.html',
})
export class PhotoViewPage {
img:string="";
  constructor(public navCtrl: NavController,  private reporte: ReporteProvider,public navParams: NavParams) {
  
    this.img = this.reporte.s;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoViewPage');
    this.img = this.reporte.s;
  }
  salir(){
      this.navCtrl.pop();
  }

}
