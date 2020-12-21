import { Communication } from './Communication.js'

export class MessageBoiteReception {
    private nbMaxCommunicationRecues: number
    private communications: Array<Communication> = []
    private nbMaxCaracteresMessage: number
    private nbMaxCommunicationBoiteReception: number

    constructor (messageBoiteReception: {
        nbMaxCommunicationRecues: number
        communications: Array<{
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
                pjs: Array<{
                    idRessource: number
                    url: string | null
                    name: string
                    typeMIME: string
                }>
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
        }>
        nbMaxCaracteresMessage: number
        nbMaxCommunicationBoiteReception: number
    }) {
      this.nbMaxCommunicationRecues = messageBoiteReception.nbMaxCommunicationRecues
      messageBoiteReception.communications.forEach(communication => this.communications.push(new Communication(communication)))
      this.nbMaxCaracteresMessage = messageBoiteReception.nbMaxCaracteresMessage
      this.nbMaxCommunicationBoiteReception = messageBoiteReception.nbMaxCommunicationBoiteReception
    }
}
