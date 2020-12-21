import { Attachment } from './Attachment.js'
import { Participant } from './Participant.js'

export class Participation {
    private dateEnvoi: Date
    private corpsMessage: string
    private pjs: Attachment[] = []
    private id: number
    private libelleObjet: string | null
    private redacteur: Participant
    private premieresLignes: string
    private typeMessage: string

    constructor (participation: {
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
    }) {
      this.dateEnvoi = new Date(participation.dateEnvoi)
      this.corpsMessage = participation.corpsMessage
      participation.pjs.forEach(pj => this.pjs.push(new Attachment(pj)))
      this.id = participation.id
      this.libelleObjet = participation.libelleObjet
      this.redacteur = new Participant(participation.redacteur)
      this.premieresLignes = participation.premieresLignes
      this.typeMessage = participation.typeMessage
    }
}
