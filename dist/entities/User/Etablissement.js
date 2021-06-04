"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Etablissement {
    permissions;
    uid;
    nom;
    active;
    constructor(etablissement) {
        this.permissions = etablissement.permissions;
        this.uid = etablissement.uid;
        this.nom = etablissement.nom;
        this.active = etablissement.active;
    }
}
exports.default = Etablissement;
