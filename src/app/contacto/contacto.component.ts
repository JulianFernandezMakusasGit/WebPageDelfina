import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [MatToolbar, RouterModule, NgIf],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  constructor(private router: Router) { }
  ngOnInit() { }

  showCopyConfirmation = false;

  copyText() {
    const textToCopy = "Este es el texto que quiero copiar"; // El texto que quieres copiar
    navigator.clipboard.writeText(textToCopy).then(() => {
        this.showCopyConfirmation = true;
        setTimeout(() => {
          this.showCopyConfirmation = false;
        }, 2000); // Ocultar el mensaje después de 2 segundos
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
  }
  
  onClick(pRuta: string){
    this.router.navigate([pRuta]);
  }

  async onClickActivas() { }

  goToLinkedIn() {
    const url = "https://www.linkedin.com/in/julian-fern%C3%A1ndez-makusas/";
    const nuevaPestania = window.open(url, '_blank');
    nuevaPestania?.focus;
  }
  
  desglozaCorreo() {
    const textToCopy = "Este es el texto que quiero copiar"; // El texto que quieres copiar
    navigator.clipboard.writeText(textToCopy).then(() => {
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
  }
  
  goToInstagram() {
    const url = "https://www.instagram.com/julian_fernandez_makusas/";
    const nuevaPestania = window.open(url, '_blank');
    nuevaPestania?.focus;
  }

  descargarCV() {
    const url = "../../assets/Presentacion/CurriculumVitae.pdf";
    const nuevaPestania = window.open(url, '_blank');
    nuevaPestania?.focus;;
  }
}
