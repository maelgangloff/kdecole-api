import Releve from './entities/Note/Releve';
import TravailAFaire from './entities/Travail/TravailAFaire';
import Actualite from './entities/News/Actualite';
import AbsencesList from './entities/VieScolaire/AbsencesList';
import Utilisateur from './entities/User/Utilisateur';
import Calendrier from './entities/Calendar/Calendrier';
import NotesList from './entities/Note/NotesList';
import MessageInfo from './entities/Messagerie/MessageInfo';
import MessageBoiteReception from './entities/Messagerie/MessageBoiteReception';
import ContenuActivite from './entities/Travail/ContenuActivite';
import ContenuArticle from './entities/News/ContenuArticle';
import Communication from './entities/Messagerie/Communication';
import GestionAppels from './entities/Prof/GestionAppels';
export declare enum ApiUrl {
    PROD_MON_BUREAU_NUMERIQUE = "https://mobilite.monbureaunumerique.fr/mobilite",
    PREPROD_MON_BUREAU_NUMERIQUE = "https://mobilite.preprod.monbureaunumerique.fr/mobilite",
    PROD_MON_ENT_OCCITANIE = "https://mobilite.mon-ent-occitanie.fr/mobilite",
    PROD_ARSENE76 = "https://mobilite.arsene76.fr/mobilite",
    PROD_ENT27 = "https://mobilite.ent27.fr/mobilite",
    PROD_ENTCREUSE = "https://mobilite.entcreuse.fr/mobilite",
    PROD_AUVERGNERHONEALPES = "https://mobilite.ent.auvergnerhonealpes.fr/mobilite",
    PROD_SAVOIRSNUMERIQUES62 = "https://mobilite.savoirsnumeriques62.fr/mobilite",
    PROD_AGORA06 = "https://mobilite.agora06.fr/mobilite",
    PROD_CYBERCOLLEGES42 = "https://mobilite.cybercolleges42.fr/mobilite",
    PROD_ECOLLEGE_HAUTE_GARONNE = "https://mobilite.ecollege.haute-garonne.fr/mobilite",
    PROD_MONCOLLEGE_VALDOISE = "https://mobilite.moncollege.valdoise.fr/mobilite",
    PROD_WEBCOLLEGE_SEINESAINTDENIS = "https://mobilite.webcollege.seinesaintdenis.fr/mobilite",
    PROD_ECLAT_BFC = "https://mobilite.eclat-bfc.fr/mobilite",
    PROD_DEMO_SKOLENGO = "https://mobilite.demo.skolengo.com/mobilite"
}
export declare enum ApiVersion {
    PROD_MON_BUREAU_NUMERIQUE = "3.4.14",
    PROD_MON_ENT_OCCITANIE = "3.5.2",
    PROD_ARSENE76 = "3.7.11",
    PROD_ENT27 = "3.5.6",
    PROD_ENTCREUSE = "3.5.6",
    PROD_AUVERGNERHONEALPES = "3.7.11",
    PROD_SAVOIRSNUMERIQUES62 = "3.5.4",
    PROD_AGORA06 = "3.7.14",
    PROD_CYBERCOLLEGES42 = "3.5.6",
    PROD_ECOLLEGE_HAUTE_GARONNE = "3.1.15",
    PROD_MONCOLLEGE_VALDOISE = "3.4.11",
    PROD_WEBCOLLEGE_SEINESAINTDENIS = "3.7.14",
    PROD_ECLAT_BFC = "3.5.3"
}
export declare const APP_VERSION = ApiVersion.PROD_MON_BUREAU_NUMERIQUE;
/**
 * Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)
 *
 * L'accès à l'API requiert une en-tête (header) avec la version de l'application en cours d'utilisation.
 *
 * Les versions à utiliser lors de la création de l'instance `Kdecole` sont données ci-dessous.
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
 *
 * Une autre méthode pour obtenir un token est d'utiliser la commande
 *
 *```shell
 * npx kdecole -u USERNAME -p CODE -ent PROD_MON_BUREAU_NUMERIQUE
 * ```
 * @example ```js
 * const { Kdecole } = require('kdecole-api')
 *
 * const user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))
 * // ou encore:
 * const user = new Kdecole(AUTH_TOKEN)
 * ```
 */
export declare class Kdecole {
    private readonly authToken;
    appVersion: ApiVersion | string;
    idEtablissement: number;
    apiURL: ApiUrl | string;
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {ApiVersion|string} appVersion La version de l'application mobile autorisée par l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
     */
    constructor(authToken: string, appVersion?: ApiVersion | string, idEtablissement?: number, apiURL?: ApiUrl | string);
    /**
     * Retourne le jeton d'accès de l'utilisateur
     * @param {string} username Le nom d'utilisateur
     * @param {string} password Le mot de passe à usage unique
     * @param {ApiVersion|string} appVersion La version de l'application mobile autorisée par l'API
     * @param {apiURL|string} apiUrl L'URL de l'API Kdecole
     * @return {Promise<string>}
     * @example ```js
     * const { Kdecole } = require('kdecole-api')
     * Kdecole.login(username, uniquePassword).then(token => console.log(token)) // Affiche son token dans la console
     * ```
     */
    static login(username: string, password: string, appVersion?: ApiVersion | string, apiUrl?: ApiUrl | string): Promise<string>;
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const { Kdecole } = require('kdecole-api')
     * const user = new Kdecole(authToken)
     * user.logout()
     * ```
     * @return {Promise<void>}
     */
    logout(): Promise<void>;
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
    starting(): Promise<void>;
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
    getReleve(idEleve?: string): Promise<Releve>;
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
    getActualites(idEleve?: string): Promise<Actualite[]>;
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
    getContenuArticle(uid: string): Promise<ContenuArticle>;
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
    getTravailAFaire(idEleve?: string): Promise<TravailAFaire>;
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
    getContenuActivite(uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite>;
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
    setActiviteFinished(uidSeance: number, uid: number, flagRealise: boolean): Promise<void>;
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
    getAbsences(idEleve?: string): Promise<AbsencesList>;
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
    getInfoUtilisateur(idEleve?: string): Promise<Utilisateur>;
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
    getCalendrier(idEleve?: string): Promise<Calendrier>;
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
    getNotes(idEleve?: string): Promise<NotesList>;
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
    getMessagerieInfo(): Promise<MessageInfo>;
    /**
     * Retourne les mails présents dans la boîte mail
     * Le paramètre `pagination` permet de remonter dans le passé dans la liste des fils de discussions
     * @return {Promise<MessageBoiteReception>}
     * @param {number} pagination Le nombre de fils de discussion à tronquer (système de pagination)
     * @example ```js
     * const { Kdecole } = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{
     *  // Votre code
     *  })
     * ```
     */
    getMessagerieBoiteReception(pagination?: number): Promise<MessageBoiteReception>;
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
    getCommunication(id: number): Promise<Communication>;
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
    reportCommunication(id: number): Promise<void>;
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
    deleteCommunication(id: number): Promise<void>;
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
    setCommunicationLu(id: number): Promise<void>;
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
    sendMessage(id: number, corpsMessage: string): Promise<void>;
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
    gestionAppels(): Promise<GestionAppels>;
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
    validerAppel(appel: {
        idEtab: number;
        idAppel: number;
        listeAbsencesAppel: {
            idEleve: string;
            type: string;
            dateDebut: number;
            dateFin: number;
            modifiable: boolean;
        }[];
    }): Promise<void>;
    private static kdecole;
}
