import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [MatGridListModule, CommonModule],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
  images = [
    {url: '../../assets/Proyectos/Branding/Agustina.jpg', title: "Agustina", width: "", height: ""},
    {url: '../../assets/Proyectos/Branding/AntiQ.jpg', title: "AntiQ", width: "", height: ""},
    {url: '../../assets/Proyectos/Branding/CCRecoleta.jpg', title: "CCRecoleta", width: "", height: ""},
    {url: '../../assets/Proyectos/Branding/ElAlmacen.jpg', title: "ElAlmacen", width: "", height: ""},
    {url: '../../assets/Proyectos/Branding/Lilith.jpg', title: "Lilith", width: "", height: ""},
  ]
}
