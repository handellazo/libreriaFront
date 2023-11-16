import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEditorial } from '../Interface/editorialInterface';
import { HttpClient } from '@angular/common/http';
import { Editorial } from '../models/editorial.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {
  URL : string = 'http://localhost:8080/api/';

  constructor(private httpClient:HttpClient) { }

  public getEditoriales():Observable<IEditorial[]>{
    return this.httpClient.get<IEditorial[]>(`${this.URL}EDITORIAL/listEditorial`);
  }

  getEditorialSingle(ideditorial: number):Observable<IEditorial>{
    return this.httpClient.get<IEditorial>(`${this.URL}EDITORIAL/buscarEditorialPorId/${ideditorial}`)
  }

  agregarEditorial(editorial:Editorial){
    return this.httpClient.post<Editorial>(`${this.URL}EDITORIAL/addEditorial`, editorial)
  }

  eliminarEditorial(ideditorial:number){
    return this.httpClient.delete(`${this.URL}EDITORIAL/deleteEditorial/${ideditorial}`)
  }

  editarEditorial(editorial:Editorial, ideditorial:number){
    return this.httpClient.put<Editorial>(`${this.URL}EDITORIAL/updateEditorial/${ideditorial}`, editorial)
    }
}
