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

//componentes
import { ListaPersonasComponent } from './componentes/personas/lista/lista-personas.component';
import { ListaEmpresasComponent } from './componentes/empresas/lista/lista-empresas.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListaContactosComponent } from './componentes/contactos/lista-contactos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPersonasComponent,
    ListaEmpresasComponent,
    HomeComponent,
    ListaContactosComponent
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
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
