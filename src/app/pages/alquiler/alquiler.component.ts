import { Component } from '@angular/core';
import { IAlquiler } from 'src/app/Interface/alquilerInterface';
import { ILector } from 'src/app/Interface/lectorInterface';
import { ILibro } from 'src/app/Interface/libroInterface';
import { Alquiler } from 'src/app/models/alquiler.model';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { LectorService } from 'src/app/services/lector.service';
import { LibroService } from 'src/app/services/libro.service';
import { DatePipe } from '@angular/common'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alquiler',
  templateUrl: './alquiler.component.html',
  styleUrls: ['./alquiler.component.css']
})
export class AlquilerComponent {
  alquiler: IAlquiler[] = [];
  lector: ILector[] = [];
  libro: ILibro[] = [];

  datePipe: DatePipe = new DatePipe('en-US');

  alquilerNuevo : Alquiler = new Alquiler();
  
  constructor(private _LibroService: LibroService, 
              private _AlquilerService:AlquilerService, 
              private _LectorService:LectorService){}
              
  ngOnInit(): void {
    this.getLibros()
    this.getAlquileres()
    this.getLectores()
  }

  formatearFecha(fecha: string | Date): string {
    if (typeof fecha === 'string') {
      return this.datePipe.transform(fecha, 'dd-MM-yyyy') || '';
    } else if (fecha instanceof Date) {
      return this.datePipe.transform(fecha.toString(), 'dd-MM-yyyy') || '';
    }
    return '';
  }

  public getLibros(){
    this._LibroService.getLibros().subscribe((res:ILibro[])=>{
      this.libro = res;
    })
  }

  public getAlquileres(){
    this._AlquilerService.getAlquileres().subscribe((res:IAlquiler[])=>{
      this.alquiler = res;
    })
  }

  public getLectores(){
    this._LectorService.getLectores().subscribe((res:ILector[])=>{
      this.lector = res;
    })
  }

  //Listar Libros en pestaña
  getIdLibro(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdLibro = parseInt(partes[1].trim(), 10);
      this.alquilerNuevo.id_asin = selecIdLibro;
      console.log("Este es el ID: " + selecIdLibro);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }
  
  //Listar Lector en pestaña
  getIdLector(event: any) {
    // Obtener el valor seleccionado del evento y dividirlo en partes usando ":"
    const partes = event.target.value.split(':');
  
    // Comprobar si hay al menos dos partes
    if (partes.length >= 2) {
      // Convertir la segunda parte a un número entero y asignarla a libroNuevo.id_autor
      const selecIdLector = parseInt(partes[1].trim(), 10);
      this.alquilerNuevo.dni_lector = selecIdLector;
      console.log("Este es el ID: " + selecIdLector);
    } else {
      console.log("Formato de ID de autor no válido");
    }
  }

  addAlquiler(){
    this._AlquilerService.agregarAlquiler(this.alquilerNuevo).subscribe({
      next: (res:Alquiler)=>{
        console.log(res);
        this.alquilerNuevo = new Alquiler();
        this.getAlquileres();
      }
    })
  }

  editarAlquiler(idalquiler:number){
    
  }

  eliminarAlquiler(idalquiler:number){
    this._AlquilerService.eliminarAlquiler(idalquiler).subscribe({
      next: (res:any)=>{
        console.log(res);
        this.getAlquileres();
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

  getAlquilerSingle(idalquiler:number){
    this._AlquilerService.getAlquilerSingle(idalquiler).subscribe({
      next: (res:any)=>{
        console.log(res)
        this.alquilerNuevo={...res
        }
      },error:(error : any)=>{
        console.log(error);
      }
    })
  }

  updateAlquiler(idalquiler: number) {
    this._AlquilerService.editarAlquiler(this.alquilerNuevo, idalquiler).subscribe({
      next: (res: any) => {
        this.alquilerNuevo = new Alquiler();
        this.getAlquileres();
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
