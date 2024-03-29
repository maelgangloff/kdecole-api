import Note from './Note'

export default class NotesList {
  public moduleNotesActif: boolean
  public codeEleve: string
  public nbNotesMax: number
  public listeNotes: Note[] = []
  private readonly errmsg: string | null

  constructor (notesList: {
    errmsg: string | null
    moduleNotesActif: boolean
    codeEleve: string
    nbNotesMax: number
    listeNotes: Array<{
      note: string | null
      date: number
      medianeClasse: string | null
      sousMatiere: string | null
      noteMin: string | null
      appreciation: string | null
      bareme: number
      coefficient: number
      pjs: any[]
      id: number
      titreDevoir: string
      noteMax: string | null
      facultatif: boolean
      moyenne: string | null
      matiere?: string
      comptabilise: boolean
      commentaireDevoir: string
    }>
  }) {
    this.errmsg = notesList.errmsg
    this.codeEleve = notesList.codeEleve
    this.moduleNotesActif = notesList.moduleNotesActif
    this.nbNotesMax = notesList.nbNotesMax
    notesList.listeNotes?.forEach(note => this.listeNotes.push(new Note(note)))
  }
}
