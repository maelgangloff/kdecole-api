import Note from './Note';
export default class NotesList {
    moduleNotesActif: boolean;
    codeEleve: string;
    nbNotesMax: number;
    listeNotes: Note[];
    private errmsg;
    constructor(notesList: {
        errmsg: string | null;
        moduleNotesActif: boolean;
        codeEleve: string;
        nbNotesMax: number;
        listeNotes: {
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
        }[];
    });
}
