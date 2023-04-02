import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Empresa } from '../core/modelo/empresa';
import { Contacto } from '../core/modelo/contacto';
import { EmpresaDto } from '../core/dtos/empresa-dto';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private empresaURL : string = `${environment.baseURL}/empresas`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public listadoEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(this.empresaURL);
  }

  public detalleEmpresa(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(`${this.empresaURL}/${id}`);
  }

  public contactos(id:number):Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(`${this.empresaURL}/${id}/contactos`);
  }

  public crearEmpresa(empresaDto : EmpresaDto):Observable<any>{
    return this.httpClient.post<any>(this.empresaURL, empresaDto);
  }

  public editarEmpresa(id:number, empresaDto : EmpresaDto):Observable<any>{
    return this.httpClient.put<any>(`${this.empresaURL}/${id}`, empresaDto);
  }

  public eliminarEmpresa(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.empresaURL}/${id}`);
  }
}
