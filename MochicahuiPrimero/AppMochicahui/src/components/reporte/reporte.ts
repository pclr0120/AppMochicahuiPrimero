import { Component } from '@angular/core';

/**
 * Generated class for the ReporteComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'reporte',
  templateUrl: 'reporte.html'
})
export class ReporteComponent {

  text: string;

  constructor() {
    console.log('Hello ReporteComponent Component');
    this.text = 'Hello World';
  }




 
}
