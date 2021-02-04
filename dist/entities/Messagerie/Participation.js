"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = require("./Attachment");
const Participant_1 = require("./Participant");
class Participation {
    constructor(participation) {
        this.pjs = [];
        this.dateEnvoi = new Date(participation.dateEnvoi);
        this.corpsMessage = participation.corpsMessage;
        participation.pjs.forEach(pj => this.pjs.push(new Attachment_1.default(pj)));
        this.id = participation.id;
        this.libelleObjet = participation.libelleObjet;
        this.redacteur = new Participant_1.default(participation.redacteur);
        this.premieresLignes = participation.premieresLignes;
        this.typeMessage = participation.typeMessage;
    }
}
exports.default = Participation;
