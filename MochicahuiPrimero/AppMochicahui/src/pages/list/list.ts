import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { CapturaReporePage } from '../captura-repore/captura-repore';
import { ReporteProvider } from '../../providers/reporte/reporte';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController,private reporte:ReporteProvider, private camera: Camera,public navParams: NavParams,private barcodeScanner: BarcodeScanner) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  OpenReport(Nom){
   this.reporte.reporte.CategoriaProblema=Nom;
  this.navCtrl.push(CapturaReporePage);

  }
  open2(){

    this.navCtrl.setRoot(CapturaReporePage);
  }
    scan(){

      this.barcodeScanner.scan().then(barcodeData => {
        alert(barcodeData.text);
       }).catch(err => {
        alert(JSON.stringify(err));
       });
    }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
  img1:string;
  cam(){

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 100,
        encodingType: this.camera.EncodingType.PNG,
      }).then(imageData => {
        
        //alert('THIS IS THE Base64' + imageData);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.img1=base64Image;
      }, error => {
      alert( JSON.stringify(error));
      });
  }

  openG(){

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 100,
        encodingType: this.camera.EncodingType.PNG,
      }).then(imageData => {
        this.img1=imageData;
        alert('THIS IS THE Base64' + imageData);
        let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, error => {
      alert( JSON.stringify(error));
      });
  }
}
