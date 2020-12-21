export class Note {
    private note: number | null
    private date: Date
    private medianeClasse: number | null
    private noteMin: number | null
    private appreciation: string | null
    private bareme: number
    private coefficient: number
    private id: number
    private titreDevoir: string
    private noteMax: number | null
    private facultatif: boolean
    private moyenne: number | null
    private comptabilise: boolean
    private commentaireDevoir: string | null
    private matiere?: string

    constructor (note: {
        note: string | null
        date: number
        medianeClasse: string | null
        sousMatiere: string | null
        noteMin: string | null
        appreciation: string | null
        bareme: number
        coefficient: number
        pjs: Array<any>
        id: number
        titreDevoir: string
        noteMax: string | null
        facultatif: boolean
        moyenne: string | null
        matiere?: string
        comptabilise: boolean
        commentaireDevoir: string
    }) {
      this.note = Note.stringNoteToNumber(note.note)
      this.date = new Date(note.date)
      this.medianeClasse = Note.stringNoteToNumber(note.medianeClasse)
      this.noteMin = Note.stringNoteToNumber(note.noteMin)
      this.appreciation = note.appreciation
      this.bareme = note.bareme
      this.coefficient = note.coefficient
      this.id = note.id
      this.titreDevoir = note.titreDevoir
      this.noteMax = Note.stringNoteToNumber(note.noteMax)
      this.facultatif = note.facultatif
      this.moyenne = Note.stringNoteToNumber(note.moyenne)
      this.comptabilise = note.comptabilise
      this.commentaireDevoir = note.commentaireDevoir
      this.matiere = note.matiere
    }

    public static stringNoteToNumber (note: string | null): number | null {
      return note !== null ? parseFloat(note.replace(',', '.')) : null
    }
}
