import { ListeTravaux } from './ListeTravaux.js'

export class TravailAFaire {
    public tafOuvert: boolean
    public listeTravaux: ListeTravaux[] = []
    private errmsg: string | null

    constructor (travailAFaire: {
        errmsg: string | null
        tafOuvert: boolean
        listeTravaux: {
            date: number
            listTravail: {
                type: string
                temps: number
                matiere: string
                flagRealise: boolean
                titre: string
                date: number
                uid: string
                uidSeance: string
            }[]
        }[]
    }) {
      this.errmsg = travailAFaire.errmsg
      this.tafOuvert = travailAFaire.tafOuvert
      travailAFaire.listeTravaux.forEach(listeTravaux => this.listeTravaux.push(new ListeTravaux(listeTravaux)))
    }
}
