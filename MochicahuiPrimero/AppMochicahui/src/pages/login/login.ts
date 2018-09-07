import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoginProvider}from '../../providers/login/login';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


import { RegistrarUsuarioComponent } from '../../components/registrar-usuario/registrar-usuario';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:string;
  pasS:string;
  pages: Array<{title: string, component: any}>;
  constructor(public navCtrl: NavController,private Login:LoginProvider) {
 
  }
  openPage() {
    this.navCtrl.push(RegistrarUsuarioComponent);
  }
ltemp(){

  this.Login.Session=true;
  this.navCtrl.setRoot(ListPage);
}
  login(){

  this.Login.GetUserLogin(this.user)
    .then(data => {
    
      if(data!=false ){
        if(data[0].Estatus=="ACTIVO"){
            if(this.user==data[0].Email && this.pasS==data[0].Pass){
              this.Login.DataUser.Id=data[0].Id;
              this.Login.DataUser.Email=data[0].Email;
              this.Login.DataUser.Telefono=data[0].Telefono;
              this.Login.DataUser.Email=data[0].Pass;
              this.Login.DataUser.TipoUser=data[0].TipoUser;
              this.Login.DataUser.Estatus=data[0].Estatus;
              this.Login.Session=true;
              this.navCtrl.setRoot(ListPage);

            }else
            {
                alert("Verfique que sea su cuenta y su contraseña..");
            }
        } else{
          alert("Usuario desahabilitado...");
        }
      }else{
        alert("Usuario no encontrado");
      }

    },err=>{

      alert("Error#S0:"+JSON.stringify(err)+" Verifique su conenxion a internet.");
    });
  }

}
