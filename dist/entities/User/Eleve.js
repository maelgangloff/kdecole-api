"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eleve = void 0;
class Eleve {
    constructor(eleve) {
        this.active = eleve.active;
        this.nom = eleve.nom;
        this.uid = eleve.uid;
        this.permissions = eleve.permissions;
    }
}
exports.Eleve = Eleve;
