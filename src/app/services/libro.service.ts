import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibro } from '../Interface/libroInterface';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }
  
  public getLibros():Observable<ILibro[]>{
    return this.httpClient.get<ILibro[]>(`${this.URL}LIBRO/listLibro`);
  }

  agregarLibro(libro:Libro){
    return this.httpClient.post<Libro>(`${this.URL}LIBRO/addLibro`, libro)
  }

  aliminarLibro(idAsin:number){
    return this.httpClient.delete(`${this.URL}LIBRO/deleteLibro/${idAsin}`)
  }
}
