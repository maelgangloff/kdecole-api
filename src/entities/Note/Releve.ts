import { Trimestre } from './Trimestre.js'

export class Releve {
    public trimestres: Array<Trimestre> = []

    constructor (releve: Array<{
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
    }>) {
      releve.forEach(trimestre => this.trimestres.push(new Trimestre(trimestre)))
    }

    public getMoyenneGenerale (): number {
      let moyenneGenerale = 0
      this.trimestres.forEach(trimestre => {
        if (trimestre.periodeEnCours) {
          trimestre.matieres.forEach(matiere => {
            moyenneGenerale += ((matiere.moyenneEleve !== null ? matiere.moyenneEleve : 0) / trimestre.matieres.length)
          })
        }
      })
      return parseFloat(moyenneGenerale.toFixed(1))
    }
}
