import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginUser}from '../../Interface/ILoginUser';
import{LogUsuario}from '../../Modelo/UsuarioLogin';
import { IReporte } from '../../Interface/IReporte';
import { LoadingController } from 'ionic-angular';
import { Usuario } from '../../Modelo/Usuario';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LoginProvider {
  public DataUser:LogUsuario=new LogUsuario();
  public Session:boolean=false;
  public RegistroUser:Usuario=new Usuario();
  public perfil:Usuario[]=[];
  constructor(public http: HttpClient) {
   this.Session=false;


  }
  
  
  GetUserLogin(user:string) {

    return new Promise(resolve => {
  let u:string[]=[];
      this.http.get<ILoginUser>("http://192.168.0.10:3000/LogIn/"+user).subscribe(data => { 
   
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];

            this.perfil.push(element);

          //  alert(this.ListaReporte[0].Foto1);

          }
        }
      //  this.perfil[0].FotoPerfil="../assets/iconos/cam3.png";
        //this.perfil[0].FotoIdentificacion="../assets/iconos/cam3.png";


      // this.perfil.Id=u[0];
      // this.perfil.Email=data[0].Email;
      // this.perfil.NombreCompleto=data[0].NombreCompleto;
      // this.perfil.Pass=data[0].Pass;
      // this.perfil.Telefono=data[0].Telefono;
      // this.perfil.FechaNacimiento=data[0].FechaNacimiento;
      // this.perfil.Domicilio=data[0].Domicilio;
      // this.perfil.FotoPerfil=data[0].FotoPerfil;
      // this.perfil.FotoIdentificacion=data[0].FotoIdentificacion;
      resolve(data); 
      }, err => {
          alert("Error de conexion#:Verifique que tenga conexion a internet..");
      });
    });
  }
}
