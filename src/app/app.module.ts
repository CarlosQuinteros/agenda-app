import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//PrimeNG
import { ButtonModule } from  'primeng/button'
import { TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { ChipsModule } from 'primeng/chips';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';

//componentes
import { ListaPersonasComponent } from './componentes/personas/lista/lista-personas.component';
import { ListaEmpresasComponent } from './componentes/empresas/lista/lista-empresas.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaContactosComponent } from './componentes/contactos/lista-contactos.component';
import { ContactosEmpresaComponent } from './componentes/empresas/contactos/contactos-empresa.component';
import { NuevaPersonaComponent } from './componentes/personas/nuevo/nueva-persona.component';
import { EditarPersonaComponent } from './componentes/personas/editar/editar-persona.component';
import { NuevaEmpresaComponent } from './componentes/empresas/nuevo/nueva-empresa.component';
import { EditarEmpresaComponent } from './componentes/empresas/editar/editar-empresa.component';
import { NuevoContactoComponent } from './componentes/contactos/Nuevo/nuevo-contacto.component';
import { EditarContactoComponent } from './componentes/contactos/editar/editar-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    ListaEmpresasComponent,
    HomeComponent,
    ListaContactosComponent,
    ContactosEmpresaComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    NuevaEmpresaComponent,
    EditarEmpresaComponent,
    NuevoContactoComponent,
    EditarContactoComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule,
    TableModule,
    ToastModule,
    AccordionModule,
    ChipsModule,
    DynamicDialogModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
