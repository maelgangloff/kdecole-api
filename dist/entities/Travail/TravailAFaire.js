"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TravailAFaire = void 0;
const ListeTravaux_js_1 = require("./ListeTravaux.js");
class TravailAFaire {
    constructor(travailAFaire) {
        this.listeTravaux = [];
        this.errmsg = travailAFaire.errmsg;
        this.tafOuvert = travailAFaire.tafOuvert;
        travailAFaire.listeTravaux.forEach(listeTravaux => this.listeTravaux.push(new ListeTravaux_js_1.ListeTravaux(listeTravaux)));
    }
}
exports.TravailAFaire = TravailAFaire;
