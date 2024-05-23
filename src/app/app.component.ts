import { Component, AfterViewInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BarraNavegacionProyectosComponent } from './proyectos/barra-navegacion-proyectos/barra-navegacion-proyectos.component';
import { Router, NavigationEnd } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { BrandingComponent } from './proyectos/branding/branding.component';
import { PackagingComponent } from './proyectos/packaging/packaging.component';
import { RedesSocialesComponent } from './proyectos/redes-sociales/redes-sociales.component';
import { BotonToTopComponent } from './boton-to-top/boton-to-top.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterModule,
            BarraSuperiorComponent, 
            PresentacionComponent, 
            ProyectosComponent, 
            BrandingComponent,
            PackagingComponent,
            RedesSocialesComponent,
            ContactoComponent, 
            MatToolbar,
            BarraNavegacionProyectosComponent,
            BotonToTopComponent,
            SobreMiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaginaDelfina';

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const tree = this.router.parseUrl(this.router.url);
        if (tree.fragment) {
          document.getElementById(tree.fragment)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
