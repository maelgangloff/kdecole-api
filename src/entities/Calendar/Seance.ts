import Exercice from './Exercice'

export default class Seance {
  public hdeb: Date
  public enSeance: Exercice[] | null = []
  public matiere: string
  public aFaire: Exercice[] | null = []
  public heureFin: string
  public flagModif: boolean
  public flagActif: boolean
  public heureDebut: string
  public hfin: Date
  public aRendre: Exercice[] | null = []
  public motifModif: string | null
  public idSeance: number
  public salle: string
  public titre: string

  constructor (seance: {
    hdeb: number
    enSeance: Array<{
      type: string
      uid: number
      date: number
      titre: string
    }> | null
    matiere: string
    aFaire: Array<{
      type: string
      uid: number
      date: number
      titre: string
    }> | null
    heureFin: string
    flagModif: boolean
    titre: string
    flagActif: boolean
    heureDebut: string
    hfin: number
    aRendre: Array<{
      type: string
      uid: number
      date: number
      titre: string
    }> | null
    motifModif: string | null
    idSeance: number
    salle: string
  }) {
    this.hdeb = new Date(seance.hdeb)
    seance.enSeance?.forEach(enSeance => this.enSeance?.push(new Exercice(enSeance)))
    this.matiere = seance.matiere
    seance.aFaire?.forEach(aFaire => this.aFaire?.push(new Exercice(aFaire)))
    this.heureFin = seance.heureFin
    this.flagModif = seance.flagModif
    this.titre = seance.titre
    this.flagActif = seance.flagActif
    this.heureDebut = seance.heureDebut
    this.hfin = new Date(seance.hfin)
    seance.aRendre?.forEach(aRendre => this.aRendre?.push(new Exercice(aRendre)))
    this.motifModif = seance.motifModif
    this.idSeance = seance.idSeance
    this.salle = seance.salle
  }
}
