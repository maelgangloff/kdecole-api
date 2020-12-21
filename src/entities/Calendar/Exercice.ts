export class Exercice {
    private type: string
    private uid: number
    private date: Date
    private titre: string

    constructor (enSeance: {
        type: string
        uid: number
        date: number
        titre: string
    }) {
      this.type = enSeance.type
      this.uid = enSeance.uid
      this.date = new Date(enSeance.date)
      this.titre = enSeance.titre
    }
}
