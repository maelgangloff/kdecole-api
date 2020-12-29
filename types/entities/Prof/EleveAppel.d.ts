import { AbsenceEleveAppel } from './AbsenceEleveAppel';
export declare class EleveAppel {
    nomEleve: string;
    prenomEleve: string;
    idEleve: string;
    absenceEleveAppel: AbsenceEleveAppel | undefined;
    constructor(eleveAppel: {
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
    });
}
