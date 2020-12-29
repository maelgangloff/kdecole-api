import Appel from './Appel';
export default class GestionAppels {
    dateDuJour: Date;
    listeAppels: Appel[];
    constructor(gestionAppels: {
        dateDuJour: number;
        listeAppels: {
            isEnCours: boolean;
            dateDebut: number;
            dateFin: number;
            idAppel: number;
            libelleGroupe: string;
            listeElevesAppel: {
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
            }[];
        }[];
    });
}
