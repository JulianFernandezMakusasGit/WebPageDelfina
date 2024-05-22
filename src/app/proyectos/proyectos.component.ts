import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrandingComponent } from './branding/branding.component';
import { PackagingComponent } from './packaging/packaging.component';
import { RedesSocialesComponent } from './redes-sociales/redes-sociales.component';
import { BarraNavegacionProyectosComponent } from './barra-navegacion-proyectos/barra-navegacion-proyectos.component';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [BrandingComponent, PackagingComponent, RedesSocialesComponent, RouterModule, BarraNavegacionProyectosComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent { 

  
}
