import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';


//componentes
import { ReporteComponent } from "../components/reporte/reporte";
import { RegistrarUsuarioComponent } from '../components/registrar-usuario/registrar-usuario';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginProvider } from '../providers/login/login';
import { Base64 } from '@ionic-native/base64';
import {CapturaReporePage} from "../pages/captura-repore/captura-repore";
import { GoogleMaps } from "@ionic-native/google-maps";
import { ReporteProvider } from '../providers/reporte/reporte';
import {ReporteConsultaPage}from '../pages/reporte-consulta/reporte-consulta';
@NgModule({
  declarations: [
    MyApp,
    //paginas
    HomePage,
    ListPage,
    LoginPage, 
    CapturaReporePage,
    //compoenentes
    ReporteComponent,
    RegistrarUsuarioComponent,ReporteConsultaPage
  ],
  imports: [
    
    BrowserModule,HttpClientModule ,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //paginas
    HomePage,
    ListPage, 
    LoginPage, 
    CapturaReporePage,ReporteConsultaPage,
    //compoenentes
    ReporteComponent,
    RegistrarUsuarioComponent
  ],
  providers: [
    StatusBar,
    SplashScreen, GoogleMaps,Camera,BarcodeScanner,Base64, LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReporteProvider,
   
  ]
})
export class AppModule {}
