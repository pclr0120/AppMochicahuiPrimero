import { Component } from '@angular/core';

/**
 * Generated class for the RegistrarUsuarioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'registrar-usuario',
  templateUrl: 'registrar-usuario.html'
})
export class RegistrarUsuarioComponent {

  text: string;

  constructor() {
    console.log('Hello RegistrarUsuarioComponent Component');
    this.text = 'Hello World';
  }

}
