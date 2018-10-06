import { Component, assertPlatform } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Usuario } from '../../Modelo/Usuario';
/**
 * Generated class for the CrearUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html',
})
export class CrearUsuarioPage {
  private CPass: string = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    private userR: UsuarioProvider) {
    this.userR.crearUsuario = new Usuario();

  }

  img: string = "../assets/iconos/cam3.png";
  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearUsuarioPage');
  }
  public enviar() {
    let loading = this.loadingCtrl.create({
      content: 'Enviando datos..'
    });
    loading.present();
    if (this.userR.crearUsuario.Pass == this.CPass) {
      this.userR.veririficacionUser().then(res => {

        if (res != true) {
          this.userR.RegistrarUsuario().then(res => {
            let confirmacion: string = "";
            let c: number = 1;
            for (const key in res) {
              if (res.hasOwnProperty(key)) {
                const element = res[key];

                if (c > 1) {
                  confirmacion = element;
                  break;
                }
                c += 1;


              }
            }

            if (confirmacion == "Success"){
              setTimeout(() => {
                loading.dismiss();
            
              }, 10000);
              this.navCtrl.pop();
            
            }
           
            else{
              loading.dismiss();
              alert("error..Verfique su conexion a internet... si el el error persiste comuniquese con la sindicatura..");
            }

          }, err => {

            setTimeout(() => {
              loading.dismiss();
          
            }, 10000);
            alert("Erro al registrar verifique su conexion a internet.." + JSON.stringify(err))
          }
          );

        } else{
          alert("El Correo ya esta registrado con otro usuario... Intente con otro..");
          loading.dismiss();
        }

      });

    }
    else
      alert("Verifique que su contraseña sean iguales..");







  }
  OpenCamera(n: number) {

    this.camera.getPicture({

      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 50,
      targetHeight: 1000,
      targetWidth: 1000,
      encodingType: this.camera.EncodingType.PNG,
    }).then(imageData => {
      let loading = this.loadingCtrl.create({
        content: 'Cargando foto...'
      });
      loading.present();

      let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.img=base64Image;
      if (n == 1) {
        this.userR.crearUsuario.FotoPerfil = base64Image;
        // alert(this.userR.crearUsuario.FotoPerfil)
      }
      else
        this.userR.crearUsuario.FotoIdentificacion = base64Image;

      setTimeout(() => {
        loading.dismiss();
      }, 1000);

    }, error => {

      alert(JSON.stringify(error));

    });


  }


}
