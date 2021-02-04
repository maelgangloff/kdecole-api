import Note from './Note';
export default class Matiere {
    moyenneEleve: number | null;
    bareme: number;
    devoirs: Array<Note>;
    enseignants: Array<string>;
    matiereLibelle: string;
    moyenneClasse: number | null;
    constructor(matiere: {
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
    });
}
