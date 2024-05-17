import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar'
import { RouterOutlet } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            RouterModule,
            BarraSuperiorComponent, 
            PresentacionComponent, 
            ProyectosComponent, 
            ContactoComponent, 
            MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaginaDelfina';
}
