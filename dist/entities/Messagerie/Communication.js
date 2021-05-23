"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Participant_1 = __importDefault(require("./Participant"));
const Participation_1 = __importDefault(require("./Participation"));
class Communication {
    constructor(communication) {
        this.participants = [];
        this.participations = [];
        communication.participants?.forEach(participant => this.participants.push(new Participant_1.default(participant)));
        this.expediteurActuel = new Participant_1.default(communication.expediteurActuel);
        this.signalable = communication.signalable;
        this.expediteurInitial = new Participant_1.default(communication.expediteurInitial);
        this.id = communication.id;
        this.dateDernierMessage = new Date(communication.dateDernierMessage);
        this.nbParticipations = communication.nbParticipations;
        this.isExpediteurInitial = communication.isExpediteurInitial;
        this.pieceJointe = communication.pieceJointe;
        communication.participations?.forEach(participation => this.participations.push(new Participation_1.default(participation)));
        this.objet = communication.objet;
        this.type = communication.type;
        this.etat = communication.etat;
        this.premieresLignes = communication.premieresLignes;
        this.etatLecure = communication.etatLecture;
    }
}
exports.default = Communication;
