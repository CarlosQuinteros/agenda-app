import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PersonaDto } from 'src/app/core/dtos/persona-dto';
import { Persona } from 'src/app/core/modelo/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent {
  form: FormGroup
  persona! : Persona

  constructor(
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder,
    private personaService : PersonaService
  ){
    this.persona = this.config.data.persona;
    this.form = this.formBuilder.group({
      nombre:[this.persona.nombre,[Validators.required, Validators.minLength(3)]],
      apellido:[this.persona.apellido,[Validators.required,Validators.minLength(3)]],
      email:[this.persona.email,[Validators.required,Validators.email]],
      telefono:[this.persona.telefono,[Validators.required,Validators.minLength(10)]],
      ciudad:[this.persona.ciudad,[Validators.required,Validators.minLength(4)]]
    })
  }

  editarPersona(){
    const personaDto : PersonaDto = {...this.form.value}
    this.personaService.editarPersona(this.persona.id, personaDto).subscribe(
      data=>{
        this.ref.close(personaDto);
      },
      err=>{
        console.log(err.error.message);
        
      }
    )
    
  }
}
