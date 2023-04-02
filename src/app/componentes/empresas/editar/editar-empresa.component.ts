import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmpresaDto } from 'src/app/core/dtos/empresa-dto';
import { Empresa } from 'src/app/core/modelo/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {

  form : FormGroup;
  empresa! : Empresa

  constructor(
    private empresaService: EmpresaService,
    private config: DynamicDialogConfig,
    private ref : DynamicDialogRef,
    private formBuilder: FormBuilder
  ){
    this.empresa = this.config.data.empresa;
    this.form = this.formBuilder.group({
      nombre:[this.empresa.nombre,[Validators.required, Validators.minLength(3)]],
      sitioWeb:[this.empresa.sitioWeb,[Validators.required,Validators.minLength(4)]],
      email:[this.empresa.email,[Validators.required,Validators.email]],
      imagenUrl:[this.empresa.imagenUrl,[Validators.minLength(10)]],
    })
  }

  editarEmpresa(){
    const empresaDto : EmpresaDto = {...this.form.value};
    this.empresaService.editarEmpresa(this.empresa.id,empresaDto).subscribe(
      data=>{
        this.ref.close(empresaDto);
      },
      err=>{
        console.log(err.error.message);
        
      }
    )
  }
}
