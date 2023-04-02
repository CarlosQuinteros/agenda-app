import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contacto } from 'src/app/core/modelo/contacto';
import { ContactosService } from 'src/app/servicios/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css'],
  providers: [MessageService]
})
export class ListaContactosComponent implements OnInit{
  
  contactos : Contacto[] = [];

  constructor(
    private contactoService: ContactosService,
    private messageService: MessageService
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


}
