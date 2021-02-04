"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Appel_1 = require("./Appel");
class GestionAppels {
    constructor(gestionAppels) {
        this.listeAppels = [];
        this.dateDuJour = new Date(gestionAppels.dateDuJour);
        gestionAppels.listeAppels.forEach(appel => this.listeAppels.push(new Appel_1.default(appel)));
    }
}
exports.default = GestionAppels;
