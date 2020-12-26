import { Desactivation } from './entities/Authentication/Desactivation';
import { Releve } from './entities/Note/Releve';
import { TravailAFaire } from './entities/Travail/TravailAFaire';
import { Actualite } from './entities/News/Actualite';
import { AbsencesList } from './entities/VieScolaire/AbsencesList';
import { Utilisateur } from './entities/User/Utilisateur';
import { Calendrier } from './entities/Calendar/Calendrier';
import { NotesList } from './entities/Note/NotesList';
import { MessageInfo } from './entities/Messagerie/MessageInfo';
import { MessageBoiteReception } from './entities/Messagerie/MessageBoiteReception';
import { ContenuActivite } from './entities/Travail/ContenuActivite';
import { ContenuArticle } from './entities/News/ContenuArticle';
import { Communication } from './entities/Messagerie/Communication';
interface KdecoleRequest {
    service: 'starting' | 'actualites' | 'contenuArticle' | 'activation' | 'consulterReleves' | 'consulterAbsences' | 'infoutilisateur' | 'desactivation' | 'calendrier' | 'consulterNotes' | 'messagerie/info' | 'messagerie/boiteReception' | 'messagerie/communication' | 'messagerie/communication/nouvelleParticipation' | 'messagerie/communication/signaler' | 'messagerie/communication/supprimer' | 'messagerie/communication/lu' | 'travailAFaire' | 'contenuActivite' | 'gestionAppels';
    parameters?: string;
    type?: 'get' | 'post' | 'delete' | 'put';
    data?: any;
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
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {string} appVersion La version de l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     */
    constructor(authToken?: string, appVersion?: string, idEtablissement?: number);
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
    static login(login: string, password: string): Promise<string>;
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const Kdecole = require('kdecole-api').default
     * const user = new Kdecole(AUTH_TOKEN)
     * user.logout()
     * ```
     * @return {Promise<Desactivation | Error>}
     */
    logout(): Promise<Desactivation | Error>;
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
    getMoyenneGenerale(trimestre?: number, idEleve?: string): Promise<number>;
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
    getMedianeGenerale(trimestre?: number, idEleve?: string): Promise<number>;
    /**
     * Retourne un tableau contenant les moyennes des matières de l'élève
     * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<number[]>}
     * @private
     */
    private getTableauMoyennes;
    /**
     * Effectue un premier traitement des données reçues en provenance de l'API et en retourne le résultat
     */
    private kdecole;
    /**
     * Envoie les requêtes à l'API
     * Les en-têtes qui doivent être présentes sont:
     *  - X-Kdecole-Vers  Version de l'application mobile
     *  - X-Kdecole-Auth  Jeton d'accès
     */
    static callAPI(appVersion: string, authToken: string, { service, parameters, type, data }: KdecoleRequest): Promise<any>;
}
export {};
