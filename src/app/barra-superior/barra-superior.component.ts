import { Component, NgModule } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [MatToolbar, RouterModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})

export class BarraSuperiorComponent {
  title = 'ruta';

  constructor(private router: Router) {}

  onClick(pRuta: string){
    this.router.navigate([pRuta]);
  }
}
