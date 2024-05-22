import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './barra-navegacion-proyectos.component.html',
  styleUrl: './barra-navegacion-proyectos.component.css'
})
export class BarraNavegacionProyectosComponent {
  colorFondo= 'white'
  constructor(private router: Router) {}
  cambiarCategoria(pRuta: string) {
    this.router.navigate([pRuta]);
  }
  changeColor(nuevoColor: string) {
    this.colorFondo = nuevoColor
  }
}
