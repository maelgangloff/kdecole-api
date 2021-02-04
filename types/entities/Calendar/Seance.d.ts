import Exercice from './Exercice';
export default class Seance {
    hdeb: Date;
    enSeance: Array<Exercice> | null;
    matiere: string;
    aFaire: Array<Exercice> | null;
    heureFin: string;
    flagModif: boolean;
    flagActif: boolean;
    heureDebut: string;
    hfin: Date;
    aRendre: Array<Exercice> | null;
    motifModif: string | null;
    idSeance: number;
    salle: string;
    titre: string;
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
