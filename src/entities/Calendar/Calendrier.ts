import ListeJourCdt from './ListeJourCdt'

export default class Calendrier {
    public currentDate: Date
    public listeJourCdt: ListeJourCdt[] = []
    public cdtOuvert: boolean
    private errmsg: string | null

    constructor (calendrier: {
        errmsg: string | null
        currentDate: number
        listeJourCdt: {
            listeSeances: {
                hdeb: number
                enSeance: {
                    type: string
                    uid: number
                    date: number
                    titre: string
                }[] | null
                matiere: string
                aFaire: {
                    type: string
                    uid: number
                    date: number
                    titre: string
                }[] | null
                heureFin: string
                flagModif: boolean
                titre: string
                flagActif: boolean
                heureDebut: string
                hfin: number
                aRendre: {
                    type: string
                    uid: number
                    date: number
                    titre: string
                }[] | null
                motifModif: string | null
                idSeance: number
                salle: string
            }[]
            date: number
        }[]
        cdtOuvert: boolean
    }) {
      this.errmsg = calendrier.errmsg
      this.currentDate = new Date(calendrier.currentDate)
      this.cdtOuvert = calendrier.cdtOuvert
      calendrier.listeJourCdt.forEach(listeJourCdt => this.listeJourCdt.push(new ListeJourCdt(listeJourCdt)))
    }
}
