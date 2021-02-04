export default class Absence {
    dateFin: Date;
    motif: string | null;
    type: string;
    matiere: string | null;
    dateDebut: Date;
    justifiee: boolean;
    constructor(absence: {
        dateFin: number;
        motif: string | null;
        type: string;
        matiere: string;
        dateDebut: number;
        justifiee: boolean;
    });
}
