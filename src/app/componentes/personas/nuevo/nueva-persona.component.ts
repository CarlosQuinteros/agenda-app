import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PersonaDto } from 'src/app/core/dtos/persona-dto';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css'],
  providers:[MessageService]
})
export class NuevaPersonaComponent {

  form : FormGroup;

  constructor(
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private formBuilder : FormBuilder,
    private personaService : PersonaService,
    private messageService : MessageService

  ){
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      apellido:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      telefono:['',[Validators.required,Validators.minLength(10)]],
      ciudad:['',[Validators.required,Validators.minLength(4)]]
    })
  }

  public crearPersona(){
    const personaDto : PersonaDto = {...this.form.value};
    //console.log(personaDto);
    this.personaService.crearPersona(personaDto).subscribe(
      data=>{
        this.ref.close(personaDto)
      },
      err =>{
        console.log(err.error.message);
      }
    )
    
  }

}
