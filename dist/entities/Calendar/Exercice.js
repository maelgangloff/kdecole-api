"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exercice {
    type;
    uid;
    date;
    titre;
    constructor(enSeance) {
        this.type = enSeance.type;
        this.uid = enSeance.uid;
        this.date = new Date(enSeance.date);
        this.titre = enSeance.titre;
    }
}
exports.default = Exercice;
