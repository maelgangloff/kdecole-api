"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seance_1 = __importDefault(require("./Seance"));
class ListeJourCdt {
    constructor(listeJourCdt) {
        this.listeSeances = [];
        listeJourCdt.listeSeances.forEach(seance => this.listeSeances.push(new Seance_1.default(seance)));
        this.date = new Date(listeJourCdt.date);
    }
}
exports.default = ListeJourCdt;
