import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RedesSocialesComponent } from './proyectos/redes-sociales/redes-sociales.component';
import { PackagingComponent } from './proyectos/packaging/packaging.component';
import { BrandingComponent } from './proyectos/branding/branding.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

export const routes: Routes = [
  {path: 'branding', component: BrandingComponent},
  {path: 'redesSociales', component: RedesSocialesComponent},
  {path: 'packaging', component: PackagingComponent}
];
  
  @NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }