export class Alquiler {
    idalquiler:any;
    alquiler:string;
    dni_lector: number;
    id_asin: number;
    salida:Date;
    entrada:Date;

    constructor(){
        this.alquiler = '';
        this.dni_lector = 0;
        this.id_asin = 0;
        this.salida = new Date;
        this.entrada = new Date;
    }
}