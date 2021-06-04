"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Participant {
    id;
    libelle;
    constructor(participant) {
        this.id = participant.id;
        this.libelle = participant.libelle;
    }
}
exports.default = Participant;
