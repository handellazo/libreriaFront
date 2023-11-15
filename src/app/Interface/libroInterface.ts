import { IAutor } from "./autorInterface"
import { ICategoria } from "./categoriaInterface";
import { IEditorial } from "./editorialInterface";

export interface ILibro {
    asin: number;  
    titulo: string;
    lanzamiento: Date;
    id_autor: IAutor;
    id_categoria: ICategoria;
    id_editorial : IEditorial;
    idioma: string;
    paginas: number;
    descripcion: string;
    portada: string;

}