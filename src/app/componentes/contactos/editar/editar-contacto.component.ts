import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactoDto } from 'src/app/core/dtos/contacto-dto';
import { Contacto } from 'src/app/core/modelo/contacto';
import { Empresa } from 'src/app/core/modelo/empresa';
import { Persona } from 'src/app/core/modelo/persona';
import { ContactosService } from 'src/app/servicios/contactos.service';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent {

  personas : Persona[] = [];
  empresas : Empresa[] = [];
  form : FormGroup;
  contacto!: Contacto

  constructor(
    private formBuilder: FormBuilder,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private empresaService: EmpresaService,
    private personaService: PersonaService,
    private contactoService: ContactosService
  ){
    this.contacto = this.config.data.contacto;
    this.form = this.formBuilder.group({
      titulo:[this.contacto.titulo,[Validators.required, Validators.minLength(3)]],
      imagenUrl:[this.contacto.imagenUrl,[Validators.minLength(5)]],
      persona:[this.contacto.persona,[Validators.required]],
      empresa:[this.contacto.empresa,[Validators.required]],
      
    })
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerPersonas();
  }

  obtenerPersonas(){
    this.personaService.listadoPersonas(null,null).subscribe(
      data => {
        this.personas = data;
      }
    )
  }

  obtenerEmpresas(){
    this.empresaService.listadoEmpresas().subscribe(
      data =>{
        this.empresas = data;
      }
    )
  }

  editarContacto(){
    const contacto : ContactoDto = {
      titulo : this.form.value.titulo,
      imagenUrl: this.form.value.imagenUrl,
      idPersona : this.form.value.persona.id,
      idEmpresa : this.form.value.empresa.id
    }
    //console.log(contacto);
    this.contactoService.editarContacto(this.contacto.id,contacto).subscribe(
      data =>{
        this.ref.close(contacto);
      },
      err=>{
        console.log(err.error.message);
        
      }
    )
    
  }
}
