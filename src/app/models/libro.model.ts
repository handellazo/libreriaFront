export class Libro {
    asin: number;  
    titulo: string;
    lanzamiento: Date;
    id_autor: number;
    id_categoria: number;
    id_editorial : number;
    idioma: string;
    paginas: number;
    descripcion: string;
    portada: string;

    constructor(){
      this.asin = 0;
      this.titulo ='';
      this.lanzamiento= new Date;
      this.id_autor = 0;
      this.id_categoria = 0;
      this.id_editorial = 0;
      this.idioma = '';
      this.paginas = 0;
      this.descripcion = '';
      this.portada = '';
    }
  }