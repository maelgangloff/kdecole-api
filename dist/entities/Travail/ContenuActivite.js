"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContenuActivite = void 0;
const Attachment_js_1 = require("../Messagerie/Attachment.js");
class ContenuActivite {
    constructor(contenuActivite) {
        this.pjs = [];
        this.errmsg = contenuActivite.errmsg;
        this.codeHTML = contenuActivite.codeHTML;
        this.flagrealise = contenuActivite.flagRealise;
        this.flagTravailAfaire = contenuActivite.flagTravailAFaire;
        this.titre = contenuActivite.titre;
        this.date = new Date(contenuActivite.date);
        this.isFaitModifiable = contenuActivite.isFaitModifiable;
        this.type = contenuActivite.type;
        this.matiere = contenuActivite.matiere;
        contenuActivite.pjs.forEach(pj => this.pjs.push(new Attachment_js_1.Attachment(pj)));
    }
}
exports.ContenuActivite = ContenuActivite;
