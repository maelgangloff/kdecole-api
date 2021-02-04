"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = require("../Messagerie/Attachment");
class ContenuActivite {
    constructor(contenuActivite) {
        this.pjs = [];
        this.errmsg = contenuActivite.errmsg;
        this.codeHTML = contenuActivite.codeHTML;
        this.flagRealise = contenuActivite.flagRealise;
        this.flagTravailAfaire = contenuActivite.flagTravailAFaire;
        this.titre = contenuActivite.titre;
        this.date = new Date(contenuActivite.date);
        this.isFaitModifiable = contenuActivite.isFaitModifiable;
        this.type = contenuActivite.type;
        this.matiere = contenuActivite.matiere;
        contenuActivite.pjs.forEach(pj => this.pjs.push(new Attachment_1.default(pj)));
    }
}
exports.default = ContenuActivite;
