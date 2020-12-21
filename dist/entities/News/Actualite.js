"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actualite = void 0;
const ContenuArticle_1 = require("./ContenuArticle");
const Endpoint_1 = require("../Endpoint");
class Actualite {
    constructor(article) {
        this.errmsg = article.errmsg;
        this.type = article.type;
        this.auteur = article.auteur;
        this.codeEmetteur = parseInt(article.codeEmetteur);
        this.date = new Date(article.date);
        this.uid = article.uid;
    }
    getContenuArticle() {
        return Endpoint_1.Endpoint.kdecole('contenuArticle', `article/${this.uid}`).then(contenuArticle => new ContenuArticle_1.ContenuArticle(contenuArticle));
    }
}
exports.Actualite = Actualite;
