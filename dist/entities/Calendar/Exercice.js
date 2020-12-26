"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercice = void 0;
class Exercice {
    constructor(enSeance) {
        this.type = enSeance.type;
        this.uid = enSeance.uid;
        this.date = new Date(enSeance.date);
        this.titre = enSeance.titre;
    }
}
exports.Exercice = Exercice;
