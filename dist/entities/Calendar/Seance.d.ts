export declare class Seance {
    private hdeb;
    private enSeance;
    private matiere;
    private aFaire;
    private heureFin;
    private flagModif;
    private flagActif;
    private heureDebut;
    private hfin;
    private aRendre;
    private motifModif;
    private idSeance;
    private salle;
    private titre;
    constructor(seance: {
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
    });
}
