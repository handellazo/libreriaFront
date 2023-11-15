import { Component, OnInit } from '@angular/core';
import { IAutor } from 'src/app/Interface/autorInterface';
import { ICategoria } from 'src/app/Interface/categoriaInterface';
import { IEditorial } from 'src/app/Interface/editorialInterface';
import { ILibro } from 'src/app/Interface/libroInterface';
import { Libro } from 'src/app/models/libro.model';
import { AutorService } from 'src/app/services/autor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit{
  libro: ILibro[] = [];
  autor: IAutor[] = [];
  categoria: ICategoria[] = [];
  editorial: IEditorial[] = [];

  libroNuevo : Libro = new Libro();
  
  constructor(private _LibroService: LibroService, 
              private _AutorService:AutorService, 
              private _CategoriaService:CategoriaService, 
              private _EditorialService: EditorialService){}

  ngOnInit(): void {
    this.getLibros()
    this.getAutores()
    this.getCategorias()
    this.getEditoriales()
  }

  public getLibros(){
    this._LibroService.getLibros().subscribe((res:ILibro[])=>{
      this.libro = res;
    })
  }

  public getAutores(){
    this._AutorService.getAutores().subscribe((res:IAutor[])=>{
      this.autor = res;
    })
  }

  public getCategorias(){
    this._CategoriaService.getCategorias().subscribe((res:ICategoria[])=>{
      this.categoria = res;
    })
  }

  public getEditoriales(){
    this._EditorialService.getEditoriales().subscribe((res:IEditorial[])=>{
      this.editorial = res;
    })
  }

  //Listar Autores en pestaña
  getIdAutor(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdAutor = parseInt(partes[1].trim(), 10);
      this.libroNuevo.id_autor = selecIdAutor;
      console.log("Este es el ID: " + selecIdAutor);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }
  
  //Listar Categorias en pestaña
  getIdCategoria(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdCategoria = parseInt(partes[1].trim(), 10);
      this.libroNuevo.id_categoria = selecIdCategoria;
      console.log("Este es el ID: " + selecIdCategoria);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }

  getIdEditorial(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdEditorial = parseInt(partes[1].trim(), 10);
      this.libroNuevo.id_editorial = selecIdEditorial;
      console.log("Este es el ID: " + selecIdEditorial);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }

  addLibro(){
    this._LibroService.agregarLibro(this.libroNuevo).subscribe({
      next: (res:Libro)=>{
        console.log(res);
        this.libroNuevo = new Libro();
        this.getLibros();
      }
    })
  }

  editarLibro(idAsin:number){
    
  }

  eliminarLibro(idAsin:number){
    this._LibroService.aliminarLibro(idAsin).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getLibros();
      },
      error: (error:any)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El libro tiene prestamos existentes - No puede ser eliminado",
        });
        console.log(error);
      }
    })
  }
}
