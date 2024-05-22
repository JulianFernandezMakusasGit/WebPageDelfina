import { Component, NgModule } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-barra-superior',
  standalone: true,
  imports: [MatToolbar, RouterModule],
  templateUrl: './barra-superior.component.html',
  styleUrl: './barra-superior.component.css'
})

export class BarraSuperiorComponent {
  title = 'ruta';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  scrollTo(section: string){
    this.router.navigate([], {fragment: section});
  }
}
