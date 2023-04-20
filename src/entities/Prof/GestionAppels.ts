import Appel from './Appel'

export default class GestionAppels {
  public dateDuJour: Date
  public listeAppels: Appel[] = []

  constructor (gestionAppels: {
    dateDuJour: number
    listeAppels: Array<{
      isEnCours: boolean
      dateDebut: number
      dateFin: number
      idAppel: number
      libelleGroupe: string
      listeElevesAppel: Array<{
        nomEleve: string
        prenomEleve: string
        idEleve: string
        absenceEleveAppel: {
          idEleve: string|undefined
          idAbsence: number|undefined
          type: string
          dateDebut: number
          dateFin: number
          idMotif: string|undefined
          modifiable: boolean
        } | undefined
      }>
    }>
  }) {
    this.dateDuJour = new Date(gestionAppels.dateDuJour)
    gestionAppels.listeAppels.forEach(appel => this.listeAppels.push(new Appel(appel)))
  }
}
