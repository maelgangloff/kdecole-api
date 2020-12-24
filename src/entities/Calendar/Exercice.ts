export class Exercice {
    public type: string
    public uid: number
    public date: Date
    public titre: string

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
