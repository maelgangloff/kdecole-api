import Matiere from './Matiere';
export default class Trimestre {
    matieres: Array<Matiere>;
    idPeriode: number;
    libelleClasse: string;
    periodeLibelle: string;
    periodeEnCours: boolean;
    bareme: number;
    constructor(trimestre: {
        matieres: Array<{
            bareme: string;
            moyenneEleve: string;
            devoirs: Array<{
                note: string | null;
                date: number;
                medianeClasse: string | null;
                sousMatiere: string | null;
                noteMin: string | null;
                appreciation: string | null;
                bareme: number;
                coefficient: number;
                pjs: Array<any>;
                id: number;
                titreDevoir: string;
                noteMax: string | null;
                facultatif: boolean;
                moyenne: string | null;
                matiere?: string;
                comptabilise: boolean;
                commentaireDevoir: string;
            }>;
            enseignants: Array<string>;
            matiereLibelle: string;
            moyenneClasse: string;
        }>;
        idPeriode: number;
        libelleClasse: string;
        periodeLibelle: string;
        periodeEnCours: boolean;
        bareme: string;
    });
    /**
     * Retourne la moyenne générale de l'élève
     * @return {number}
     */
    getMoyenneGenerale(): number | false;
    /**
     * Retourne la médiane des moyennes des matières de l'élève
     * @return {number}
     */
    getMedianeGenerale(): number | false;
    /**
     * Retourne un tableau contenant les moyennes des matières de l'élève
     * @return {number[]}
     */
    private getTableauMoyennes;
}
