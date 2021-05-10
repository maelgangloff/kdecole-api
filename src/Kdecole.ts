import axios from 'axios'
import Desactivation from './entities/Authentication/Desactivation'
import Activation from './entities/Authentication/Activation'
import Releve from './entities/Note/Releve'
import TravailAFaire from './entities/Travail/TravailAFaire'
import Actualite from './entities/News/Actualite'
import AbsencesList from './entities/VieScolaire/AbsencesList'
import Utilisateur from './entities/User/Utilisateur'
import Calendrier from './entities/Calendar/Calendrier'
import NotesList from './entities/Note/NotesList'
import MessageInfo from './entities/Messagerie/MessageInfo'
import MessageBoiteReception from './entities/Messagerie/MessageBoiteReception'
import ContenuActivite from './entities/Travail/ContenuActivite'
import ContenuArticle from './entities/News/ContenuArticle'
import Communication from './entities/Messagerie/Communication'
import GestionAppels from './entities/Prof/GestionAppels'

export const APP_VERSION = '3.4.14'

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
 * L'accès à l'API requiert une en-tête avec la version de l'application en cours d'utilisation.
 * Les versions à utiliser lors de la création de l'instance `Kdecole` sont données ci-dessous.
 *
 * |         Nom de l'ENT           | Version   | URL de l'API                                              |
 * |:----------------------------:  |:-------:  |---------------------------------------------------------  |
 * |     Mon Bureau Numérique       |  3.4.14   | https://mobilite.monbureaunumerique.fr/mobilite           |
 * |       Mon ENT Occitanie        |  3.5.2    | https://mobilite.mon-ent-occitanie.fr/mobilite            |
 * |           Arsene 76            |  3.7.11   | https://mobilite.arsene76.fr/mobilite                     |
 * |             ENT27              |  3.5.6    | https://mobilite.ent27.fr/mobilite                        |
 * |          ENT Creuse            |  3.5.6    | https://mobilite.entcreuse.fr/mobilite                    |
 * |   ENT Auvergne-Rhône-Alpes     |  3.7.11   | https://mobilite.ent.auvergnerhonealpes.fr/mobilite       |
 * |     Savoirs Numériques 62      |  3.5.4    | https://mobilite.savoirsnumeriques62.fr/mobilite          |
 * |           Agora 06             |  3.7.14   | https://mobilite.agora06.fr/mobilite                      |
 * |       CyberCollèges 42         |  3.5.6    | https://mobilite.cybercolleges42.fr/mobilite              |
 * |    eCollège 31 Haute-Garonne   |  3.1.15   | https://mobilite.ecollege.haute-garonne.fr/mobilite       |
 * |   Mon collège en Val d'Oise    |  3.4.11   | https://mobilite.moncollege.valdoise.fr/mobilite          |
 * | Webcollège Seine-Saint-Denis   |  3.7.14   | https://mobilite.webcollege.seinesaintdenis.fr/mobilite   |
 * |           Eclat-BFC            |  3.5.3    | https://mobilite.eclat-bfc.fr/mobilite                    |
 */
export enum ApiUrl {
  PROD_MON_BUREAU_NUMERIQUE = 'https://mobilite.monbureaunumerique.fr/mobilite',
  PREPROD_MON_BUREAU_NUMERIQUE = 'https://mobilite.preprod.monbureaunumerique.fr/mobilite',
  PROD_MON_ENT_OCCITANIE = 'https://mobilite.mon-ent-occitanie.fr/mobilite',
  PROD_ARSENE76 = 'https://mobilite.arsene76.fr/mobilite',
  PROD_ENT27 = 'https://mobilite.ent27.fr/mobilite',
  PROD_ENTCREUSE = 'https://mobilite.entcreuse.fr/mobilite',
  PROD_AUVERGNERHONEALPES = 'https://mobilite.ent.auvergnerhonealpes.fr/mobilite',
  PROD_SAVOIRSNUMERIQUES62 = 'https://mobilite.savoirsnumeriques62.fr/mobilite',
  PROD_AGORA06 = 'https://mobilite.agora06.fr/mobilite',
  PROD_CYBERCOLLEGES42 = 'https://mobilite.cybercolleges42.fr/mobilite',
  PROD_ECOLLEGE_HAUTE_GARONNE = 'https://mobilite.ecollege.haute-garonne.fr/mobilite',
  PROD_MONCOLLEGE_VALDOISE = 'https://mobilite.moncollege.valdoise.fr/mobilite',
  PROD_WEBCOLLEGE_SEINESAINTDENIS = 'https://mobilite.webcollege.seinesaintdenis.fr/mobilite',
  PROD_ECLAT_BFC = 'https://mobilite.eclat-bfc.fr/mobilite',
  PROD_DEMO_SKOLENGO = 'https://mobilite.demo.skolengo.com/mobilite'
}

/**
 * Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)
 * @example ```js
 * const { Kdecole } = require('kdecole-api')
 *
 * const user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))
 * // ou encore:
 * const user = new Kdecole(AUTH_TOKEN)
 * ```
 */
export class Kdecole {
  private readonly authToken: string
  public appVersion: string
  public idEtablissement:number
  public apiURL: string

  /**
   * @param {string} authToken Le jeton d'accès
   * @param {string} appVersion La version de l'application mobile autorisée par l'API
   * @param {number} idEtablissement L'identifiant de l'établissement
   * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
   */
  constructor (
    authToken: string,
    appVersion: string = APP_VERSION,
    idEtablissement = 0,
    apiURL: ApiUrl | string = ApiUrl.PROD_MON_BUREAU_NUMERIQUE
  ) {
    if (authToken === undefined) {
      throw Error("Un jeton d'accès doit être renseigné")
    }
    this.authToken = authToken
    this.appVersion = appVersion
    this.idEtablissement = idEtablissement
    this.apiURL = apiURL
  }

  /**
   * Retourne le jeton d'accès de l'utilisateur
   * @param {string} username Le nom d'utilisateur
   * @param {string} password Le mot de passe à usage unique
   * @param {string} appVersion La version de l'application mobile autorisée par l'API
   * @param {apiURL} apiUrl L'URL de l'API Kdecole
   * @return {Promise<string>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const authToken = Kdecole.login(username, password)
   * console.log(authToken) //Afficher son token d'authentification
   * ```
   */
  public static async login (username: string, password: string, appVersion:string = APP_VERSION, apiUrl :ApiUrl = ApiUrl.PROD_MON_BUREAU_NUMERIQUE): Promise<string> {
    const activation = new Activation(await Kdecole.kdecole(new Kdecole('', appVersion, 0, apiUrl), {
      service: 'activation',
      parameters: `${username}/${password}`
    }))
    if (activation.authtoken && activation.success) {
      return activation.authtoken
    } else {
      throw Error("L'authentification n'a pas fonctionné")
    }
  }

  /**
   * Invalide le jeton d'accès
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   * const user = new Kdecole(authToken)
   * user.logout()
   * ```
   * @return {Promise<Desactivation>}
   */
  public async logout (): Promise<Desactivation> {
    const desactivation = new Desactivation(await Kdecole.kdecole(this, { service: 'desactivation' }))
    if (desactivation.success) return desactivation
    throw Error('Une erreur est survenue dans le traitement des données de déconnexion')
  }

  /**
   * Retourne le relevé de notes de l'élève
   * @example ```js
   * kdecole.getReleve() //Retourne le relevé de l'élève
   * kdecole.getReleve(idEleve) //Retourne le relevé d'un élève précis
   * ```
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Releve>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getReleve(idEleve).then((releve)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getReleve (idEleve?: string): Promise<Releve> {
    return new Releve(await Kdecole.kdecole(this, {
      service: 'consulterReleves',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne un tableau des actualités de l'établissement de l'utilisateur
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Actualite[]>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getActualites(idEleve).then((actualites)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getActualites (idEleve?: string): Promise<Actualite[]> {
    const actualites: Actualite[] = []
    for (const JSONactualite of await Kdecole.kdecole(this, {
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
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuArticle(uid).then((contenuArticle)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuArticle (uid: string): Promise<ContenuArticle> {
    return new ContenuArticle(await Kdecole.kdecole(this, { service: 'contenuArticle', parameters: `article/${uid}` }))
  }

  /**
   * Retourne la liste des devoirs de l'élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<TravailAFaire>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getTravailAFaire(idEleve).then((taf)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getTravailAFaire (idEleve?: string): Promise<TravailAFaire> {
    return new TravailAFaire(await Kdecole.kdecole(this, {
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
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuActivite (uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite> {
    return new ContenuActivite(await Kdecole.kdecole(this, {
      service: 'contenuActivite',
      parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}`
    }))
  }

  /**
   * Permet de marquer un devoir comme étant fait
   * @param uidSeance {number} Identifiant de la séance
   * @param uid {number} Identifiant du devoir
   * @param flagRealise {boolean} Statut du devoir
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.setActiviteFinished(uidSeance, uid, flagRealise)
   * ```
   */
  public async setActiviteFinished (uidSeance: number, uid: number, flagRealise: boolean): Promise<void> {
    await Kdecole.kdecole(this, {
      service: 'contenuActivite',
      parameters: `idetablissement/${this.idEtablissement}/${uidSeance}/${uid}`,
      type: 'put',
      data: {
        flagRealise: flagRealise
      }
    })
  }

  /**
   * Retourne la liste des absences d'un élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<AbsencesList>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getAbsences(idEleve).then((absences)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getAbsences (idEleve?: string): Promise<AbsencesList> {
    return new AbsencesList(await Kdecole.kdecole(this, {
      service: 'consulterAbsences',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Utilisateur>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getInfoUtilisateur(idEleve).then((infoUtilisateur)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getInfoUtilisateur (idEleve?: string): Promise<Utilisateur> {
    return new Utilisateur(await Kdecole.kdecole(this, {
      service: 'infoutilisateur',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne l'emploi du temps de l'élève à J-7 et J+7
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Calendrier>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCalendrier(idEleve).then((calendrier)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getCalendrier (idEleve?: string): Promise<Calendrier> {
    return new Calendrier(await Kdecole.kdecole(this, {
      service: 'calendrier',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne la liste des récentes notes de l'élève
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<NotesList>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getNotes(idEleve).then((notes)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getNotes (idEleve?: string): Promise<NotesList> {
    return new NotesList(await Kdecole.kdecole(this, {
      service: 'consulterNotes',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  /**
   * Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)
   * @return {Promise<MessageInfo>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMessagerieInfo().then((messagerieInfo)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieInfo (): Promise<MessageInfo> {
    return new MessageInfo(await Kdecole.kdecole(this, { service: 'messagerie/info' }))
  }

  /**
   * Retourne les mails présents dans la boîte mail
   * @return {Promise<MessageBoiteReception>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieBoiteReception (): Promise<MessageBoiteReception> {
    return new MessageBoiteReception(await Kdecole.kdecole(this, { service: 'messagerie/boiteReception' }))
  }

  /**
   * Retourne les détails d'un fil de discussion
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<Communication>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCommunication(id).then((communication)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async getCommunication (id: number): Promise<Communication> {
    return new Communication(await Kdecole.kdecole(this, {
      service: 'messagerie/communication',
      type: 'get',
      parameters: `${id}`
    }))
  }

  /**
   * Permet de signaler une communication
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<void>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.reportCommunication(id)
   * ```
   */
  public async reportCommunication (id: number): Promise<void> {
    await Kdecole.kdecole(this, {
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
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.deleteCommunication(id)
   * ```
   */
  public async deleteCommunication (id: number): Promise<void> {
    await Kdecole.kdecole(this, {
      service: 'messagerie/communication/supprimer',
      parameters: `${id}`,
      type: 'delete'
    })
  }

  /**
   * Marquer une communication lue
   * @param id {number} Identifiant d'un fil de discussion
   * @return {Promise<void>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.setCommunicationLu(id)
   * ```
   */
  public async setCommunicationLu (id: number): Promise<void> {
    await Kdecole.kdecole(this, {
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
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.sendMessage(id, corpsMessage)
   * ```
   */
  public async sendMessage (id: number, corpsMessage: string): Promise<void> {
    await Kdecole.kdecole(this, {
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
   * Retourne les feuilles d'appel.
   * @return {Promise<GestionAppels>} Les feuilles d'appel.
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.gestionAppels().then((gestionAppels)=>{
   *  // Votre code
   *  })
   * ```
   */
  public async gestionAppels ():Promise<GestionAppels> {
    return new GestionAppels(await Kdecole.kdecole(this, { service: 'gestionAppels' }))
  }

  /**
   * Valide l'appel de la classe.
   * @return {Promise<void>}
   * @param appel L'appel à valider
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * const appel = {
   *   "idEtab": 10485,
   *   "idAppel": 534552,
   *   "listeAbsencesAppel": [
   *     {
   *       "idEleve": "AAP05567",
   *       "type": "absence",
   *       "dateDebut": 1609259443000,
   *       "dateFin": 1609263043000,
   *       "modifiable": true
   *     }
   *   ]
   * }
   * user.validerAppel(appel)
   * ```
   */
  public async validerAppel (appel:{
    idEtab:number,
    idAppel:number,
    listeAbsencesAppel:{
      idEleve:string
      type:string
      dateDebut:number
      dateFin:number
      modifiable:boolean
    }[]
  }):Promise<void> {
    await Kdecole.kdecole(this, {
      service: 'gestionAppels',
      parameters: `idetablissement/${this.idEtablissement}/valider`,
      type: 'put',
      data: appel
    })
  }

  private static async kdecole (ctx: Kdecole, { service, parameters, type = 'get', data }: KdecoleRequest): Promise<any> {
    if (parameters === undefined && service !== 'desactivation' && service !== 'messagerie/info' && service !== 'messagerie/communication' && service !== 'messagerie/boiteReception' && service !== 'infoutilisateur') parameters = `idetablissement/${ctx.idEtablissement}`
    return (await axios.request({
      baseURL: ctx.apiURL,
      headers: {
        'X-Kdecole-Vers': ctx.appVersion,
        'X-Kdecole-Auth': ctx.authToken
      },
      responseType: 'json',
      method: type,
      url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
      data: data
    })).data
  }
}
