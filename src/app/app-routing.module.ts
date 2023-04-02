import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ContactosEmpresaComponent } from './componentes/empresas/contactos/contactos-empresa.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'home', pathMatch:'full'
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'empresas/:id/contactos', component: ContactosEmpresaComponent
  },
  {
    path:'**', redirectTo: 'home', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
