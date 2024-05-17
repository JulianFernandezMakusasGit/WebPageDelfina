import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'sobreMi', component: PresentacionComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'branding', component: ProyectosComponent},
    {path: 'redesSociales', component: ProyectosComponent},
    {path: 'packaging', component: ProyectosComponent},
    {path: 'proyectos', redirectTo: 'branding'},
    {path: '**', redirectTo: 'home'}
  ];
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes), BarraSuperiorComponent],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }