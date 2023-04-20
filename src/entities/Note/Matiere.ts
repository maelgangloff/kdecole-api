import Note from './Note'

export default class Matiere {
  public moyenneEleve: number | null
  public bareme: number
  public devoirs: Note[] = []
  public enseignants: string[]
  public matiereLibelle: string
  public moyenneClasse: number | null

  constructor (matiere: {
    bareme: string
    moyenneEleve: string
    devoirs: Array<{
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
    enseignants: string[]
    matiereLibelle: string
    moyenneClasse: string
  }) {
    this.bareme = parseInt(matiere.bareme)
    this.moyenneEleve = Note.stringNoteToNumber(matiere.moyenneEleve)
    matiere.devoirs.forEach((devoir) => this.devoirs.push(new Note(devoir)))
    this.enseignants = matiere.enseignants
    this.matiereLibelle = matiere.matiereLibelle
    this.moyenneClasse = Note.stringNoteToNumber(matiere.moyenneClasse)
  }
}
