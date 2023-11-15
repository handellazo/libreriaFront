import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILector } from '../Interface/lectorInterface';
import { Lector } from '../models/lector.model';

@Injectable({
  providedIn: 'root'
})
export class LectorService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }
  
  public getLectores():Observable<ILector[]>{
    return this.httpClient.get<ILector[]>(`${this.URL}LECTOR/listLector`);
  }

  agregarLector(lector:Lector){
    return this.httpClient.post<Lector>(`${this.URL}LECTOR/addLector`, lector)
  }

  eliminarLector(idlector:number){
    return this.httpClient.delete(`${this.URL}LECTOR/deleteLector/${idlector}`)
  }
}