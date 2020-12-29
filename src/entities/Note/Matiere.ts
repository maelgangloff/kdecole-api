import Note from './Note'

export default class Matiere {
    public moyenneEleve: number | null
    public bareme: number
    public devoirs: Array<Note> = []
    public enseignants: Array<string>
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
            pjs: Array<any>
            id: number
            titreDevoir: string
            noteMax: string | null
            facultatif: boolean
            moyenne: string | null
            matiere?: string
            comptabilise: boolean
            commentaireDevoir: string
        }>
        enseignants: Array<string>
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
