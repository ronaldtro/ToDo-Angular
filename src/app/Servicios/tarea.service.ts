import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../Environments/environment';
import { Observable} from 'rxjs';
import { Tarea } from '../Interfaces/tarea'; 

@Injectable({
  providedIn: 'root'
})


export class TareaService {

  private endPoint:string = environment.endPoint;

  private apiUrl:string = this.endPoint + "Tarea/";

  constructor(private http:HttpClient) {

  }

  getList():Observable<Tarea[]>{
    return this.http.get<Tarea[]>(`${this.apiUrl}Lista`);
  }

  add(request:Tarea):Observable<Tarea>{
    return this.http.post<Tarea>(`${this.apiUrl}Agregar`, request);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}Eliminar/${id}`);
  }


}
