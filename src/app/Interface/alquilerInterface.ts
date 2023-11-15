import { ILector } from "./lectorInterface";
import { ILibro } from "./libroInterface";

export interface IAlquiler{
    idalquiler:number;
    alquiler:string;
    dni_lector: ILector;
    id_asin: ILibro;
    salida:Date;
    entrada:Date;
}