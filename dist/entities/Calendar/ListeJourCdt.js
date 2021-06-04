"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seance_1 = __importDefault(require("./Seance"));
class ListeJourCdt {
    listeSeances = [];
    date;
    constructor(listeJourCdt) {
        listeJourCdt.listeSeances.forEach(seance => this.listeSeances.push(new Seance_1.default(seance)));
        this.date = new Date(listeJourCdt.date);
    }
}
exports.default = ListeJourCdt;
