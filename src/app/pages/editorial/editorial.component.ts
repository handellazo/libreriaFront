import { Component } from '@angular/core';
import { IEditorial } from 'src/app/Interface/editorialInterface';
import { Editorial } from 'src/app/models/editorial.model';
import { EditorialService } from 'src/app/services/editorial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent {
  editorial : IEditorial[] = [];
  //Se instancia la clase para recibir objetos del html
  editorialNuevo : Editorial = new Editorial();

  constructor(private _EditorialService: EditorialService){}

  ngOnInit(): void {
    this.getEditoriales()
  }

  public getEditoriales(){
    this._EditorialService.getEditoriales().subscribe((res:IEditorial[])=>{
      console.log(res)
      this.editorial = res;
    })
  }

  addEditorial(){
    this._EditorialService.agregarEditorial(this.editorialNuevo).subscribe({
      next:(res:Editorial)=>{
        console.log(res);
        this.editorialNuevo = new Editorial();
        this.getEditoriales();
      },
      error:(error : any)=>{
        console.log(error);
      }
    })
  }

  eliminarEditorial(ideditorial:number){
    this._EditorialService.eliminarEditorial(ideditorial).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getEditoriales();
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
          text: "Libros contienen ésta editorial - No puede ser eliminada",
        });
        console.log(error);
      }
    })
  }

  getEditorialSingle(ideditorial:number){
    this._EditorialService.getEditorialSingle(ideditorial).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.editorialNuevo={...res
        }
      },error:(error : any)=>{
        console.log(error);
      }
    })
  }

  updateEditorial(ideditorial: number) {
    this._EditorialService.editarEditorial(this.editorialNuevo, ideditorial).subscribe({
      next: (res: any) => {
        this.editorialNuevo = new Editorial();
        this.getEditoriales();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
