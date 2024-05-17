import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [RouterModule, MatToolbar],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {
  constructor(private router: Router) { }
  ngOnInit() { }

  onClick(pRuta: string){
    this.router.navigate([pRuta]);
  }

  async onClickActivas() { }

  goToLinkedIn() {
    window.location.href = "https://www.linkedin.com/in/julian-fern%C3%A1ndez-makusas/";
  }
  
  desglozaCorreo() {
    throw new Error('Method not implemented.');
  }
  
  goToInstagram() {
    window.location.href = "https://www.instagram.com/julian_fernandez_makusas/";
  }

  descargarCV() {
    throw new Error('Method not implemented.');
  }
}
