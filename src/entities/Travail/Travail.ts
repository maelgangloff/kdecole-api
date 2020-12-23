export class Travail {
    public type: string
    public temps: number
    public matiere: string
    public flagRealise: boolean
    public titre: string
    public date: Date
    public uid: number
    public uidSeance: number

    constructor (travailAFaire: {
        type: string
        temps: number
        matiere: string
        flagRealise: boolean
        titre: string
        date: number
        uid: string
        uidSeance: string
    }) {
      this.type = travailAFaire.type
      this.temps = travailAFaire.temps
      this.matiere = travailAFaire.matiere
      this.flagRealise = travailAFaire.flagRealise
      this.titre = travailAFaire.titre
      this.date = new Date(travailAFaire.date)
      this.uid = parseInt(travailAFaire.uid)
      this.uidSeance = parseInt(travailAFaire.uidSeance)
    }
}
