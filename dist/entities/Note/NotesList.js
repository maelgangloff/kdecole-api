"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = __importDefault(require("./Note"));
class NotesList {
    constructor(notesList) {
        this.listeNotes = [];
        this.errmsg = notesList.errmsg;
        this.codeEleve = notesList.codeEleve;
        this.moduleNotesActif = notesList.moduleNotesActif;
        this.nbNotesMax = notesList.nbNotesMax;
        notesList.listeNotes.forEach(note => this.listeNotes.push(new Note_1.default(note)));
    }
}
exports.default = NotesList;
