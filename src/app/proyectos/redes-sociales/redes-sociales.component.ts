import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.css'
})
export class RedesSocialesComponent {
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
