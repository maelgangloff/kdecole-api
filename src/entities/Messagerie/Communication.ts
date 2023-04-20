import Participant from './Participant'
import Participation from './Participation'

export default class Communication {
    public participants: Array<Participant> = []
    public expediteurActuel: Participant
    public signalable: boolean
    public expediteurInitial: Participant
    public id: number
    public dateDernierMessage: Date
    public nbParticipations: number
    public isExpediteurInitial: boolean
    public pieceJointe: boolean
    public participations: Array<Participation> = []
    public objet: string
    public type: string
    public etat: string
    public premieresLignes: string
    public etatLecure: boolean

    constructor (communication: {
        participants: Array<{
            id: string
            libelle: string
        }> | null
        expediteurActuel: {
            id: string
            libelle: string
        }
        signalable: boolean
        expediteurInitial: {
            id: string
            libelle: string
        }
        id: number
        dateDernierMessage: number
        nbParticipations: number
        isExpediteurInitial: boolean
        pieceJointe: boolean
        participations: Array<{
            dateEnvoi: number
            corpsMessage: string
            pjs: {
                idRessource: number | null
                url: string | null
                name: string
                typeMIME: string | null
            }[]
            id: number
            libelleObjet: string | null
            redacteur: {
                id: string
                libelle: string
            }
            premieresLignes: string
            typeMessage: string
        }> | null
        objet: string
        type: string
        etat: string
        premieresLignes: string
        etatLecture: boolean
    }) {
      communication.participants?.forEach(participant => this.participants.push(new Participant(participant)))
      this.expediteurActuel = new Participant(communication.expediteurActuel)
      this.signalable = communication.signalable
      this.expediteurInitial = new Participant(communication.expediteurInitial)
      this.id = communication.id
      this.dateDernierMessage = new Date(communication.dateDernierMessage)
      this.nbParticipations = communication.nbParticipations
      this.isExpediteurInitial = communication.isExpediteurInitial
      this.pieceJointe = communication.pieceJointe
      communication.participations?.forEach(participation => this.participations.push(new Participation(participation)))
      this.objet = communication.objet
      this.type = communication.type
      this.etat = communication.etat
      this.premieresLignes = communication.premieresLignes
      this.etatLecure = communication.etatLecture
    }
}
