import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/Interface/categoriaInterface';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit{
  categoria : ICategoria[] = [];
  //Se instancia la clase para recibir objetos del html
  categoriaNuevo : Categoria = new Categoria();

  constructor(private _CategoriaService: CategoriaService){}

  ngOnInit(): void {
    this.getCategorias()
  }

  public getCategorias(){
    this._CategoriaService.getCategorias().subscribe((res:Categoria[])=>{
      this.categoria = res;
    })
  }

  addCategoria(){
    this._CategoriaService.agregarCategoria(this.categoriaNuevo).subscribe({
      next:(res:Categoria)=>{
        console.log(res);
        this.categoriaNuevo = new Categoria();
        this.getCategorias();
      },
      error:(error : any)=>{
        console.log(error);
      }
    })
  }

  eliminarCategoria(idcategoria:number){
    this._CategoriaService.eliminarCategoria(idcategoria).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getCategorias();
        Swal.fire({
          title: "Good job!",
          text: "Se elimino satisfactoriamente!",
          icon: "success"
        });
      },
      error: (error:any)=>{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Libros contienen ésta categoria - No puede ser eliminada",
        });
        console.log(error);
      }
    })
  }
}
