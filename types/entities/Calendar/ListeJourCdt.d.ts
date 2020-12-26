import { Seance } from './Seance.js';
export declare class ListeJourCdt {
    listeSeances: Seance[];
    date: Date;
    constructor(listeJourCdt: {
        listeSeances: {
            hdeb: number;
            enSeance: {
                type: string;
                uid: number;
                date: number;
                titre: string;
            }[] | null;
            matiere: string;
            aFaire: {
                type: string;
                uid: number;
                date: number;
                titre: string;
            }[] | null;
            heureFin: string;
            flagModif: boolean;
            titre: string;
            flagActif: boolean;
            heureDebut: string;
            hfin: number;
            aRendre: {
                type: string;
                uid: number;
                date: number;
                titre: string;
            }[] | null;
            motifModif: string | null;
            idSeance: number;
            salle: string;
        }[];
        date: number;
    });
}
