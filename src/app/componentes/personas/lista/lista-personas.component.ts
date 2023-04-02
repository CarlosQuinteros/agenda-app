import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Persona } from 'src/app/core/modelo/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
  providers:[MessageService]
})
export class ListaPersonasComponent implements OnInit {

  personas : Persona[] = []
  constructor(
    private personaService: PersonaService,
    private messageService: MessageService
    ){

  }

  ngOnInit(): void {
    this.obtenerPersonas(null, null);
  }

  public obtenerPersonas(nombre:any, apellido:any){
    this.personaService.listadoPersonas(nombre,apellido).subscribe(
      data =>{
        this.personas = data;
      }
    )
  }

  public eliminarPersona(id:number){
    this.personaService.eliminarPersona(id).subscribe(
      data=>{
        this.messageService.add({severity:'success', summary: data.mensaje});
        this.obtenerPersonas(null,null);

      },
      err=>{
        this.messageService.add({severity:'error', summary: err.error.message});
        
      }
    )
  }

}
