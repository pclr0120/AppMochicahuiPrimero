import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { ListPage } from '../list/list';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: string;
  pasS: string;
  pages: Array<{ title: string, component: any }>;
  constructor(public navCtrl: NavController
    , private Login: LoginProvider,
    public loadingCtrl: LoadingController) {

  }
  openPage() {
    this.navCtrl.push(CrearUsuarioPage);
  }
  ltemp() {

    this.Login.Session = true;
    this.navCtrl.setRoot(ListPage);
  }
  login() {
    let loading = this.loadingCtrl.create({
      content: 'Verificando...'
    });
    loading.present();
    this.Login.GetUserLogin(this.user)
      .then(data => {


        if (data != false) {
          if (data[0].Estatus == "ACTIVO") {
            //  alert(this.user+'/'+data[0].Email+'/'+this.pasS+'/'+data[0].Pass);
            if (this.user == data[0].Email && this.pasS == data[0].Pass) {
                 this.Login.DataUser.Id=data[0].Id;
                this.Login.DataUser.Email=data[0].Email;
                 this.Login.DataUser.Telefono=data[0].Telefono;
              //   this.Login.DataUser.Email=data[0].Pass;
              //  // this.Login.DataUser.TipoUser=data[0].TipoUser;
              //   this.Login.DataUser.Estatus=data[0].Estatus;
              //   alert(this.Login.DataUser.NombreCompleto)

              ///guardar
              this.Login.Session = true;
              
              this.navCtrl.setRoot(ListPage);

            } else {

              alert("Verfique que sea su cuenta y su contraseña..");
            }
          } else {

            alert("Usuario desahabilitado...");
          }
        } else {

          alert("Usuario no encontrado");
        }



      }, err => {
        setTimeout(() => {
          loading.dismiss();
    
        }, 500);

        alert("Error#S0:" + JSON.stringify(err) + " Verifique su conenxion a internet.");
      });

    setTimeout(() => {
      loading.dismiss();

    }, 1000);
  }


}
