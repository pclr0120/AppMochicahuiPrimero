import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte } from '../../Modelo/Reporte';
import { Alert, LoadingController, RadioGroup } from 'ionic-angular';
import { IReporte } from '../../Interface/IReporte';


/*
  Generated class for the ReporteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReporteProvider {


  public reporte: Reporte = new Reporte();
  public ListaReporte: Reporte[] = [];
  constructor(public http: HttpClient, public loadingCtrl: LoadingController) {
   
 

  }


  EnviarReporte() {
    return new Promise(resolve => {
      let loading = this.loadingCtrl.create({
        content: 'Enviando...'
      });

      loading.present();
      this.http.post("http://192.168.0.13:3000/reporte/", this.reporte).subscribe(res => {

        resolve(res); 

      },
        err => {


          alert("error en el envio..:" + JSON.stringify(err));

        });
      setTimeout(() => {
        loading.dismiss();

      }, 2000);
    });
  }

  GetReporte(user: number) {
    let loading = this.loadingCtrl.create({
      content: 'Obteniendo Reporte..'
    });

    loading.present();
    new Promise(resolve => {

      this.http.get<IReporte[]>("http://192.168.0.13:3000/getReporte/" + user).subscribe(data => {

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];

            this.ListaReporte.push(element);

            alert(this.ListaReporte[0].Foto1);

          }
        }
        setTimeout(() => {
          loading.dismiss();

        }, 2000);
        resolve(data);
      }, err => {
        alert("Error#S0 Verifique su conenxion a internet.");
      });
    });

  }

}

