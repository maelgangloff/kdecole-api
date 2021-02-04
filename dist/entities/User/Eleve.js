"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eleve {
    constructor(eleve) {
        this.active = eleve.active;
        this.nom = eleve.nom;
        this.uid = eleve.uid;
        this.permissions = eleve.permissions;
    }
}
exports.default = Eleve;
