import { Participant } from './Participant.js'
import { Participation } from './Participation.js'
import { Endpoint } from '../Endpoint'

export class Communication {
    private participants: Array<Participant> = []
    private expediteurActuel: Participant
    private signalable: boolean
    private expediteurInitial: Participant
    private id: number
    private dateDernierMessage: Date
    private nbParticipations: number
    private isExpediteurInitial: boolean
    private pieceJointe: boolean
    private participations: Array<Participation> = []
    private objet: string
    private type: string
    private etat: string
    private premieresLignes: string
    private etatLecure: boolean

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

    public async getCommunication (): Promise<Communication> {
      return new Communication(await Endpoint.kdecole({
        service: 'messagerie/communication',
        type: 'put',
        parameters: `${this.id}`
      }))
    }

    public async signalerCommunication ():Promise<void> {
      await Endpoint.kdecole({
        service: 'messagerie/communication/signaler',
        type: 'put',
        parameters: `${this.id}`
      })
    }

    public async supprimerCommunication ():Promise<void> {
      await Endpoint.kdecole({
        service: 'messagerie/communication/supprimer',
        parameters: `${this.id}`
      })
    }
}
