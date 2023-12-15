import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona.modelo';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = "http://localhost:8080/personas"

  constructor(private _http : HttpClient) { }

  public getPersonas():Observable <Persona[]>{
    return this._http.get<Persona[]>(`${this.baseUrl}`)
  }
  public guardarPersona( pers:Persona):Observable<Persona>{
    return this._http.post<Persona>(`${this.baseUrl}/savePersona`, pers)
  }
  public deletePersona( name:String ):Observable<any>{
    return this._http.delete(`${this.baseUrl}/delete/${name}`)
  }
}
