import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Empresa } from 'src/app/core/modelo/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-lista-empresas',
  templateUrl: './lista-empresas.component.html',
  styleUrls: ['./lista-empresas.component.css'],
  providers: [MessageService]
})
export class ListaEmpresasComponent implements OnInit {

  empresas : Empresa[] = [];

  constructor(
    private empresaService : EmpresaService,
    private messageService: MessageService,
    private router: Router
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

}
