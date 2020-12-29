export declare class AbsenceEleveAppel {
    idAbsence: number | undefined;
    type: string;
    dateDebut: Date;
    dateFin: Date;
    idMotif: string | undefined;
    modifiable: boolean;
    idEleve: string | undefined;
    constructor(absenceEleveAppel: {
        idEleve: string | undefined;
        idAbsence: number | undefined;
        type: string;
        dateDebut: number;
        dateFin: number;
        idMotif: string | undefined;
        modifiable: boolean;
    });
}
