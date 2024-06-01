import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal.component';



@Component({
  selector: 'app-branding',
  standalone: true,
  imports: [MatGridListModule, ImageModalComponent],
  templateUrl: './branding.component.html',
  styleUrl: './branding.component.css'
})
export class BrandingComponent {
constructor(public dialog: MatDialog){}

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

  abrirImagen(imageSrc: string, titulo: string,description: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { imageSrc, titulo, description }
    });
  }
}
