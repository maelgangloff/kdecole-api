"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Eleve {
    active;
    nom;
    uid;
    permissions;
    constructor(eleve) {
        this.active = eleve.active;
        this.nom = eleve.nom;
        this.uid = eleve.uid;
        this.permissions = eleve.permissions;
    }
}
exports.default = Eleve;
