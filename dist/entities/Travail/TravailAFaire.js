"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListeTravaux_1 = require("./ListeTravaux");
class TravailAFaire {
    constructor(travailAFaire) {
        this.listeTravaux = [];
        this.errmsg = travailAFaire.errmsg;
        this.tafOuvert = travailAFaire.tafOuvert;
        travailAFaire.listeTravaux.forEach(listeTravaux => this.listeTravaux.push(new ListeTravaux_1.default(listeTravaux)));
    }
}
exports.default = TravailAFaire;
