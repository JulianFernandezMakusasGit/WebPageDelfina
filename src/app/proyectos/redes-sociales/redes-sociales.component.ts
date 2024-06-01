import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal.component';


@Component({
  selector: 'app-redes-sociales',
  standalone: true,
  imports: [MatGridListModule, ImageModalComponent],
  templateUrl: './redes-sociales.component.html',
  styleUrl: './redes-sociales.component.css'
})
export class RedesSocialesComponent {
  constructor(public dialog: MatDialog){}
  
  images = [
    {url: '../../assets/Proyectos/Branding/Agustina.jpg', title: "Agustina"},
    {url: "../../assets/Proyectos/Branding/Refasi.jpg", title: "Refasi"},
    {url: '../../assets/Proyectos/Branding/Nace.jpg', title: "Nace"},
    {url: '../../assets/Proyectos/Branding/ElAlmacen.jpg', title: "ElAlmacen"},
    {url: '../../assets/Proyectos/Branding/Refazi.jpg', title: "Refazi"},
    {url: '../../assets/Proyectos/Branding/Proteger.jpg', title: "Proteger"},
    {url: '../../assets/Proyectos/Branding/TechStore.jpg', title: "TechStore"},
    {url: '../../assets/Proyectos/Branding/Lilith.jpg', title: "Lilith"},
    {url: '../../assets/Proyectos/Branding/CCRecoleta.jpg', title: "CCRecoleta"},
    {url: '../../assets/Proyectos/Branding/AntiQ.jpg', title: "AntiQ"},
  ]

  abrirImagen(imageSrc: string, titulo: string,description: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { imageSrc, titulo, description }
    });
  }
}
