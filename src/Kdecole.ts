import { Desactivation } from './entities/Authentication/Desactivation'
import { Activation } from './entities/Authentication/Activation'
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
      | 'messagerie/communication/lu'
      | 'travailAFaire' | 'contenuActivite'
      | 'gestionAppels'
  parameters?: string
  type?: 'get' | 'post' | 'delete' | 'put'
  data?: any
}

/**
 * Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)
 * @example ```js
 * const Kdecole = require('kdecole-api').default
 *
 * const user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))
 * // ou encore:
 * const user = new Kdecole(AUTH_TOKEN)
 * ```
 */
export default class Kdecole {
  private readonly authToken: string
  public appVersion: string
  public idEtablissement = 0

  /**
   * @param {string} authToken Le jeton d'accès
   * @param {string} appVersion La version de l'API
   * @param {number} idEtablissement L'identifiant de l'établissement
   */
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

  /**
   * Retourne le jeton d'accès de l'utilisateur
   * @param {string} login Le nom d'utilisateur
   * @param {string} password Le mot de passe à usage unique
   * @return {Promise<string>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const AUTH_TOKEN = Kdecole.login(USERNAME, PASSWORD)
   * ```
   */
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

  /**
   * Invalide le jeton d'accès
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   * const user = new Kdecole(AUTH_TOKEN)
   * user.logout()
   * ```
   * @return {Promise<Desactivation | Error>}
   */
  public async logout (): Promise<Desactivation | Error> {
    const desactivation = new Desactivation(await this.kdecole({ service: 'desactivation' }))
    if (desactivation.success) return desactivation
    return new Error('Une erreur est survenue dans le traitement des données de déconnexion')
  }

  /**
   * Retourne le relevé des notes de l'élève
   * @example ```js
   * kdecole.getReleve() //Retourne le relevé de l'élève
   * kdecole.getReleve(idEleve) //Retourne le relevé d'un élève précis
   * ```
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Releve>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getReleve(idEleve).then((releve)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getReleve (idEleve?: string): Promise<Releve> {
    return new Releve(await this.kdecole({
      service: 'consulterReleves',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne un tableau des actualités de l'établissement de l'utilisateur
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Actualite[]>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getActualites(idEleve).then((actualites)=>{
   *  // Votre code
   *  })
   * ```
   */
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

  /**
   * Retourne le contenu d'un article
   * @param {string} uid Identifiant unique de l'article
   * @return {Promise<ContenuArticle>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuArticle(uid).then((contenuArticle)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuArticle (uid: string): Promise<ContenuArticle> {
    return new ContenuArticle(await this.kdecole({ service: 'contenuArticle', parameters: `article/${uid}` }))
  }

  /**
   * Retourne la liste des devoirs de l'élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<TravailAFaire>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getTravailAFaire(idEleve).then((taf)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getTravailAFaire (idEleve?: string): Promise<TravailAFaire> {
    return new TravailAFaire(await this.kdecole({
      service: 'travailAFaire',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne les détails d'un devoir à faire
   * @param {number} uidSeance Identifiant de la séance
   * @param {number} uid Identifiant du devoir à faire
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<ContenuActivite>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuActivite (uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite> {
    return new ContenuActivite(await this.kdecole({
      service: 'contenuActivite',
      parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}/`
    }))
  }

  /**
   * Retourne la liste des absences d'un élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<AbsencesList>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getAbsences(idEleve).then((absences)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getAbsences (idEleve?: string): Promise<AbsencesList> {
    return new AbsencesList(await this.kdecole({
      service: 'consulterAbsences',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Utilisateur>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getInfoUtilisateur(idEleve).then((infoUtilisateur)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getInfoUtilisateur (idEleve?: string): Promise<Utilisateur> {
    return new Utilisateur(await this.kdecole({
      service: 'infoutilisateur',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne l'emploi du temps de l'élève à J-7 et J+7
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Calendrier>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCalendrier(idEleve).then((calendrier)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getCalendrier (idEleve?: string): Promise<Calendrier> {
    return new Calendrier(await this.kdecole({
      service: 'calendrier',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne la liste des récentes notes de l'élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<NotesList>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getNotes(idEleve).then((notes)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getNotes (idEleve?: string): Promise<NotesList> {
    return new NotesList(await this.kdecole({
      service: 'consulterNotes',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)
   * @return {Promise<MessageInfo>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMessagerieInfo().then((messagerieInfo)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieInfo (): Promise<MessageInfo> {
    return new MessageInfo(await this.kdecole({ service: 'messagerie/info' }))
  }

  /**
   * Retourne les mails présents dans la boîte mail
   * @return {Promise<MessageBoiteReception>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieBoiteReception (): Promise<MessageBoiteReception> {
    return new MessageBoiteReception(await this.kdecole({ service: 'messagerie/boiteReception' }))
  }

  /**
   * Retourne les détails d'un fil de discussion
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<Communication>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCommunication(id).then((communication)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getCommunication (id: number): Promise<Communication> {
    return new Communication(await this.kdecole({
      service: 'messagerie/communication',
      type: 'put',
      parameters: `${id}`
    }))
  }

  /**
   * Permet de signaler une communication
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<void>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.reportCommunication(id)
   * ```
   */
  public async reportCommunication (id: number): Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/signaler',
      type: 'put',
      parameters: `${id}`
    })
  }

  /**
   * Supprime la communication
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<void>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.deleteCommunication(id)
   * ```
   */
  public async deleteCommunication (id: number): Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/supprimer',
      parameters: `${id}`
    })
  }

  /**
   * Marquer une communication lue
   * @param id {number} Identifiant d'un fil de discussion
   * @return {Promise<void>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.setCommunicationLu(id)
   * ```
   */
  public async setCommunicationLu (id: number): Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/lu',
      parameters: `${id}`,
      type: 'put',
      data: {
        action: 'lu'
      }
    })
  }

  /**
   * Envoyer un message sur un fil de discussion
   * @param id {number} Identifiant d'un fil de discussion
   * @param corpsMessage {string} Corps du message HTML
   * @return {Promise<void>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.sendMessage(id, corpsMessage)
   * ```
   */
  public async sendMessage (id:number, corpsMessage:string):Promise<void> {
    await this.kdecole({
      service: 'messagerie/communication/nouvelleParticipation',
      parameters: `${id}`,
      type: 'put',
      data: {
        dateEnvoi: (new Date()).getTime(),
        corpsMessage: corpsMessage
      }
    })
  }

  /**
   * Retourne la valeur exacte de la moyenne générale de l'élève
   * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<number>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMoyenneGenerale(trimestre, idEleve).then((moyenneGenerale)=>{
   * console.log(moyenneGenerale) //Affiche la moyenne générale de l'élève dans la console
   *  })
   * ```
   */
  public async getMoyenneGenerale (trimestre?:number, idEleve?: string): Promise<number> {
    if (trimestre !== undefined && [1, 2, 3].includes(trimestre)) throw Error('Le trimestre doit être 1, 2 ou 3')
    const moyennes = await this.getTableauMoyennes(trimestre, idEleve)
    let moyenneGenerale = 0
    for (const moyenne of moyennes) {
      moyenneGenerale += moyenne / moyennes.length
    }
    return moyenneGenerale
  }

  /**
   * Retourne la médiane des moyennes des matières de l'élève
   * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<number>}
   * @example ```js
   * const Kdecole = require('kdecole-api').default
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCommunication(trimestre, idEleve).then((medianegenerale)=>{
   * console.log(medianegenerale) //Affiche la médiane des moyennes de l'élève dans la console
   *  })
   * ```
   */
  public async getMedianeGenerale (trimestre?:number, idEleve?: string): Promise<number> {
    if (trimestre !== undefined && [1, 2, 3].includes(trimestre)) throw Error('Le trimestre doit être 1, 2 ou 3')
    let moyennes = await this.getTableauMoyennes(trimestre, idEleve)

    moyennes = moyennes.slice(0).sort(function (x, y) {
      return x - y
    })
    const b = (moyennes.length + 1) / 2
    return (moyennes.length % 2) ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2
  }

  /**
   * Retourne un tableau contenant les moyennes des matières de l'élève
   * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<number[]>}
   * @private
   */
  private async getTableauMoyennes (trimestre?:number, idEleve?: string): Promise<number[]> {
    if (trimestre !== undefined && [1, 2, 3].includes(trimestre)) throw Error('Le trimestre doit être 1, 2 ou 3')
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

  /**
   * Effectue un premier traitement des données reçues en provenance de l'API et en retourne le résultat
   */
  private async kdecole ({ service, parameters, type = 'get', data }: KdecoleRequest): Promise<any> {
    if (parameters === undefined) parameters = `idetablissement/${this.idEtablissement}`
    return await Kdecole.callAPI(this.appVersion, this.authToken, { service, parameters, type, data })
  }

  /**
   * Envoie les requêtes à l'API
   * Les en-têtes qui doivent être présentes sont:
   *  - X-Kdecole-Vers  Version de l'application mobile
   *  - X-Kdecole-Auth  Jeton d'accès
   */
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
