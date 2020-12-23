import { Desactivation } from './entities/Authentication/Desactivation.js';
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
    service: 'starting' | 'actualites' | 'contenuArticle' | 'activation' | 'consulterReleves' | 'consulterAbsences' | 'infoutilisateur' | 'desactivation' | 'calendrier' | 'consulterNotes' | 'messagerie/info' | 'messagerie/boiteReception' | 'messagerie/communication' | 'messagerie/communication/nouvelleParticipation' | 'messagerie/communication/signaler' | 'messagerie/communication/supprimer' | 'travailAFaire' | 'contenuActivite' | 'gestionAppels';
    parameters?: string;
    type?: 'get' | 'post' | 'delete' | 'put';
    data?: any;
}
/**
 * Support de l'API Kdecole (Mon Bureau Numérique)
 */
export declare class Kdecole {
    private readonly authToken;
    appVersion: string;
    idEtablissement: number;
    constructor(authToken?: string, appVersion?: string, idEtablissement?: number);
    /**
     * Retourne le jeton d'accès de l'utilisateur
     * @param {string} login
     * @param {string} password
     * @return {Promise<string>}
     */
    static login(login: string, password: string): Promise<string>;
    /**
     * Invalide le jeton d'accès
     * @return {Promise<Desactivation | Error>}
     */
    logout(): Promise<Desactivation | Error>;
    /**
     * Retourne le relevé des notes de l'élève
     * @param {string} idEleve
     * @return {Promise<Releve>}
     */
    getReleve(idEleve?: string): Promise<Releve>;
    /**
     * Retourne un tableau des actualités de l'établissement de l'utilisateur
     * @param {string} idEleve
     * @return {Promise<Actualite[]>}
     */
    getActualites(idEleve?: string): Promise<Actualite[]>;
    /**
     * Retourne le contenu d'un article
     * @param {string} uid
     * @return {Promise<ContenuArticle>}
     */
    getContenuArticle(uid: string): Promise<ContenuArticle>;
    /**
     * Retourne la liste des devoirs de l'élève
     * @param {string} idEleve
     * @return {Promise<TravailAFaire>}
     */
    getTravailAFaire(idEleve?: string): Promise<TravailAFaire>;
    /**
     * Retourne les détails d'un devoir à faire
     * @param {number} uidSeance
     * @param {number} uid
     * @param {string} idEleve
     * @return {Promise<ContenuActivite>}
     */
    getContenuActivite(uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite>;
    /**
     * Retourne la liste des absences d'un élève
     * @param {string} idEleve
     * @return {Promise<AbsencesList>}
     */
    getAbsences(idEleve?: string): Promise<AbsencesList>;
    /**
     * Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)
     * @param {string} idEleve
     * @return {Promise<Utilisateur>}
     */
    getInfoUtilisateur(idEleve?: string): Promise<Utilisateur>;
    /**
     * Retourne l'emploi du temps de l'élève à J-7 et J+7
     * @param {string} idEleve
     * @return {Promise<Calendrier>}
     */
    getCalendrier(idEleve?: string): Promise<Calendrier>;
    /**
     * Retourne la liste des récentes notes de l'élève
     * @param {string} idEleve
     * @return {Promise<NotesList>}
     */
    getNotes(idEleve?: string): Promise<NotesList>;
    /**
     * Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)
     * @return {Promise<MessageInfo>}
     */
    getMessagerieInfo(): Promise<MessageInfo>;
    /**
     * Retorune les mails présents dans la boîte mail
     * @return {Promise<MessageBoiteReception>}
     */
    getMessagerieBoiteReception(): Promise<MessageBoiteReception>;
    /**
     * Retorune les détails d'un fil de discussion
     * @param {number} id
     * @return {Promise<Communication>}
     */
    getCommunication(id: number): Promise<Communication>;
    /**
     * Permet de signaler une communication
     * @param {number} id
     * @return {Promise<void>}
     */
    signalerCommunication(id: number): Promise<void>;
    /**
     * Supprime la communication
     * @param {number} id
     * @return {Promise<void>}
     */
    supprimerCommunication(id: number): Promise<void>;
    /**
     * Retourne la valeur exacte de la moyenne générale de l'élève
     * @param {number} trimestre
     * @param {string} idEleve
     * @return {Promise<number>}
     */
    getMoyenneGenerale(trimestre?: number, idEleve?: string): Promise<number>;
    /**
     * Retourne la médiane des moyennes des matières de l'élève
     * @param {number} trimestre
     * @param {string} idEleve
     * @return {Promise<number>}
     */
    getMedianeGenerale(trimestre?: number, idEleve?: string): Promise<number>;
    /**
     * Retourne un tableau contenant les moyennes des matières de l'élève
     * @param {number} trimestre
     * @param {string} idEleve
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
