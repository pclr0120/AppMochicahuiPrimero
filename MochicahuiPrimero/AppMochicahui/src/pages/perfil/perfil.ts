import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Usuario } from '../../Modelo/Usuario';
import { LoginProvider } from '../../providers/login/login';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  private CPass: string = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private perfil: UsuarioProvider,
    private actionSheet: ActionSheet,
    private PerfilLog: LoginProvider) {
 
    this.CPass = this.PerfilLog.perfil[0].Pass;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  private ActualizarPerfil() {

    this.perfil.ActualizarPerfil(this.PerfilLog.perfil[0]).then(res=>{
      if(res!=null)
        alert("Datos actualizados correctamente..");
        else
        alert("Error problemas al actualizar los datos. Intente de nuevo");
    });
  }


  Action() {


    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

    const options: ActionSheetOptions = {
      title: 'What do you want with this image?',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Delete',
    //  androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
    });
  }


}
