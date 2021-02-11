"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListeJourCdt_1 = __importDefault(require("./ListeJourCdt"));
class Calendrier {
    constructor(calendrier) {
        this.listeJourCdt = [];
        this.errmsg = calendrier.errmsg;
        this.currentDate = new Date(calendrier.currentDate);
        this.cdtOuvert = calendrier.cdtOuvert;
        calendrier.listeJourCdt.forEach(listeJourCdt => this.listeJourCdt.push(new ListeJourCdt_1.default(listeJourCdt)));
    }
}
exports.default = Calendrier;
