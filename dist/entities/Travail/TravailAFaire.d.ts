import { ListeTravaux } from './ListeTravaux.js';
export declare class TravailAFaire {
    tafOuvert: boolean;
    listeTravaux: ListeTravaux[];
    private errmsg;
    constructor(travailAFaire: {
        errmsg: string | null;
        tafOuvert: boolean;
        listeTravaux: {
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
        }[];
    });
}
