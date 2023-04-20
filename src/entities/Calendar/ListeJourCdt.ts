import Seance from './Seance'

export default class ListeJourCdt {
  public listeSeances: Seance[] = []
  public date: Date

  constructor (listeJourCdt: {
    listeSeances: Array<{
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
    }>
    date: number
  }) {
    listeJourCdt.listeSeances.forEach(seance => this.listeSeances.push(new Seance(seance)))
    this.date = new Date(listeJourCdt.date)
  }
}
