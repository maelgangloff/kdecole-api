import Absence from './Absence'

export default class AbsencesList {
    public codeEleve: string
    public nbAbsencesMax: number
    public listeAbsences: Absence[] = []
    private errmsg: string | null

    constructor (absenceList: {
                    errmsg: string | null
                    codeEleve: string
                    nbAbsencesMax: number
                    listeAbsences: {
                        dateFin: number
                        motif: string | null
                        type: string
                        matiere: string
                        dateDebut: number
                        justifiee: boolean
                    }[]
                }
    ) {
      this.errmsg = absenceList.errmsg
      this.codeEleve = absenceList.codeEleve
      this.nbAbsencesMax = absenceList.nbAbsencesMax
      absenceList.listeAbsences.forEach(absence => this.listeAbsences.push(new Absence(absence)))
    }
}
