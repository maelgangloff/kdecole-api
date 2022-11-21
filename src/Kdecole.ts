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

export enum ApiUrl {
  PROD_MON_BUREAU_NUMERIQUE = 'https://mobilite.monbureaunumerique.fr/mobilite',
  PROD_MON_ENT_OCCITANIE = 'https://mobilite.mon-ent-occitanie.fr/mobilite',
  PROD_ARSENE76 = 'https://mobilite.arsene76.fr/mobilite',
  PROD_ENT27 = 'https://mobilite.ent27.fr/mobilite',
  PROD_ENTCREUSE = 'https://mobilite.entcreuse.fr/mobilite',
  PROD_AUVERGNERHONEALPES = 'https://mobilite.ent.auvergnerhonealpes.fr/mobilite',
  PROD_AGORA06 = 'https://mobilite.agora06.fr/mobilite',
  PROD_CYBERCOLLEGES42 = 'https://mobilite.cybercolleges42.fr/mobilite',
  PROD_ECOLLEGE_HAUTE_GARONNE = 'https://mobilite.ecollege.haute-garonne.fr/mobilite',
  PROD_MONCOLLEGE_VALDOISE = 'https://mobilite.moncollege.valdoise.fr/mobilite',
  PROD_WEBCOLLEGE_SEINESAINTDENIS = 'https://mobilite.webcollege.seinesaintdenis.fr/mobilite',
  PROD_ECLAT_BFC = 'https://mobilite.eclat-bfc.fr/mobilite',
  PROD_KOSMOS_EDUCATION = 'https://mobilite.kosmoseducation.com/mobilite',
  PROD_AUCOLLEGE84_VAUCLUSE = 'https://mobilite.aucollege84.vaucluse.fr/mobilite',
  PROD_DEMO_SKOLENGO = 'https://mobilite.demo.skolengo.com/mobilite',
  PROD_SKOLENGO_FORMATION = 'https://mobilite.formation.skolengo.com/mobilite',
  PROD_SKOLENGO = 'https://mobilite.skolengo.com/mobilite',
  PROD_SCHULPORTAL_OSTBELGIEN = 'https://mobilite.schulen.be/mobilite',
  PROD_ENT_VAL_DE_MARNE = 'https://mobilite.entvaldemarne.skolengo.com/mobilite'
}

export enum ApiVersion {
  PROD_MON_BUREAU_NUMERIQUE = '3.7.14',
  PROD_MON_ENT_OCCITANIE = '3.7.14',
  PROD_ARSENE76 = '3.7.14',
  PROD_ENT27 = '3.7.14',
  PROD_ENTCREUSE = '3.7.14',
  PROD_AUVERGNERHONEALPES = '3.7.14',
  PROD_AGORA06 = '3.7.14',
  PROD_CYBERCOLLEGES42 = '3.7.14',
  PROD_ECOLLEGE_HAUTE_GARONNE = '3.7.14',
  PROD_MONCOLLEGE_VALDOISE = '3.7.14',
  PROD_WEBCOLLEGE_SEINESAINTDENIS = '3.7.14',
  PROD_ECLAT_BFC = '3.7.14',
  PROD_AUCOLLEGE84_VAUCLUSE = '3.7.14',
  PROD_KOSMOS_EDUCATION = '3.7.14',
  PROD_DEMO_SKOLENGO = '3.7.14',
  PROD_SKOLENGO_FORMATION = '3.7.14',
  PROD_SKOLENGO = '3.7.14',
  PROD_SCHULPORTAL_OSTBELGIEN = '3.7.14',
  PROD_ENT_VAL_DE_MARNE = '3.7.14'
}

/**
 * Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)
 *
 * Ce module permet de récupérer les données de l'ENT de manière automatique. De plus, certaines fonctions implémentées permettent de prétraiter les données (conversion de l'emploi du temps au format iCalendar, export du relevé de notes au format CSV par exemple).
 *
 * L'accès à l'API requiert une en-tête (header) avec la version de l'application en cours d'utilisation.
 *
 * Le terme "code" ou "password" ne réfère pas ici à votre mot de passe, mais à un code temporaire généré par votre ENT (dans paramètres > application mobile). C'est comme cela que fonctionne l'authentification à l'API.
 *
 * Les versions à utiliser lors de la création de l'instance `Kdecole` sont données ci-dessous.
 *
 * |         Nom de l'ENT          | Version | URL de l'API                                            |
 * |:-----------------------------:|:-------:|---------------------------------------------------------|
 * |     Mon Bureau Numérique      |  3.7.14 | https://mobilite.monbureaunumerique.fr/mobilite         |
 * |       Mon ENT Occitanie       |  3.7.14 | https://mobilite.mon-ent-occitanie.fr/mobilite          |
 * |           Arsene 76           |  3.7.14 | https://mobilite.arsene76.fr/mobilite                   |
 * |             ENT27             |  3.7.14 | https://mobilite.ent27.fr/mobilite                      |
 * |          ENT Creuse           |  3.7.14 | https://mobilite.entcreuse.fr/mobilite                  |
 * |   ENT Auvergne-Rhône-Alpes    |  3.7.14 | https://mobilite.ent.auvergnerhonealpes.fr/mobilite     |
 * |           Agora 06            |  3.7.14 | https://mobilite.agora06.fr/mobilite                    |
 * |       CyberCollèges 42        |  3.7.14 | https://mobilite.cybercolleges42.fr/mobilite            |
 * |   eCollège 31 Haute-Garonne   |  3.7.14 | https://mobilite.ecollege.haute-garonne.fr/mobilite     |
 * |   Mon collège en Val d'Oise   |  3.7.14 | https://mobilite.moncollege.valdoise.fr/mobilite        |
 * | Webcollège Seine-Saint-Denis  |  3.7.14 | https://mobilite.webcollege.seinesaintdenis.fr/mobilite |
 * |           Eclat-BFC           |  3.7.14 | https://mobilite.eclat-bfc.fr/mobilite                  |
 * |          @ucollège84          |  3.7.14 | https://mobilite.aucollege84.vaucluse.fr/mobilite       |
 * |      ENT Val de Marne         |  3.7.14 | https://mobilite.entvaldemarne.skolengo.com/mobilite    |
 * |         Skolengo Demo         |  3.7.14 | https://mobilite.demo.skolengo.com/mobilite             |
 * |            Skolengo           |  3.7.14 | https://mobilite.skolengo.com/mobilite                  |
 * | Kosmos Éducation (aefe, etc.) |  3.7.14 | https://mobilite.kosmoseducation.com/mobilite           |
 * |      Skolengo formation       |  3.7.14 | https://mobilite.formation.skolengo.com/mobilite        |
 * |    Schulportal Ostbelgien     |  3.7.14 | https://mobilite.schulen.be/mobilite                    |
 *
 * Une autre méthode pour obtenir un token est d'utiliser la ligne de commande.
 *
 *```shell
 * npx kdecole-api -u USERNAME -p CODE --ent PROD_MON_BUREAU_NUMERIQUE
 * ```
 * @example ```js
 * const { Kdecole, ApiVersion, ApiUrl } = require('kdecole-api');
 *
 * const token = 'azertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazert'
 * const user = new Kdecole(token, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 0, ApiUrl.PROD_MON_BUREAU_NUMERIQUE)
 * user.getInfoUtilisateur().then(infoUser => {
 *   console.log(`Jeton valide, connecté en tant que ${infoUser.nom}.`)
 * })
 * ```
 */
export class Kdecole {
  /**
   * @param {string} authToken Le jeton d'accès
   * @param {ApiVersion|string} apiVersion La version de l'application mobile autorisée par l'API
   * @param {number} idEtablissement L'identifiant de l'établissement
   * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
   */
  constructor (
    private readonly authToken: string,
    public apiVersion: ApiVersion | string = ApiVersion.PROD_MON_BUREAU_NUMERIQUE,
    public idEtablissement: number = 0,
    public apiURL: ApiUrl | string = ApiUrl.PROD_MON_BUREAU_NUMERIQUE
  ) {
    if (authToken === undefined) throw Error('Un jeton d\'accès doit être renseigné')
  }

  /**
   * Demande à l'API de générer un nouveau jeton pour l'utilisateur
   * @param {string} username Le nom d'utilisateur
   * @param {string} password Le mot de passe à usage unique
   * @param {ApiVersion|string} apiVersion La version de l'application mobile autorisée par l'API
   * @param {apiURL|string} apiUrl L'URL de l'API Kdecole
   * @return {Promise<string>}
   * @example ```js
   * const { Kdecole, ApiUrl, ApiVersion } = require('kdecole-api')
   * Kdecole.login(username, uniquePassword, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, ApiUrl.PROD_MON_BUREAU_NUMERIQUE).then(token => console.log(token)) // Affiche son token dans la console
   * ```
   */
  public static async login (username: string, password: string, apiVersion: ApiVersion | string = ApiVersion.PROD_MON_BUREAU_NUMERIQUE, apiUrl: ApiUrl | string = ApiUrl.PROD_MON_BUREAU_NUMERIQUE): Promise<string> {
    const activation = new Activation(await Kdecole.kdecole(new Kdecole('', apiVersion, 0, apiUrl), {
      service: 'activation',
      parameters: `${username}/${password}`
    }))
    if (activation.authtoken && activation.success) return activation.authtoken
    throw Error('L\'authentification n\'a pas fonctionné')
  }

  /**
   * Révoque le jeton d'accès
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   * const user = new Kdecole(authToken)
   * user.logout()
   * ```
   * @return {Promise<void>}
   */
  public async logout (): Promise<void> {
    if (!new Desactivation(await Kdecole.kdecole(this, { service: 'desactivation' })).success) {
      throw Error('Une erreur est survenue lors de l\'invalidation du jeton d\'accès.')
    }
  }

  /**
   * Ping à l'API.
   * Cet appel est initialement réalisé par l'application mobile pour vérifier si le token et la version de l'app sont valides.
   * Le serveur retourne un code de statut `HTTP 204 No Content` si l'utilisateur est correctement authentifié.
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   * const user = new Kdecole(authToken)
   * try {
   *   user.starting()
   * }
   * catch (e) {
   *   // Une exception est levée si l'utilisateur n'est pas correctement authentifié
   * }
   * ```
   * @return {Promise<void>}
   */
  public async starting (): Promise<void> {
    await Kdecole.kdecole(this, { service: 'starting' })
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
   * user.getReleve(idEleve).then(releve => {
   *  // Votre code
   *  releve.toCSV() // Exporter son relevé des notes dans un objet contenant les devoirs au format CSV
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
   * user.getActualites(idEleve).then(actualites => {
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
   * Un article est publié par l'établissement.
   * @param {string} uid Identifiant unique de l'article
   * @return {Promise<ContenuArticle>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuArticle(uid).then(contenuArticle => {
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuArticle (uid: string): Promise<ContenuArticle> {
    return new ContenuArticle(await Kdecole.kdecole(this, {
      service: 'contenuArticle',
      parameters: `article/${uid}`
    }))
  }

  /**
   * Retourne le contenu d'une information
   * Une information est publiée par la plateforme EMS.
   * @param {string} uid Identifiant unique de l'information
   * @return {Promise<ContenuArticle>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getContenuInformation(uid).then(contenuInformation => {
   *  // Votre code
   *  })
   * ```
   */
  public async getContenuInformation (uid: string): Promise<ContenuArticle> {
    return new ContenuArticle(await Kdecole.kdecole(this, {
      service: 'contenuArticle',
      parameters: `information/${uid}`
    }))
  }

  /**
   * Retourne la liste des devoirs de l'élève
   * @param {string} idEleve Identifiant d'un élève
   * @param notBeforeDate {Date} Un objet Date pour ne sélectionner que les devoirs postérieurs à une date
   * @return {Promise<TravailAFaire>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getTravailAFaire(idEleve).then(taf => {
   *  // Votre code
   *  })
   * ```
   */
  public async getTravailAFaire (idEleve?: string, notBeforeDate?: Date): Promise<TravailAFaire> {
    return new TravailAFaire(await Kdecole.kdecole(this, {
      service: 'travailAFaire',
      parameters: idEleve ? `ideleve/${idEleve}${notBeforeDate ? '/' + notBeforeDate.getTime().toString() : ''}` : `idetablissement/${this.idEtablissement}${notBeforeDate ? '/' + notBeforeDate.getTime().toString() : ''}`
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
   * user.getContenuActivite(uidSeance, uid, idEleve).then(contenuActivite => {
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
   * @return {Promise<void>}
   */
  public async setActiviteFinished (uidSeance: number, uid: number, flagRealise: boolean): Promise<void> {
    await Kdecole.kdecole(this, {
      service: 'contenuActivite',
      parameters: `idetablissement/${this.idEtablissement}/${uidSeance}/${uid}`,
      type: 'put',
      data: {
        flagRealise
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
   * user.getAbsences(idEleve).then(absences => {
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
   * Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établissement, etc.)
   * @param {string} idEleve Identifiant d'un élève
   * @return {Promise<Utilisateur>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getInfoUtilisateur(idEleve).then(infoUtilisateur => {
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
   * user.getCalendrier(idEleve).then(calendrier => {
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
   * user.getNotes(idEleve).then(notes => {
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
   * user.getMessagerieInfo().then(messagerieInfo => {
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieInfo (): Promise<MessageInfo> {
    return new MessageInfo(await Kdecole.kdecole(this, { service: 'messagerie/info' }))
  }

  /**
   * Retourne les mails présents dans la boîte mail
   * Le paramètre `pagination` permet de remonter dans le passé dans la liste des fils de discussions
   * @return {Promise<MessageBoiteReception>}
   * @param {number} pagination Le nombre de fils de discussion à tronquer (système de pagination)
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getMessagerieBoiteReception().then(messagerieBoiteReception => {
   *  // Votre code
   *  })
   * ```
   */
  public async getMessagerieBoiteReception (pagination = 0): Promise<MessageBoiteReception> {
    return new MessageBoiteReception(await Kdecole.kdecole(this, {
      service: 'messagerie/boiteReception',
      parameters: pagination !== 0 ? `${pagination}` : undefined
    }))
  }

  /**
   * Retourne les détails d'un fil de discussion
   * @param {number} id Identifiant d'un fil de discussion
   * @return {Promise<Communication>}
   * @example ```js
   * const { Kdecole } = require('kdecole-api')
   *
   * const user = new Kdecole(AUTH_TOKEN)
   * user.getCommunication(id).then(communication => {
   *  // Votre code
   *  })
   * ```
   */
  public async getCommunication (id: number): Promise<Communication> {
    return new Communication(await Kdecole.kdecole(this, {
      service: 'messagerie/communication',
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
        corpsMessage
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
   * user.gestionAppels().then(gestionAppels => {
   *  // Votre code
   *  })
   * ```
   */
  public async gestionAppels (): Promise<GestionAppels> {
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
  public async validerAppel (appel: {
    idEtab: number,
    idAppel: number,
    listeAbsencesAppel: {
      idEleve: string
      type: string
      dateDebut: number
      dateFin: number
      modifiable: boolean
    }[]
  }): Promise<void> {
    await Kdecole.kdecole(this, {
      service: 'gestionAppels',
      parameters: `idetablissement/${this.idEtablissement}/valider`,
      type: 'put',
      data: appel
    })
  }

  private static async kdecole (ctx: Kdecole, {
    service,
    parameters,
    type = 'get',
    data
  }: KdecoleRequest): Promise<any> {
    if (parameters === undefined &&
      service !== 'desactivation' &&
      service !== 'messagerie/info' &&
      service !== 'messagerie/communication' &&
      service !== 'messagerie/boiteReception' &&
      service !== 'starting' &&
      service !== 'infoutilisateur') parameters = `idetablissement/${ctx.idEtablissement}`
    return (await axios.request({
      baseURL: ctx.apiURL,
      headers: {
        'X-Kdecole-Vers': ctx.apiVersion,
        'X-Kdecole-Auth': ctx.authToken
      },
      validateStatus: (status: number) => (status >= 200 && status < 300) || status === 204, // starting retourne HTTP204 donc axios ne doit pas lever une exception
      responseType: 'json',
      method: type,
      url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
      data
    })).data
  }
}
