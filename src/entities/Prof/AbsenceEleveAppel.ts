export default class AbsenceEleveAppel {
  public idAbsence: number|undefined
  public type: string
  public dateDebut: Date
  public dateFin: Date
  public idMotif: string|undefined
  public modifiable: boolean
  public idEleve: string|undefined

  constructor (absenceEleveAppel: {
    idEleve: string|undefined
    idAbsence: number|undefined
    type: string
    dateDebut: number
    dateFin: number
    idMotif: string|undefined
    modifiable: boolean
  }) {
    this.idAbsence = absenceEleveAppel.idAbsence
    this.type = absenceEleveAppel.type
    this.dateDebut = new Date(absenceEleveAppel.dateDebut)
    this.dateFin = new Date(absenceEleveAppel.dateFin)
    this.idMotif = absenceEleveAppel.idMotif
    this.modifiable = absenceEleveAppel.modifiable
    this.idEleve = absenceEleveAppel.idEleve
  }
}
