import { Component, OnInit } from '@angular/core';
import { IAutor } from 'src/app/Interface/autorInterface';
import { Autor } from 'src/app/models/autor.model';
import { AutorService } from 'src/app/services/autor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit{
  autor : IAutor[] = [];
  //Se instancia la clase para recibir objetos del html
  autorNuevo : Autor = new Autor();

  constructor(private _AutorService: AutorService){}

  ngOnInit(): void {
    this.getAutores()
  }

  public getAutores(){
    this._AutorService.getAutores().subscribe((res:Autor[])=>{
      this.autor = res;
    })
  }

  addAutor(){
    this._AutorService.agregarAutor(this.autorNuevo).subscribe({
      next:(res:Autor)=>{
        console.log(res);
        this.autorNuevo = new Autor();
        this.getAutores();
      },
      error:(error : any)=>{
        console.log(error);
      }
    })
  }

  eliminarAutor(idautor:number){
    this._AutorService.eliminarAutor(idautor).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getAutores();
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
          text: "El autor esta integrado en un Libro - No puede ser eliminado",
        });
        console.log(error);
      }
    })
  }

  getAutorSingle(idautor:number){
    this._AutorService.getAutorSingle(idautor).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.autorNuevo={...res
        }
      },error:(error : any)=>{
        console.log(error);
      }
    })
  }

  updateAutor(idautor: number) {
    this._AutorService.editarAutor(this.autorNuevo, idautor).subscribe({
      next: (res: any) => {
        this.autorNuevo = new Autor();
        this.getAutores();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
