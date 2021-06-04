"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attachment_1 = __importDefault(require("./Attachment"));
const Participant_1 = __importDefault(require("./Participant"));
class Participation {
    dateEnvoi;
    corpsMessage;
    pjs = [];
    id;
    libelleObjet;
    redacteur;
    premieresLignes;
    typeMessage;
    constructor(participation) {
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
