"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Actualite {
    constructor(article) {
        this.errmsg = article.errmsg;
        this.type = article.type;
        this.auteur = article.auteur;
        this.codeEmetteur = parseInt(article.codeEmetteur);
        this.titre = article.titre;
        this.date = new Date(article.date);
        this.uid = article.uid;
    }
}
exports.default = Actualite;
