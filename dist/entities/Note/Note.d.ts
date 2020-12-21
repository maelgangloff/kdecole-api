export declare class Note {
    private note;
    private date;
    private medianeClasse;
    private noteMin;
    private appreciation;
    private bareme;
    private coefficient;
    private id;
    private titreDevoir;
    private noteMax;
    private facultatif;
    private moyenne;
    private comptabilise;
    private commentaireDevoir;
    private matiere?;
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
