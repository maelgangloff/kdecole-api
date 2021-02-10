import Desactivation from './entities/Authentication/Desactivation';
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
export declare const APP_VERSION = "3.4.14";
export declare const BASE_URL = "https://mobilite.monbureaunumerique.fr/mobilite";
export declare enum ApiUrl {
    PROD_MON_BUREAU_NUMERIQUE = "https://mobilite.monbureaunumerique.fr/mobilite",
    PREPROD_MON_BUREAU_NUMERIQUE = "https://mobilite.preprod.monbureaunumerique.fr/mobilite",
    PROD_MON_ENT_OCCITANIE = "https://mobilite.mon-ent-occitanie.fr/mobilite",
    PROD_ARSENE76 = "https://mobilite.arsene76.fr/mobilite",
    PROD_ENT27 = "https://mobilite.ent27.fr/mobilite",
    PROD_ENDCREUSE = "https://mobilite.entcreuse.fr/mobilite",
    PROD_AUVERGNERHONEALPES = "https://mobilite.ent.auvergnerhonealpes.fr/mobilite",
    PROD_SAVOIRSNUMERIQUES62 = "https://mobilite.savoirsnumeriques62.fr/mobilite"
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
    private readonly authToken;
    appVersion: string;
    idEtablissement: number;
    apiURL: string;
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {string} appVersion La version de l'application mobile autorisée par l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
     */
    constructor(authToken: string, appVersion?: string, idEtablissement?: number, apiURL?: ApiUrl | string);
    /**
     * Retourne le jeton d'accès de l'utilisateur
     * @param {string} username Le nom d'utilisateur
     * @param {string} password Le mot de passe à usage unique
     * @param {string} appVersion La version de l'application mobile autorisée par l'API
     * @param {apiURL} apiUrl L'URL de l'API Kdecole
     * @return {Promise<string>}
     * @example ```js
     * const Kdecole = require('kdecole-api').default
     *
     * const authToken = Kdecole.login(username, password)
     * console.log(authToken) //Afficher son token d'authentification
     * ```
     */
    static login(username: string, password: string, appVersion?: string, apiUrl?: ApiUrl): Promise<string>;
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const Kdecole = require('kdecole-api').default
     * const user = new Kdecole(authToken)
     * user.logout()
     * ```
     * @return {Promise<Desactivation>}
     */
    logout(): Promise<Desactivation>;
    /**
     * Retourne le relevé de notes de l'élève
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
    getReleve(idEleve?: string): Promise<Releve>;
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
    getActualites(idEleve?: string): Promise<Actualite[]>;
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
    getContenuArticle(uid: string): Promise<ContenuArticle>;
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
    getTravailAFaire(idEleve?: string): Promise<TravailAFaire>;
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
    getContenuActivite(uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite>;
    /**
     * Permet de marquer un devoir comme étant fait
     * @param uidSeance {number} Identifiant de la séance
     * @param uid {number} Identifiant du devoir
     * @param flagRealise {boolean} Statut du devoir
     * @example ```js
     * const Kdecole = require('kdecole-api').default
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.setActiviteFinished(uidSeance, uid, flagRealise)
     * ```
     */
    setActiviteFinished(uidSeance: number, uid: number, flagRealise: boolean): Promise<void>;
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
    getAbsences(idEleve?: string): Promise<AbsencesList>;
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
    getInfoUtilisateur(idEleve?: string): Promise<Utilisateur>;
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
    getCalendrier(idEleve?: string): Promise<Calendrier>;
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
    getNotes(idEleve?: string): Promise<NotesList>;
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
    getMessagerieInfo(): Promise<MessageInfo>;
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
    getMessagerieBoiteReception(): Promise<MessageBoiteReception>;
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
    getCommunication(id: number): Promise<Communication>;
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
    reportCommunication(id: number): Promise<void>;
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
    deleteCommunication(id: number): Promise<void>;
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
    setCommunicationLu(id: number): Promise<void>;
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
    sendMessage(id: number, corpsMessage: string): Promise<void>;
    /**
     * Retourne les feuilles d'appel.
     * @return {Promise<GestionAppels>} Les feuilles d'appel.
     * @example ```js
     * const Kdecole = require('kdecole-api').default
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
     * const Kdecole = require('kdecole-api').default
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
