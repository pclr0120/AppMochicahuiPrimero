import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import {ReporteDetallePage}from '../pages/reporte-detalle/reporte-detalle';

//componentes
import { ReporteComponent } from "../components/reporte/reporte";
import {CrearUsuarioPage } from '../pages/crear-usuario/crear-usuario';
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
import { PhotoViewer } from '@ionic-native/photo-viewer';
import{PhotoViewPage}from '../pages/photo-view/photo-view';
import{FotoVistaPage}from '../pages/foto-vista/foto-vista';
import { CallNumber } from '@ionic-native/call-number';
import { UsuarioProvider } from '../providers/usuario/usuario';
import{PerfilPage}from '../pages/perfil/perfil';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';

@NgModule({
  declarations: [
    MyApp,
    //paginas
    HomePage,
    ListPage,
    LoginPage, 
    CapturaReporePage,
    ReporteDetallePage,
    PhotoViewPage,
    FotoVistaPage,
    //temporal
   
    //compoenentes
    ReporteComponent,
    PerfilPage,
    CrearUsuarioPage,ReporteConsultaPage
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
    ReporteDetallePage,
    PhotoViewPage,
    FotoVistaPage,
    CapturaReporePage,ReporteConsultaPage,
    PerfilPage,
       //temporal
    
    //compoenentes
    ReporteComponent,
    CrearUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen, GoogleMaps,Camera,BarcodeScanner,Base64, LoginProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReporteProvider,PhotoViewer,CallNumber,
    UsuarioProvider,
    UsuarioProvider,ActionSheet
   
  ]
})
export class AppModule {}
