import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { ReporteComponent } from "../components/reporte/reporte";
import {LoginProvider}from '../providers/login/login';
import { ReporteConsultaPage } from '../pages/reporte-consulta/reporte-consulta';
import { PhotoViewPage } from '../pages/photo-view/photo-view';
import { FotoVistaPage } from '../pages/foto-vista/foto-vista';
import { PerfilPage } from '../pages/perfil/perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
    private LogActive:LoginProvider, 
    public splashScreen: SplashScreen,
  private PerfilLog: LoginProvider
    ) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
  
      this.pages = [
        { title: 'Crear Reporte', component: ListPage },
       
        { title: 'Mis Reportes', component: ReporteConsultaPage },
        
      
  
      ];
  
 

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  OpenPerfil(){

    this.nav.setRoot(PerfilPage);
  }
}
