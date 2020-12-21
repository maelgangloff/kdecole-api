"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListeJourCdt = void 0;
const Seance_js_1 = require("./Seance.js");
class ListeJourCdt {
    constructor(listeJourCdt) {
        this.listeSeances = [];
        listeJourCdt.listeSeances.forEach(seance => this.listeSeances.push(new Seance_js_1.Seance(seance)));
        this.date = new Date(listeJourCdt.date);
    }
}
exports.ListeJourCdt = ListeJourCdt;
