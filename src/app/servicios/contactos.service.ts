import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { ContactoDto } from '../core/dtos/contacto-dto';
import { Observable } from 'rxjs';
import { Contacto } from '../core/modelo/contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  private contactosURL : string = `${environment.baseURL}/contactos`;
  
  constructor(
    private httpClient : HttpClient
  ) { }

  public crearContacto(contactoDto : ContactoDto):Observable<any>{
    return this.httpClient.post<any>(this.contactosURL, contactoDto);
  }

  public editarContacto(id:number, contactoDto : ContactoDto):Observable<any>{
    return this.httpClient.put<any>(`${this.contactosURL}/${id}`, contactoDto);
  }

  public eliminarContacto(id:number):Observable<any>{
    return this.httpClient.delete<any>(`${this.contactosURL}/${id}`);
  }

  public detalleContacto(id:number):Observable<Contacto>{
    return this.httpClient.get<Contacto>(`${this.contactosURL}/${id}`);
  }

  public listadoContactos():Observable<Contacto[]>{
    return this.httpClient.get<Contacto[]>(this.contactosURL);
  }
}
