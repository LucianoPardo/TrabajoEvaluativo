import Arma from "./arma";

class Soldados extends Arma {
    private _nombre: string;
    private _apellido: string;

    constructor(nombre: string, apellido: string, nombreArma: string){
        super(nombreArma)
        this._nombre = nombre
        this._apellido = apellido
        
    }
    atacar(){
        if (this.nombreArma == "Espada a dos manos") return `Me llamo ${this._nombre} ${this._apellido} y ataco con una espada a dos manos`
        if (this.nombreArma == "Martillo") return `Me llamo ${this._nombre} ${this._apellido} y ataco con Martillo`
        if (this.nombreArma == "Arco") return `Me llamo ${this._nombre} ${this._apellido} y ataco con ataco con el arco`
        if (this.nombreArma == "Espada y escudo") return `Me llamo ${this._nombre} ${this._apellido} y ataco con espada y escudo`
        if (this.nombreArma == "Arma de asta") return `Me llamo ${this._nombre} ${this._apellido} y ataco con arma de asta`
        if (this.nombreArma == "Arma de fuego") return `Me llamo ${this._nombre} ${this._apellido} y ataco con arma de fuego`
        if (this.nombreArma == "Dagas") return `Me llamo ${this._nombre} ${this._apellido} y ataco con dagas `
    }
    

}

export default Soldados