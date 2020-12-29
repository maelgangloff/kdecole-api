export default class Note {
    note: number | null;
    date: Date;
    medianeClasse: number | null;
    noteMin: number | null;
    appreciation: string | null;
    bareme: number;
    coefficient: number;
    id: number;
    titreDevoir: string;
    noteMax: number | null;
    facultatif: boolean;
    moyenne: number | null;
    comptabilise: boolean;
    commentaireDevoir: string | null;
    matiere?: string;
    constructor(note: {
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
    });
    static stringNoteToNumber(note: string | null): number | null;
}
