import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAutor} from '../Interface/autorInterface';
import { Autor } from '../models/autor.model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getAutores():Observable<IAutor[]>{
    return this.http.get<IAutor[]>(`${this.URL}AUTOR/listAutor`)
  }

  getAutorSingle(idautor: number):Observable<IAutor>{
    return this.http.get<IAutor>(`${this.URL}AUTOR/buscarAutorPorId/${idautor}`)
  }

  //post es con model para recibir datos
  agregarAutor(autor:Autor){
    //autor son los datos que se estan mandando (objeto autor de tipo Autor)
    return this.http.post<Autor>(`${this.URL}AUTOR/addAutor`, autor)
  }

  eliminarAutor(idautor:number){
    return this.http.delete(`${this.URL}AUTOR/deleteAutor/${idautor}`)
  }

  editarAutor(autor:Autor, idautor:number){
  return this.http.put<Autor>(`${this.URL}AUTOR/updateAutor/${idautor}`, autor)
  }
}
