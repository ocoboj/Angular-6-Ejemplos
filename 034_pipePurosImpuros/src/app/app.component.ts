import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipePurosImpuros';

  fechas: Date [] = [];
  
  anadirFecha() {
    this.fechas.push(new Date());
    //pipe puro
    /* let fechas2 = this.fechas.slice();
    this.fechas = fechas2; */
  }

}
