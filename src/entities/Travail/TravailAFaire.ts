import ListeTravaux from './ListeTravaux'

export default class TravailAFaire {
  public tafOuvert: boolean
  public listeTravaux: ListeTravaux[] = []
  private readonly errmsg: string | null

  constructor (travailAFaire: {
    errmsg: string | null
    tafOuvert: boolean
    listeTravaux: Array<{
      date: number
      listTravail: Array<{
        type: string
        temps: number
        matiere: string
        flagRealise: boolean
        titre: string
        date: number
        uid: string
        uidSeance: string
      }>
    }>
  }) {
    this.errmsg = travailAFaire.errmsg
    this.tafOuvert = travailAFaire.tafOuvert
    travailAFaire.listeTravaux.forEach(listeTravaux => this.listeTravaux.push(new ListeTravaux(listeTravaux)))
  }
}
