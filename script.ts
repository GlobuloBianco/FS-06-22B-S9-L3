//leggibilità
let sezione = (T: string)=> {
    console.log('');
    console.log(T);
    console.log('');
}

//abstract class
abstract class Attivita {
    nome: string;
    redditoAnnuoLordo: number;
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        this.nome = _nome;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
    }

    abstract getUtileTasse(): any;
    abstract getTasseInps(): any;
    abstract getTasseIrpef(): any;
    abstract getRedditoAnnoNetto(): any;
    abstract getRecap(): any;
}

sezione("||----Professionista----||"); //-------------------////-------------------////-------------------//

class Professionista extends Attivita {
    codRedd: number;
    tasseIrpef: number;
    tasseInps: number;
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo);
        this.codRedd = 78;
        this.tasseIrpef = 5;
        this.tasseInps = 25.72;
    }

    getUtileTasse(): any {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }

    getTasseInps(): any {
        return this.getUtileTasse() * this.tasseInps / 100;
    }

    getTasseIrpef(): any {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    }

    getRedditoAnnoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }

    getRecap() {
        return `Gentile ${this.nome} il tuo stipendio annuo Lordo è di ${this.redditoAnnuoLordo}, togliendo le tasse inps ${this.getTasseInps()} e le tasse irpef ${this.getTasseIrpef()}, il tuo totale netto è di ${this.getRedditoAnnoNetto()}`
    }
}

let newProfessionista = new Professionista('MoltoMarioPocoProfessionista', 40000);
console.log(newProfessionista.getRecap())

sezione("||----Artigiano----||"); //-------------------////-------------------////-------------------//

class Artigiano extends Attivita {
    codRedd: number;
    tasseIrpef: number;
    tasseInps: number;
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo);
        this.codRedd = 67;
        this.tasseIrpef = 15;
        this.tasseInps = 35;
    }

    getUtileTasse(): any {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }

    getTasseInps(): any {
        return this.getUtileTasse() * this.tasseInps / 100;
    }

    getTasseIrpef(): any {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    }

    getRedditoAnnoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }

    getRecap() {
        return `Gentile ${this.nome} il tuo stipendio annuo Lordo è di ${this.redditoAnnuoLordo}, togliendo le tasse inps ${this.getTasseInps()} e le tasse irpef ${this.getTasseIrpef()}, il tuo totale netto è di ${this.getRedditoAnnoNetto()}`
    }
}

let newArtigiano = new Artigiano('ArtigianoDellaQualità', 40000);
console.log(newArtigiano.getRecap())

sezione("||----Commerciante----||"); //-------------------////-------------------////-------------------//

class Commerciante extends Attivita {
    codRedd: number;
    tasseIrpef: number;
    tasseInps: number;
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo);
        this.codRedd = 40;
        this.tasseIrpef = 15;
        this.tasseInps = 35;
    }

    getUtileTasse(): any {
        return this.redditoAnnuoLordo * this.codRedd / 100;
    }

    getTasseInps(): any {
        return this.getUtileTasse() * this.tasseInps / 100;
    }

    getTasseIrpef(): any {
        return this.getUtileTasse() * this.tasseIrpef / 100;
    }

    getRedditoAnnoNetto() {
        return this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef())
    }

    getRecap() {
        return `Gentile ${this.nome} il tuo stipendio annuo Lordo è di ${this.redditoAnnuoLordo}, togliendo le tasse inps ${this.getTasseInps()} e le tasse irpef ${this.getTasseIrpef()}, il tuo totale netto è di ${this.getRedditoAnnoNetto()}`
    }
}

let newCommerciante = new Commerciante('Commerciante007', 40000);
console.log(newCommerciante.getRecap());