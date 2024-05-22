import { Component } from '@angular/core';
import { BarraNavegacionProyectosComponent } from '../barra-navegacion-proyectos/barra-navegacion-proyectos.component';
@Component({
  selector: 'app-packaging',
  standalone: true,
  imports: [BarraNavegacionProyectosComponent],
  templateUrl: './packaging.component.html',
  styleUrl: './packaging.component.css'
})
export class PackagingComponent {
  calcTamanio(multiplicador: any) {
    if(multiplicador > 1) {
      return multiplicador*447 + 48
    } else {
      return multiplicador*447
    }
  }
  
  images = [
    {url: '../../assets/Proyectos/Branding/Agustina.jpg', title: "Agustina", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: "../../assets/Proyectos/Branding/Refasi.jpg", title: "Refasi", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/Nace.jpg', title: "Nace", width: this.calcTamanio(1), height: this.calcTamanio(2)},
    {url: '../../assets/Proyectos/Branding/ElAlmacen.jpg', title: "ElAlmacen", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/Refazi.jpg', title: "Refazi", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/Proteger.jpg', title: "Proteger", width: this.calcTamanio(2), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/TechStore.jpg', title: "TechStore", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/Lilith.jpg', title: "Lilith", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/CCRecoleta.jpg', title: "CCRecoleta", width: this.calcTamanio(1), height: this.calcTamanio(1)},
    {url: '../../assets/Proyectos/Branding/AntiQ.jpg', title: "AntiQ", width: this.calcTamanio(1), height: this.calcTamanio(1)},
  ]
}
