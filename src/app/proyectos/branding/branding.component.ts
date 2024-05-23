import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
  calcTamanio(multiplicador: any) {
    if(multiplicador > 1) {
      return multiplicador*447 + 48
    } else {
      return multiplicador*447
    }
  }
  
  images = [
    {src: '../../assets/Proyectos/Branding/Agustina.jpg', title: "Agustina", cols: 1, rows: 1},
    {src: "../../assets/Proyectos/Branding/Refasi.jpg", title: "Refasi", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/Nace.jpg', title: "Nace", cols: 1, rows: 2},
    {src: '../../assets/Proyectos/Branding/ElAlmacen.jpg', title: "ElAlmacen", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/Refazi.jpg', title: "Refazi", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/Proteger.jpg', title: "Proteger", cols: 2, rows: 1},
    {src: '../../assets/Proyectos/Branding/TechStore.jpg', title: "TechStore", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/Lilith.jpg', title: "Lilith", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/CCRecoleta.jpg', title: "CCRecoleta", cols: 1, rows: 1},
    {src: '../../assets/Proyectos/Branding/AntiQ.jpg', title: "AntiQ", cols: 1, rows: 1},
  ]
}
