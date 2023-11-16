import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICategoria } from "../Interface/categoriaInterface";
import { Categoria } from "../models/categoria.model";

@Injectable({
    providedIn: 'root'
  })
  export class CategoriaService {
    URL : string = 'http://localhost:8080/api/';
  
    constructor(private http:HttpClient) { }
  
    getCategorias():Observable<ICategoria[]>{
      return this.http.get<ICategoria[]>(`${this.URL}CATEGORIA/listCategoria`)
    }

    getCategoriaSingle(idcategoria: number):Observable<ICategoria>{
      return this.http.get<ICategoria>(`${this.URL}CATEGORIA/buscarCategoriaPorId/${idcategoria}`)
    }
  
    //post es con model para recibir datos
    agregarCategoria(categoria:Categoria){
      //autor son los datos que se estan mandando (objeto autor de tipo Autor)
      return this.http.post<Categoria>(`${this.URL}CATEGORIA/addCategoria`, categoria)
    }

    eliminarCategoria(idcategoria:number){
      return this.http.delete(`${this.URL}CATEGORIA/deleteCategoria/${idcategoria}`)
    }

    editarCategoria(categoria:Categoria, idcategoria:number){
      return this.http.put<Categoria>(`${this.URL}CATEGORIA/updateCategoria/${idcategoria}`, categoria)
      }
  }