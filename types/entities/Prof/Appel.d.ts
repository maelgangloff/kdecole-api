import { EleveAppel } from './EleveAppel';
export declare class Appel {
    isEnCours: boolean;
    dateDebut: Date;
    dateFin: Date;
    idAppel: number;
    libelleGroupe: string;
    listeElevesAppel: EleveAppel[];
    constructor(appel: {
        isEnCours: boolean;
        dateDebut: number;
        dateFin: number;
        idAppel: number;
        libelleGroupe: string;
        listeElevesAppel: {
            nomEleve: string;
            prenomEleve: string;
            idEleve: string;
            absenceEleveAppel: {
                idEleve: string | undefined;
                idAbsence: number | undefined;
                type: string;
                dateDebut: number;
                dateFin: number;
                idMotif: string | undefined;
                modifiable: boolean;
            } | undefined;
        }[];
    });
}
