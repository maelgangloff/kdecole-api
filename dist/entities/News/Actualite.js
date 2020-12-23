"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actualite = void 0;
class Actualite {
    constructor(article) {
        this.errmsg = article.errmsg;
        this.type = article.type;
        this.auteur = article.auteur;
        this.codeEmetteur = parseInt(article.codeEmetteur);
        this.date = new Date(article.date);
        this.uid = article.uid;
    }
}
exports.Actualite = Actualite;
