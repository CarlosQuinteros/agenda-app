import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/core/modelo/contacto';
import { Empresa } from 'src/app/core/modelo/empresa';
import { EmpresaService } from 'src/app/servicios/empresa.service';

@Component({
  selector: 'app-contactos-empresa',
  templateUrl: './contactos-empresa.component.html',
  styleUrls: ['./contactos-empresa.component.css']
})
export class ContactosEmpresaComponent implements OnInit {
  
  idEmpresa : number = 0;
  contactos : Contacto[] = [];
  empresa! : Empresa;

  constructor(
    private activatedRoute : ActivatedRoute,
    private empresaService : EmpresaService,
    private router : Router
  ){
    this.idEmpresa = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.obtenerContactos()
    this.obtenerEmpresa();
  }

  public obtenerContactos(){
    this.empresaService.contactos(this.idEmpresa).subscribe(
      data=>{
        this.contactos = data; 
      },
      err=>{
        this.router.navigate(['home']);
      }
    )
  }

  public obtenerEmpresa(){
    this.empresaService.detalleEmpresa(this.idEmpresa).subscribe(
      data=>{
        this.empresa = data;
      }
    )
  }

}
