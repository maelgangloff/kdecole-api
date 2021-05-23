import Attachment from './Attachment';
import Participant from './Participant';
export default class Participation {
    dateEnvoi: Date;
    corpsMessage: string;
    pjs: Attachment[];
    id: number;
    libelleObjet: string | null;
    redacteur: Participant;
    premieresLignes: string;
    typeMessage: string;
    constructor(participation: {
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
    });
}
