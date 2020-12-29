import Travail from './Travail'

export default class ListeTravaux {
    public date: Date
    public listTravail: Travail[] = []

    constructor (listTravaux: {
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
    }) {
      this.date = new Date(listTravaux.date)
      listTravaux.listTravail.forEach(travail => this.listTravail.push(new Travail(travail)))
    }
}
