import { Component, OnInit } from '@angular/core';
import { ILector } from 'src/app/Interface/lectorInterface';
import { Lector } from 'src/app/models/lector.model';
import { LectorService } from 'src/app/services/lector.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lector',
  templateUrl: './lector.component.html',
  styleUrls: ['./lector.component.css']
})
export class LectorComponent implements OnInit{
  lector : ILector[] = [];
  //Se instancia la clase para recibir objetos del html
  lectorNuevo : Lector = new Lector();

  constructor(private _LectorService: LectorService){}

  ngOnInit(): void {
    this.getLectores()
  }

  public getLectores(){
    this._LectorService.getLectores().subscribe((res:ILector[])=>{
      this.lector = res;
    })
  }

  addLector(){
    this._LectorService.agregarLector(this.lectorNuevo).subscribe({
      next:(res:Lector)=>{
        console.log(res);
        this.lectorNuevo = new Lector();
        this.getLectores();
      },
      error:(error : any)=>{
        console.log(error);
      }
    })
  }

  eliminarLector(dnilector:number){
    this._LectorService.eliminarLector(dnilector).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getLectores();
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
          text: "El lector tiene un prestamo de libro - No puede ser eliminado",
        });
        console.log(error);
      }
    })
  }

  getLectorSingle(dnilector:number){
    this._LectorService.getLectorSingle(dnilector).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.lectorNuevo={...res
        }
      },error:(error : any)=>{
        console.log(error);
      }
    })
  }

  updateLector(dnilector: number) {
    this._LectorService.editarLector(this.lectorNuevo, dnilector).subscribe({
      next: (res: any) => {
        this.lectorNuevo = new Lector();
        this.getLectores();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
