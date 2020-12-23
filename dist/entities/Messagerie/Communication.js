"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Communication = void 0;
const Participant_js_1 = require("./Participant.js");
const Participation_js_1 = require("./Participation.js");
class Communication {
    constructor(communication) {
        this.participants = [];
        this.participations = [];
        communication.participants?.forEach(participant => this.participants.push(new Participant_js_1.Participant(participant)));
        this.expediteurActuel = new Participant_js_1.Participant(communication.expediteurActuel);
        this.signalable = communication.signalable;
        this.expediteurInitial = new Participant_js_1.Participant(communication.expediteurInitial);
        this.id = communication.id;
        this.dateDernierMessage = new Date(communication.dateDernierMessage);
        this.nbParticipations = communication.nbParticipations;
        this.isExpediteurInitial = communication.isExpediteurInitial;
        this.pieceJointe = communication.pieceJointe;
        communication.participations?.forEach(participation => this.participations.push(new Participation_js_1.Participation(participation)));
        this.objet = communication.objet;
        this.type = communication.type;
        this.etat = communication.etat;
        this.premieresLignes = communication.premieresLignes;
        this.etatLecure = communication.etatLecture;
    }
}
exports.Communication = Communication;
