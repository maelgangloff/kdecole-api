import Travail from './Travail';
export default class ListeTravaux {
    date: Date;
    listTravail: Travail[];
    constructor(listTravaux: {
        date: number;
        listTravail: {
            type: string;
            temps: number;
            matiere: string;
            flagRealise: boolean;
            titre: string;
            date: number;
            uid: string;
            uidSeance: string;
        }[];
    });
}
