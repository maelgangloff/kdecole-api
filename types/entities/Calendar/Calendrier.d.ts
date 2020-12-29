import ListeJourCdt from './ListeJourCdt';
export default class Calendrier {
    currentDate: Date;
    listeJourCdt: ListeJourCdt[];
    cdtOuvert: boolean;
    private errmsg;
    constructor(calendrier: {
        errmsg: string | null;
        currentDate: number;
        listeJourCdt: {
            listeSeances: {
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
            }[];
            date: number;
        }[];
        cdtOuvert: boolean;
    });
}
