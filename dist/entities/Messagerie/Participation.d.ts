export declare class Participation {
    private dateEnvoi;
    private corpsMessage;
    private pjs;
    private id;
    private libelleObjet;
    private redacteur;
    private premieresLignes;
    private typeMessage;
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
