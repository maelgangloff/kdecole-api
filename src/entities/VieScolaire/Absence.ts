export default class Absence {
    public dateFin: Date
    public motif: string | null
    public type: string
    public matiere: string | null
    public dateDebut: Date
    public justifiee: boolean

    constructor (absence: {
        dateFin: number
        motif: string | null
        type: string
        matiere: string
        dateDebut: number
        justifiee: boolean
    }) {
      this.dateFin = new Date(absence.dateFin)
      this.motif = absence.motif
      this.type = absence.type
      this.matiere = absence.matiere === '' ? null : absence.matiere
      this.justifiee = absence.justifiee
      this.dateDebut = new Date(absence.dateDebut)
    }
}
