export default class Participant {
  public id: string
  public libelle: string

  constructor (participant: {
    id: string
    libelle: string
  }) {
    this.id = participant.id
    this.libelle = participant.libelle
  }
}
