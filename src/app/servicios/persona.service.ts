import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { PersonaDto } from '../core/dtos/persona-dto';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from '../core/modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private personaURL : string = `${environment.baseURL}/personas`

  constructor(
    private httpClient : HttpClient
  ) { }

  public crearPersona(personaDto : PersonaDto):Observable<any> {
    return this.httpClient.post<any>(this.personaURL, personaDto);
  }

  public editarPersona(id:number, personaDto : PersonaDto): Observable<any>{
    return this.httpClient.put<any>(`${this.personaURL}/${id}`, personaDto);
  }

  public detallePersona(id:number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.personaURL}/${id}`);
  }

  public eliminarPersona(id:number): Observable<any>{
    return this.httpClient.delete<any>(`${this.personaURL}/${id}`);
  }

  public listadoPersonas(nombre:any, apellido:any):Observable<Persona[]>{
    let params = new HttpParams();
    if(nombre){
      params = params.append('nombre', nombre);
    }
    if(apellido){
      params = params.append('apellido', apellido);
    }
    
    return this.httpClient.get<Persona[]>(`${this.personaURL}`,{params});
  }

  public personasPorCiudad(ciudad:string):Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.personaURL}/ciudad/${ciudad}`);
  }

  public personasPorVariasCiudades(nombre:string, apellido:string, ciudad:string[]):Observable<Persona[]>{
    let params = new HttpParams().set('nombre', nombre).set('apellido', apellido);
    ciudad.forEach(ciudad => params= params.append('ciudad', ciudad));

    console.log({params});
    
    return this.httpClient.get<Persona[]>(`${this.personaURL}/varias-ciudades`,{params});
  }


}
