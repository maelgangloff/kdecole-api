import EleveAppel from './EleveAppel'

export default class Appel {
  public isEnCours: boolean
  public dateDebut: Date
  public dateFin: Date
  public idAppel:number
  public libelleGroupe:string
  public listeElevesAppel:EleveAppel[] = []

  constructor (appel:{
    isEnCours:boolean
    dateDebut:number
    dateFin:number
    idAppel:number
    libelleGroupe:string
    listeElevesAppel:{
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
    }[]
  }) {
    this.isEnCours = appel.isEnCours
    this.dateDebut = new Date(appel.dateDebut)
    this.dateFin = new Date(appel.dateFin)
    this.idAppel = appel.idAppel
    this.libelleGroupe = appel.libelleGroupe
    appel.listeElevesAppel.forEach(eleveAppel => this.listeElevesAppel.push(new EleveAppel(eleveAppel)))
  }
}
