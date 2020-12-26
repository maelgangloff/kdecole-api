"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(note) {
        this.note = Note.stringNoteToNumber(note.note);
        this.date = new Date(note.date);
        this.medianeClasse = Note.stringNoteToNumber(note.medianeClasse);
        this.noteMin = Note.stringNoteToNumber(note.noteMin);
        this.appreciation = note.appreciation;
        this.bareme = note.bareme;
        this.coefficient = note.coefficient;
        this.id = note.id;
        this.titreDevoir = note.titreDevoir;
        this.noteMax = Note.stringNoteToNumber(note.noteMax);
        this.facultatif = note.facultatif;
        this.moyenne = Note.stringNoteToNumber(note.moyenne);
        this.comptabilise = note.comptabilise;
        this.commentaireDevoir = note.commentaireDevoir;
        this.matiere = note.matiere;
    }
    static stringNoteToNumber(note) {
        return note !== null ? parseFloat(note.replace(',', '.')) : null;
    }
}
exports.Note = Note;
