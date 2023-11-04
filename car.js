export class Car {
    constructor(marke, baujahr, ps) {
        this.marke = marke;
        this.baujahr = baujahr;
        this.ps = ps;
    }

    drive() {
        console.log("Fährt: " + this.marke + " " + this.baujahr + " " + this.ps + " PS");
    }

    honk() {
        console.log("Hupt: " + this.marke);
    }
}
