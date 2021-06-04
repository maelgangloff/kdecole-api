"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = __importDefault(require("../Messagerie/Attachment"));
class ContenuActivite {
    codeHTML;
    flagTravailAfaire;
    flagRealise;
    titre;
    date;
    isFaitModifiable;
    type;
    matiere;
    pjs = [];
    errmsg;
    constructor(contenuActivite) {
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
