import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlquiler } from '../Interface/alquilerInterface';
import { Alquiler } from '../models/alquiler.model';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  public getAlquileres():Observable<IAlquiler[]>{
    return this.httpClient.get<IAlquiler[]>(`${this.URL}ALQUILER/listAlquiler`);
  }

  agregarAlquiler(alquiler:Alquiler){
    return this.httpClient.post<Alquiler>(`${this.URL}ALQUILER/addAlquiler`, alquiler)
  }

  eliminarAlquiler(idalquiler:number){
    return this.httpClient.delete(`${this.URL}ALQUILER/deleteAlquiler/${idalquiler}`)
  }
}
