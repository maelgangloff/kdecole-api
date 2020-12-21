export class Participant {
    private id: string
    private libelle: string

    constructor (participant: {
        id: string
        libelle: string
    }) {
      this.id = participant.id
      this.libelle = participant.libelle
    }
}
