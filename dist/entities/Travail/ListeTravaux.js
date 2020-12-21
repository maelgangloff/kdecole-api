"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListeTravaux = void 0;
const Travail_js_1 = require("./Travail.js");
class ListeTravaux {
    constructor(listTravaux) {
        this.listTravail = [];
        this.date = new Date(listTravaux.date);
        listTravaux.listTravail.forEach(travail => this.listTravail.push(new Travail_js_1.Travail(travail)));
    }
}
exports.ListeTravaux = ListeTravaux;
