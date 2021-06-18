abstract class Arma{
    protected nombreArma: string

    constructor(nombreArma: string){
        this.nombreArma = nombreArma;
    }

    abstract atacar(): any;
}

export default Arma