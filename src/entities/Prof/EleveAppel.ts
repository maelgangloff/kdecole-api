import { AbsenceEleveAppel } from './AbsenceEleveAppel'

export class EleveAppel {
  public nomEleve: string
  public prenomEleve: string
  public idEleve: string
  public absenceEleveAppel: AbsenceEleveAppel | undefined

  constructor (eleveAppel: {
    nomEleve: string
    prenomEleve: string
    idEleve: string
    absenceEleveAppel: {
      idEleve:string|undefined
      idAbsence:number|undefined
      type:string
      dateDebut:number
      dateFin:number
      idMotif:string|undefined
      modifiable:boolean
    } | undefined
  }) {
    this.nomEleve = eleveAppel.nomEleve
    this.prenomEleve = eleveAppel.prenomEleve
    this.idEleve = eleveAppel.idEleve
    if (eleveAppel.absenceEleveAppel) this.absenceEleveAppel = new AbsenceEleveAppel(eleveAppel.absenceEleveAppel)
  }
}
