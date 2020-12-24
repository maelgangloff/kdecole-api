import { Participant } from './Participant.js';
import { Participation } from './Participation.js';
export declare class Communication {
    participants: Array<Participant>;
    expediteurActuel: Participant;
    signalable: boolean;
    expediteurInitial: Participant;
    id: number;
    dateDernierMessage: Date;
    nbParticipations: number;
    isExpediteurInitial: boolean;
    pieceJointe: boolean;
    participations: Array<Participation>;
    objet: string;
    type: string;
    etat: string;
    premieresLignes: string;
    etatLecure: boolean;
    constructor(communication: {
        participants: Array<{
            id: string;
            libelle: string;
        }> | null;
        expediteurActuel: {
            id: string;
            libelle: string;
        };
        signalable: boolean;
        expediteurInitial: {
            id: string;
            libelle: string;
        };
        id: number;
        dateDernierMessage: number;
        nbParticipations: number;
        isExpediteurInitial: boolean;
        pieceJointe: boolean;
        participations: Array<{
            dateEnvoi: number;
            corpsMessage: string;
            pjs: {
                idRessource: number | null;
                url: string | null;
                name: string;
                typeMIME: string | null;
            }[];
            id: number;
            libelleObjet: string | null;
            redacteur: {
                id: string;
                libelle: string;
            };
            premieresLignes: string;
            typeMessage: string;
        }> | null;
        objet: string;
        type: string;
        etat: string;
        premieresLignes: string;
        etatLecture: boolean;
    });
}
