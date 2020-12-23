import { Desactivation } from './entities/Authentication/Desactivation.js'
import { Activation } from './entities/Authentication/Activation.js'
import { APP_VERSION, BASE_URL, IDETABLISSEMENT, SECRET } from './config'
import { Releve } from './entities/Note/Releve'
import { TravailAFaire } from './entities/Travail/TravailAFaire'
import { Actualite } from './entities/News/Actualite'
import { AbsencesList } from './entities/VieScolaire/AbsencesList'
import { Utilisateur } from './entities/User/Utilisateur'
import { Calendrier } from './entities/Calendar/Calendrier'
import { NotesList } from './entities/Note/NotesList'
import { MessageInfo } from './entities/Messagerie/MessageInfo'
import { MessageBoiteReception } from './entities/Messagerie/MessageBoiteReception'
import axios from 'axios'
import { ContenuActivite } from './entities/Travail/ContenuActivite'
import { ContenuArticle } from './entities/News/ContenuArticle'
import { Communication } from './entities/Messagerie/Communication'

interface KdecoleRequest {
  service: 'starting'
      | 'actualites'
      | 'contenuArticle'
      | 'activation'
      | 'consulterReleves'
      | 'consulterAbsences'
      | 'infoutilisateur'
      | 'desactivation'
      | 'calendrier'
      | 'consulterNotes'
      | 'messagerie/info'
      | 'messagerie/boiteReception'
      | 'messagerie/communication'
      | 'messagerie/communication/nouvelleParticipation'
      | 'messagerie/communication/signaler'
      | 'messagerie/communication/supprimer'
      | 'travailAFaire' | 'contenuActivite'
      | 'gestionAppels'
  parameters?: string
  type?: 'get' | 'post' | 'delete' | 'put'
  data?: any
}

/**
 * Support de l'API Kdecole (Mon Bureau Numérique)
 */

export class Kdecole {
  private readonly authToken: string
  public appVersion: string
  public idEtablissement = 0

  constructor (
    authToken: string = SECRET,
    appVersion: string = APP_VERSION,
    idEtablissement: number = IDETABLISSEMENT
  ) {
    if (authToken === undefined) {
      throw Error("Un jeton d'accès doit être renseigné")
    }
    this.authToken = authToken
    this.appVersion = appVersion
    this.idEtablissement = idEtablissement
  }

  public static async login (login: string, password: string): Promise<string> {
    const activation = new Activation(await this.callAPI(APP_VERSION, '', {
      service: 'activation',
      parameters: `${login}/${password}`
    }))
    if (activation.authtoken && activation.success) {
      return activation.authtoken
    } else {
      throw Error('Erreur de connexion')
    }
  }

  public async logout (): Promise<Desactivation | Error> {
    const desactivation = new Desactivation(await this.kdecole({ service: 'desactivation' }))
    if (desactivation.success) return desactivation
    return new Error('Une erreur est survenue dans le traitement des données de déconnexion')
  }

  public async getReleve (idEleve?: string): Promise<Releve> {
    return new Releve(await this.kdecole({
      service: 'consulterReleves',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getActualites (idEleve?: string): Promise<Actualite[]> {
    const actualites: Actualite[] = []
    for (const JSONactualite of await this.kdecole({
      service: 'actualites',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    })) {
      actualites.push(new Actualite(JSONactualite))
    }
    return actualites
  }

  public async getContenuArticle (uid: string): Promise<ContenuArticle> {
    return new ContenuArticle(await this.kdecole({ service: 'contenuArticle', parameters: `article/${uid}` }))
  }

  public async getTravailAFaire (idEleve?: string): Promise<TravailAFaire> {
    return new TravailAFaire(await this.kdecole({
      service: 'travailAFaire',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getContenuActivite (uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite> {
    return new ContenuActivite(await this.kdecole({
      service: 'contenuActivite',
      parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}/`
    }))
  }

  public async getAbsences (idEleve?: string): Promise<AbsencesList> {
    return new AbsencesList(await this.kdecole({
      service: 'consulterAbsences',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getInfoUtilisateur (idEleve?: string): Promise<Utilisateur> {
    return new Utilisateur(await this.kdecole({
      service: 'infoutilisateur',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getCalendrier (idEleve?: string): Promise<Calendrier> {
    return new Calendrier(await this.kdecole({
      service: 'calendrier',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getNotes (idEleve?: string): Promise<NotesList> {
    return new NotesList(await this.kdecole({
      service: 'consulterNotes',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getMessagerieInfo (): Promise<MessageInfo> {
    return new MessageInfo(await this.kdecole({ service: 'messagerie/info' }))
  }

  public async getMessagerieBoiteReception (): Promise<MessageBoiteReception> {
    return new MessageBoiteReception(await this.kdecole({ service: 'messagerie/boiteReception' }))
  }

  public async getCommunication (id: number): Promise<Communication> {
    return new Communication(await this.kdecole({
      service: 'messagerie/communication',
      type: 'put',
      parameters: `${id}`
    }))
  }

  public async signalerCommunication (id: number): Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/signaler',
      type: 'put',
      parameters: `${id}`
    })
  }

  public async supprimerCommunication (id: number): Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/supprimer',
      parameters: `${id}`
    })
  }

  public async getMoyenneGenerale (trimestre?:1|2|3, idEleve?: string): Promise<number> {
    const moyennes = await this.getTableauMoyennes(trimestre, idEleve)
    let moyenneGenerale = 0
    for (const moyenne of moyennes) {
      moyenneGenerale += moyenne / moyennes.length
    }
    return moyenneGenerale
  }

  public async getMedianeGenerale (trimestre?:1|2|3, idEleve?: string): Promise<number> {
    let moyennes = await this.getTableauMoyennes(trimestre, idEleve)

    moyennes = moyennes.slice(0).sort(function (x, y) {
      return x - y
    })
    const b = (moyennes.length + 1) / 2
    return (moyennes.length % 2) ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2
  }

  private async getTableauMoyennes (trimestre?:1|2|3, idEleve?: string): Promise<number[]> {
    const releve = await this.getReleve(idEleve)
    let numeroTrimestre:number|undefined = trimestre
    if (numeroTrimestre === undefined) {
      for (const key in releve.trimestres) {
        if (releve.trimestres[parseInt(key)].periodeEnCours) {
          numeroTrimestre = parseInt(key) + 1
        }
      }
    }
    if (numeroTrimestre === undefined) throw Error('Aucun trimestre en cours')
    const trimestreObject = releve.trimestres[numeroTrimestre - 1]
    const moyennes: number[] = []
    for (const matiere of trimestreObject.matieres) {
      if (typeof matiere.moyenneEleve === 'number') {
        moyennes.push(matiere.moyenneEleve)
      }
    }
    if (moyennes.length === 0) throw Error('Pas de moyennes dans ce trimestre.')
    return moyennes
  }

  private async kdecole ({ service, parameters, type = 'get', data }: KdecoleRequest): Promise<any> {
    if (parameters === undefined) parameters = `idetablissement/${this.idEtablissement}`
    return await Kdecole.callAPI(this.appVersion, this.authToken, { service, parameters, type, data })
  }

  public static async callAPI (appVersion: string, authToken: string, { service, parameters, type = 'get', data }: KdecoleRequest): Promise<any> {
    try {
      return (await axios.request({
        baseURL: BASE_URL,
        headers: {
          'X-Kdecole-Vers': appVersion,
          'X-Kdecole-Auth': authToken
        },
        responseType: 'json',
        method: type,
        url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
        data: data
      })).data
    } catch (e) {
      throw Error('Une erreur est survenue durant le traitement de la requête')
    }
  }
}
