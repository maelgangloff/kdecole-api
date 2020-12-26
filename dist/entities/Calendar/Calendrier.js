"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendrier = void 0;
const ListeJourCdt_js_1 = require("./ListeJourCdt.js");
class Calendrier {
    constructor(calendrier) {
        this.listeJourCdt = [];
        this.errmsg = calendrier.errmsg;
        this.currentDate = new Date(calendrier.currentDate);
        this.cdtOuvert = calendrier.cdtOuvert;
        calendrier.listeJourCdt.forEach(listeJourCdt => this.listeJourCdt.push(new ListeJourCdt_js_1.ListeJourCdt(listeJourCdt)));
    }
}
exports.Calendrier = Calendrier;
