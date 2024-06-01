import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [RouterModule, MatToolbar, NgIf, ContactoComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {
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

  resolucionDePc() : boolean{
    if (typeof window !== "undefined") {
      var anchoPestania = window.screen.width;
      var altoPestania = window.screen.height;
      return (anchoPestania == 1920 && altoPestania == 1080);
    }
    return false;   
  }
}
