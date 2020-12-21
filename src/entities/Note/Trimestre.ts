import { Matiere } from './Matiere.js'

export class Trimestre {
    public matieres: Array<Matiere> = []
    public idPeriode: number
    public libelleClasse: string
    public periodeLibelle: string
    public periodeEnCours: boolean
    public bareme: number

    constructor (trimestre: {
        matieres: Array<{
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
        }>
        idPeriode: number
        libelleClasse: string
        periodeLibelle: string
        periodeEnCours: boolean
        bareme: string
    }) {
      trimestre.matieres.forEach(matiere => this.matieres.push(new Matiere(matiere)))
      this.idPeriode = trimestre.idPeriode
      this.libelleClasse = trimestre.libelleClasse
      this.periodeLibelle = trimestre.periodeLibelle
      this.periodeEnCours = trimestre.periodeEnCours
      this.bareme = parseInt(trimestre.bareme)
    }
}
