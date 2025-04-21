export class cuentaBancaria {
    nombre: string;
    saldo: number; 
    activo: boolean;

    constructor(nombre: string, saldo: number, activo: boolean){
        this.nombre = nombre;
        this.saldo = saldo;
        this.activo = activo;
    }
}