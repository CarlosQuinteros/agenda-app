import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EmpresaDto } from 'src/app/core/dtos/empresa-dto';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-nueva-empresa',
  templateUrl: './nueva-empresa.component.html',
  styleUrls: ['./nueva-empresa.component.css']
})
export class NuevaEmpresaComponent {
  
  form : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public ref : DynamicDialogRef,
    public config : DynamicDialogConfig,
    private empresaService: EmpresaService
  ){
    this.form = this.formBuilder.group({
      nombre:['',[Validators.required, Validators.minLength(3)]],
      sitioWeb:['',[Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      imagenUrl:['',[Validators.minLength(10)]],
    })
  }

  crearEmpresa(){
    const empresa : EmpresaDto = {...this.form.value}
    this.empresaService.crearEmpresa(empresa).subscribe(
      data=>{
        this.ref.close(empresa)
      },
      err=>{
        console.log(err.error.message);
        
      }
    )
  }
}
