export declare class Communication {
    private participants;
    private expediteurActuel;
    private signalable;
    private expediteurInitial;
    private id;
    private dateDernierMessage;
    private nbParticipations;
    private isExpediteurInitial;
    private pieceJointe;
    private participations;
    private objet;
    private type;
    private etat;
    private premieresLignes;
    private etatLecure;
    constructor(communication: {
        participants: Array<{
            id: string;
            libelle: string;
        }> | null;
        expediteurActuel: {
            id: string;
            libelle: string;
        };
        signalable: boolean;
        expediteurInitial: {
            id: string;
            libelle: string;
        };
        id: number;
        dateDernierMessage: number;
        nbParticipations: number;
        isExpediteurInitial: boolean;
        pieceJointe: boolean;
        participations: Array<{
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
        }> | null;
        objet: string;
        type: string;
        etat: string;
        premieresLignes: string;
        etatLecture: boolean;
    });
    getCommunication(): Promise<Communication>;
    signalerCommunication(): Promise<void>;
    supprimerCommunication(): Promise<void>;
}
