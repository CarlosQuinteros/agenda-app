import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Empresa } from 'src/app/core/modelo/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { NuevaEmpresaComponent } from '../nuevo/nueva-empresa.component';
import { EditarEmpresaComponent } from '../editar/editar-empresa.component';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css'],
  providers: [MessageService, DialogService]
})
export class ListaEmpresasComponent implements OnInit {

  empresas : Empresa[] = [];
  ref! : DynamicDialogRef;

  constructor(
    private empresaService : EmpresaService,
    private messageService: MessageService,
    private dialogService: DialogService
  ){
    
  }
  ngOnInit(): void {
    this.listadoEmpresas();
  }

  listadoEmpresas(): void {
    this.empresaService.listadoEmpresas().subscribe(
      data =>{
        this.empresas = data;
      }
    )
  }

  eliminarEmpresa(id:number){
    this.empresaService.eliminarEmpresa(id).subscribe(
      data => {
        this.messageService.add({severity:'success', summary: data.mensjae});
        this.listadoEmpresas();
      },
      err =>{
        this.messageService.add({severity:'error', summary: err.error.message});
      }
    )
  }

  mostrarCrearEmpresa(){
    this.ref = this.dialogService.open(NuevaEmpresaComponent, {
      header:'Crear Empresa',
      contentStyle:{"max-width":"700px"}
    })

    this.ref.onClose.subscribe(
      (empresa)=>{
        if(empresa){
          this.messageService.add({severity:'success', summary: 'Empresa creada correctamente', detail:empresa.nombre});
          this.listadoEmpresas();
        }
      }
    )
  }

  mostrarEditarEmpresa(empresaEditar : Empresa){
    this.ref = this.dialogService.open(EditarEmpresaComponent,{
      header: 'Editar Empresa',
      contentStyle:{"max-width":"700px"},
      data:{
        empresa : empresaEditar
      }
    })

    this.ref.onClose.subscribe(
      (empresa)=>{
        if(empresa){
          this.messageService.add({severity:'success', summary: 'Empresa editada correctamente', detail:empresa.nombre});
          this.listadoEmpresas();
        }
      }
    )
  }

}
