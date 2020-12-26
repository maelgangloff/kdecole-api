export declare class Travail {
    type: string;
    temps: number;
    matiere: string;
    flagRealise: boolean;
    titre: string;
    date: Date;
    uid: number;
    uidSeance: number;
    constructor(travailAFaire: {
        type: string;
        temps: number;
        matiere: string;
        flagRealise: boolean;
        titre: string;
        date: number;
        uid: string;
        uidSeance: string;
    });
}
