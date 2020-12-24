export class Note {
    public note: number | null
    public date: Date
    public medianeClasse: number | null
    public noteMin: number | null
    public appreciation: string | null
    public bareme: number
    public coefficient: number
    public id: number
    public titreDevoir: string
    public noteMax: number | null
    public facultatif: boolean
    public moyenne: number | null
    public comptabilise: boolean
    public commentaireDevoir: string | null
    public matiere?: string

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
