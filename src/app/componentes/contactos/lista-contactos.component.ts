import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Contacto } from 'src/app/core/modelo/contacto';
import { ContactosService } from 'src/app/servicios/contactos.service';
import { NuevoContactoComponent } from './Nuevo/nuevo-contacto.component';
import { EditarContactoComponent } from './editar/editar-contacto.component';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
  providers: [MessageService, DialogService]
})
export class ListaContactosComponent implements OnInit{
  
  contactos : Contacto[] = [];
  ref! : DynamicDialogRef

  constructor(
    private contactoService: ContactosService,
    private messageService: MessageService,
    private dialogService: DialogService,
  ){

  }
  ngOnInit(): void {
    this.listadoContactos();
  }

  listadoContactos(): void {
    this.contactoService.listadoContactos().subscribe(
      data =>
      {
        this.contactos = data;
      }
    )
  }

  eliminarContacto(id: number){
    this.contactoService.eliminarContacto(id).subscribe(
      data=>{
        this.messageService.add({severity:'success', summary: data.mensaje});
        this.listadoContactos();
      },
      err=>{
        this.messageService.add({severity:'error', summary:err.error.message});
      }
    )
  }

  mostrarCrearContacto(){
    this.ref = this.dialogService.open(NuevoContactoComponent, {
      header: 'Crear Contacto',
      contentStyle: {"max-width":"700px"}
    })

    this.ref.onClose.subscribe((contacto)=>{
      if(contacto){
        this.messageService.add({severity:'success', summary:'Contacto creado correctamente', detail: contacto.titulo});
        this.listadoContactos();
      }
    })
  }

  mostrarEditarContacto(contactoEditar : Contacto){
    this.ref = this.dialogService.open(EditarContactoComponent, {
      header: 'Editar Contacto',
      contentStyle: {"max-width":"700px"},
      data:{
        contacto : contactoEditar
      }
    })

    this.ref.onClose.subscribe((contacto)=>{
      if(contacto){
        this.messageService.add({severity:'success', summary:'Contacto editado correctamente', detail: contacto.titulo});
        this.listadoContactos();
      }
    })
  }


}
