"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Seance_1 = require("./Seance");
class ListeJourCdt {
    constructor(listeJourCdt) {
        this.listeSeances = [];
        listeJourCdt.listeSeances.forEach(seance => this.listeSeances.push(new Seance_1.default(seance)));
        this.date = new Date(listeJourCdt.date);
    }
}
exports.default = ListeJourCdt;
