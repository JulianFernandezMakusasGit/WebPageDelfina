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
  widthNum = 447;
  heightNum = 447;
  images = [
    {url: '../../assets/Proyectos/Branding/Agustina.jpg', title: "Agustina", width: "1", height: "1"},
    {url: "../../assets/Proyectos/Branding/Refasi.jpg", title: "Refasi", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/Nace.jpg', title: "Nace", width: "1", height: "2"},
    {url: '../../assets/Proyectos/Branding/ElAlmacen.jpg', title: "ElAlmacen", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/Refazi.jpg', title: "Refazi", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/Proteger.jpg', title: "Proteger", width: "2", height: "1"},
    {url: '../../assets/Proyectos/Branding/TechStore.jpg', title: "TechStore", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/Lilith.jpg', title: "Lilith", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/CCRecoleta.jpg', title: "CCRecoleta", width: "1", height: "1"},
    {url: '../../assets/Proyectos/Branding/AntiQ.jpg', title: "AntiQ", width: "1", height: "1"},
  ]
}
