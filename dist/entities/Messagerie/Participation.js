"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participation = void 0;
const Attachment_js_1 = require("./Attachment.js");
const Participant_js_1 = require("./Participant.js");
class Participation {
    constructor(participation) {
        this.pjs = [];
        this.dateEnvoi = new Date(participation.dateEnvoi);
        this.corpsMessage = participation.corpsMessage;
        participation.pjs.forEach(pj => this.pjs.push(new Attachment_js_1.Attachment(pj)));
        this.id = participation.id;
        this.libelleObjet = participation.libelleObjet;
        this.redacteur = new Participant_js_1.Participant(participation.redacteur);
        this.premieresLignes = participation.premieresLignes;
        this.typeMessage = participation.typeMessage;
    }
}
exports.Participation = Participation;
