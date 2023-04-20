import Matiere from './Matiere'

export default class Trimestre {
  public matieres: Matiere[] = []
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

  /**
   * Retourne la moyenne générale de l'élève
   * @return {number}
   */
  public getMoyenneGenerale (): number|null {
    const moyennes = this.getTableauMoyennes()
    if (moyennes.length === 0) return null
    let moyenneGenerale = 0
    for (const moyenne of moyennes) {
      moyenneGenerale += moyenne / moyennes.length
    }
    return moyenneGenerale
  }

  /**
   * Retourne la médiane des moyennes des matières de l'élève
   * @return {number}
   */
  public getMedianeGenerale (): number|null {
    let moyennes = this.getTableauMoyennes()
    if (moyennes.length === 0) return null
    moyennes = moyennes.slice(0).sort(function (x, y) {
      return x - y
    })
    const b = (moyennes.length + 1) / 2
    return (moyennes.length % 2) !== 0 ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2
  }

  /**
   * Retourne un tableau contenant les moyennes des matières de l'élève
   * @return {number[]}
   */
  private getTableauMoyennes (): number[] {
    const moyennes: number[] = []
    for (const matiere of this.matieres) {
      if (typeof matiere.moyenneEleve === 'number') {
        moyennes.push(matiere.moyenneEleve)
      }
    }
    return moyennes
  }
}
