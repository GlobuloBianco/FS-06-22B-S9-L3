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
    codRedd: number;
    tasseIrpef: number;
    tasseInps: number;
    constructor(_nome: string, _redditoAnnuoLordo: number, _codRedd: number, _tasseIrpef: number, _tasseInps: number) {
        this.nome = _nome;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.codRedd = _codRedd;
        this.tasseIrpef = _tasseIrpef;
        this.tasseInps = _tasseInps;
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

sezione("||----Professionista----||"); //-------------------////-------------------////-------------------//

class Professionista extends Attivita {
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo, 78, 5, 25.72);
    }
}

let newProfessionista = new Professionista('MoltoMarioPocoProfessionista', 40000);
console.log(newProfessionista.getRecap())

sezione("||----Artigiano----||"); //-------------------////-------------------////-------------------//

class Artigiano extends Attivita {
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo, 67, 15, 35);
    }
}

let newArtigiano = new Artigiano('ArtigianoDellaQualità', 40000);
console.log(newArtigiano.getRecap())

sezione("||----Commerciante----||"); //-------------------////-------------------////-------------------//

class Commerciante extends Attivita {
    constructor(_nome: string, _redditoAnnuoLordo: number) {
        super(_nome, _redditoAnnuoLordo, 40, 15, 35);
    }
}

let newCommerciante = new Commerciante('Commerciante007', 40000);
console.log(newCommerciante.getRecap());