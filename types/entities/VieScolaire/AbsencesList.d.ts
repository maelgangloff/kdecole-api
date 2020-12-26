import { Absence } from './Absence';
export declare class AbsencesList {
    codeEleve: string;
    nbAbsencesMax: number;
    listeAbsences: Absence[];
    private errmsg;
    constructor(absenceList: {
        errmsg: string | null;
        codeEleve: string;
        nbAbsencesMax: number;
        listeAbsences: {
            dateFin: number;
            motif: string | null;
            type: string;
            matiere: string;
            dateDebut: number;
            justifiee: boolean;
        }[];
    });
}
