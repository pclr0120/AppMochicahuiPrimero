import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginUser}from '../../Interface/ILoginUser';
import{LogUsuario}from '../../Modelo/UsuarioLogin';
import { IReporte } from '../../Interface/IReporte';
/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LoginProvider {

  public DataUser:LogUsuario=new LogUsuario();
  public Session:boolean=false;
  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
   this.Session=false;
  }
  
  
  GetUserLogin(user:string) {

    return new Promise(resolve => {
   
      this.http.get<ILoginUser>("http://192.168.0.13:3000/LogIn/"+user).subscribe(data => { 
      
      resolve(data); 
      }, err => {
        alert("Error#S0 Verifique su conenxion a internet.");
      });
    });
  }
}
