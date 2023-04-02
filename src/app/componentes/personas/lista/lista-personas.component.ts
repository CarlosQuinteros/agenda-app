import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Persona } from 'src/app/core/modelo/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { NuevaPersonaComponent } from '../nuevo/nueva-persona.component';
import { EditarPersonaComponent } from '../editar/editar-persona.component';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css'],
  providers:[MessageService, DialogService]
})
export class ListaPersonasComponent implements OnInit {

  personas : Persona[] = []
  formCiudad : FormGroup;
  formPersonasVariasCiudades: FormGroup;
  ref!: DynamicDialogRef;

  constructor(
    private personaService: PersonaService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService
    ){
      this.formCiudad = this.formBuilder.group({
        ciudad : ['',[Validators.required, Validators.minLength(3)]]
      });

      this.formPersonasVariasCiudades = this.formBuilder.group({
        nombre :['',[Validators.required, Validators.minLength(3)]],
        apellido :['',[Validators.required, Validators.minLength(3)]],
        ciudades :[null, [Validators.required]]
      })
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

  public buscarPersonasPorCiudad(){
    //console.log(this.formCiudad.get('ciudad')?.value);
    const ciudad = this.formCiudad.get('ciudad')?.value;
    this.personaService.personasPorCiudad(ciudad).subscribe(
      data =>{
        this.personas = data;
      }
    )
  }

  public buscarPersonasEnVariasCiudades(){
    //console.log(this.formPersonasVariasCiudades.value);
    const nombre = this.formPersonasVariasCiudades.value.nombre;
    const apellido = this.formPersonasVariasCiudades.value.apellido;
    const ciudades = this.formPersonasVariasCiudades.value.ciudades;
    this.personaService.personasPorVariasCiudades(nombre, apellido, ciudades).subscribe(
      data => {
        this.personas = data;
        this.formPersonasVariasCiudades.reset();
      }
    )   
    
  }

  mostrarCrearPersona(){
    this.ref = this.dialogService.open(NuevaPersonaComponent,{
      header:'Crear Persona',
      contentStyle:{"max-width":"700px"}
    })

    this.ref.onClose.subscribe((persona) => {
      if(persona){
        this.messageService.add({severity:'success', summary: 'Persona creada correctamente', detail:`${persona.nombre} ${persona.apellido}`});
        this.obtenerPersonas(null,null);
      }
    })
  }

  mostrarEditarPersona(personaEditar : Persona){
    this.ref = this.dialogService.open(EditarPersonaComponent, {
      header:'Editar Persona',
      contentStyle:{"max-width":"700px"},
      data:{
        persona:personaEditar
      }
    })

    this.ref.onClose.subscribe((persona) => {
      if(persona){
        this.messageService.add({severity:'success', summary: 'Persona editada correctamente', detail:`${persona.nombre} ${persona.apellido}`});
        this.obtenerPersonas(null,null);
      }
    })
  }
 

}
