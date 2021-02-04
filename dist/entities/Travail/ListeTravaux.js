"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Travail_1 = require("./Travail");
class ListeTravaux {
    constructor(listTravaux) {
        this.listTravail = [];
        this.date = new Date(listTravaux.date);
        listTravaux.listTravail.forEach(travail => this.listTravail.push(new Travail_1.default(travail)));
    }
}
exports.default = ListeTravaux;
