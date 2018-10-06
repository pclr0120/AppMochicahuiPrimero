
import { Injectable } from '@angular/core';
import { Usuario } from '../../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from 'ionic-angular';
import { ILoginUser } from '../../Interface/ILoginUser';
import { LogUsuario } from '../../Modelo/UsuarioLogin';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {
  public crearUsuario: Usuario;
  public perfilUser: Usuario;

  constructor(
    public http: HttpClient, public loadingCtrl: LoadingController
  ) {

  }

  //valida que no exista el correo de usuario a registrar
  //falta validar que no existe el numero,nombre, eso se hace en api

  veririficacionUser() {

    return new Promise(resolve => {

      this.http.get<ILoginUser>("http://192.168.0.10:3000/verificar/" + this.crearUsuario.Email).subscribe(data => {

        resolve(data);
      }, err => {

      });
    });
  }
  RegistrarUsuario() {

    return new Promise(resolve => {
    //  alert("consultar si el usuario ya esta");
      let loading = this.loadingCtrl.create({
        content: 'Enviando datos...'
      });

      loading.present();
      this.http.post("http://192.168.0.10:3000/usuario/", this.crearUsuario).subscribe(res => {
        setTimeout(() => {
          loading.dismiss();

        }, 1000);
        resolve(res);

      },
        err => {


          alert("error en el envio verfique su conexion a internet..Si el error persiste reportelo a la sindicatura:" + JSON.stringify(err));
          loading.dismiss();
        });
        loading.dismiss();
    });


  }
  ActualizarPerfil(Usuario: LogUsuario) {

    let loading = this.loadingCtrl.create({
      content: 'Enviando datos...'
    });
    loading.present();
    if (Usuario != null) {
      return new Promise(resolve => {


        this.http.put("http://192.168.0.10:3000/UsuarioUpdate/", Usuario).subscribe(res => {
  
      loading.dismiss();

   
          resolve(res);

        },
          err => {

    
              loading.dismiss();
       

            alert("error en el envio verfique su conexion a internet..Si el error persiste reportelo a la sindicatura:" + JSON.stringify(err));

          });

      });
    } else
      alert("Usuario no actualizado..Verfique que aya datos en los campos..");


      loading.dismiss();


  }



}
