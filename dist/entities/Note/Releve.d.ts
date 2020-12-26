import { Trimestre } from './Trimestre.js';
export declare class Releve {
    trimestres: Array<Trimestre>;
    constructor(releve: Array<{
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
    }>);
}
