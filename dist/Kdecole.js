"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Desactivation_js_1 = require("./entities/Authentication/Desactivation.js");
const Activation_js_1 = require("./entities/Authentication/Activation.js");
const config_1 = require("./config");
const Releve_1 = require("./entities/Note/Releve");
const TravailAFaire_1 = require("./entities/Travail/TravailAFaire");
const Actualite_1 = require("./entities/News/Actualite");
const AbsencesList_1 = require("./entities/VieScolaire/AbsencesList");
const Utilisateur_1 = require("./entities/User/Utilisateur");
const Calendrier_1 = require("./entities/Calendar/Calendrier");
const NotesList_1 = require("./entities/Note/NotesList");
const MessageInfo_1 = require("./entities/Messagerie/MessageInfo");
const MessageBoiteReception_1 = require("./entities/Messagerie/MessageBoiteReception");
const axios_1 = require("axios");
const ContenuActivite_1 = require("./entities/Travail/ContenuActivite");
const ContenuArticle_1 = require("./entities/News/ContenuArticle");
const Communication_1 = require("./entities/Messagerie/Communication");
/**
 * Support non-officiel de l'API Kdecole (Mon Bureau Numérique, Skolengo, etc.)
 * @example ```js
 * const Kdecole = require('kdecole-api')
 *
 * const user = new Kdecole(Kdecole.login(USERNAME, PASSWORD))
 * // ou encore:
 * const user = new Kdecole(AUTH_TOKEN)
 * ```
 */
class Kdecole {
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {string} appVersion La version de l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     */
    constructor(authToken = config_1.SECRET, appVersion = config_1.APP_VERSION, idEtablissement = config_1.IDETABLISSEMENT) {
        this.idEtablissement = 0;
        if (authToken === undefined) {
            throw Error("Un jeton d'accès doit être renseigné");
        }
        this.authToken = authToken;
        this.appVersion = appVersion;
        this.idEtablissement = idEtablissement;
    }
    /**
     * Retourne le jeton d'accès de l'utilisateur
     * @param {string} login Le nom d'utilisateur
     * @param {string} password Le mot de passe à usage unique
     * @return {Promise<string>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const AUTH_TOKEN = Kdecole.login(USERNAME, PASSWORD)
     * ```
     */
    static async login(login, password) {
        const activation = new Activation_js_1.Activation(await this.callAPI(config_1.APP_VERSION, '', {
            service: 'activation',
            parameters: `${login}/${password}`
        }));
        if (activation.authtoken && activation.success) {
            return activation.authtoken;
        }
        else {
            throw Error('Erreur de connexion');
        }
    }
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const Kdecole = require('kdecole-api')
     * const user = new Kdecole(AUTH_TOKEN)
     * user.logout()
     * ```
     * @return {Promise<Desactivation | Error>}
     */
    async logout() {
        const desactivation = new Desactivation_js_1.Desactivation(await this.kdecole({ service: 'desactivation' }));
        if (desactivation.success)
            return desactivation;
        return new Error('Une erreur est survenue dans le traitement des données de déconnexion');
    }
    /**
     * Retourne le relevé des notes de l'élève
     * @example ```js
     * kdecole.getReleve() //Retorune le relevé de l'élève
     * kdecole.getReleve(idEleve) //Retourne le relevé d'un élève précis
     * ```
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<Releve>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getReleve(idEleve).then((releve)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getReleve(idEleve) {
        return new Releve_1.Releve(await this.kdecole({
            service: 'consulterReleves',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne un tableau des actualités de l'établissement de l'utilisateur
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<Actualite[]>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getActualites(idEleve).then((actualites)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getActualites(idEleve) {
        const actualites = [];
        for (const JSONactualite of await this.kdecole({
            service: 'actualites',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        })) {
            actualites.push(new Actualite_1.Actualite(JSONactualite));
        }
        return actualites;
    }
    /**
     * Retourne le contenu d'un article
     * @param {string} uid Identifiant unique de l'article
     * @return {Promise<ContenuArticle>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getContenuArticle(uid).then((contenuArticle)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getContenuArticle(uid) {
        return new ContenuArticle_1.ContenuArticle(await this.kdecole({ service: 'contenuArticle', parameters: `article/${uid}` }));
    }
    /**
     * Retourne la liste des devoirs de l'élève
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<TravailAFaire>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getTravailAFaire(idEleve).then((taf)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getTravailAFaire(idEleve) {
        return new TravailAFaire_1.TravailAFaire(await this.kdecole({
            service: 'travailAFaire',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne les détails d'un devoir à faire
     * @param {number} uidSeance Identifiant de la séance
     * @param {number} uid Identifiant du devoir à faire
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<ContenuActivite>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getContenuActivite(uidSeance, uid, idEleve) {
        return new ContenuActivite_1.ContenuActivite(await this.kdecole({
            service: 'contenuActivite',
            parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}/`
        }));
    }
    /**
     * Retourne la liste des absences d'un élève
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<AbsencesList>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getAbsences(idEleve).then((absences)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getAbsences(idEleve) {
        return new AbsencesList_1.AbsencesList(await this.kdecole({
            service: 'consulterAbsences',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne les informations d'un utilisateur (type de compte, nom complet, numéro de l'établiissement, etc.)
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<Utilisateur>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getInfoUtilisateur(idEleve).then((infoUtilisateur)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getInfoUtilisateur(idEleve) {
        return new Utilisateur_1.Utilisateur(await this.kdecole({
            service: 'infoutilisateur',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne l'emploi du temps de l'élève à J-7 et J+7
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<Calendrier>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getCalendrier(idEleve).then((calendrier)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getCalendrier(idEleve) {
        return new Calendrier_1.Calendrier(await this.kdecole({
            service: 'calendrier',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne la liste des récentes notes de l'élève
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<NotesList>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getNotes(idEleve).then((notes)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getNotes(idEleve) {
        return new NotesList_1.NotesList(await this.kdecole({
            service: 'consulterNotes',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    /**
     * Retourne l'état de la messagerie de l'utilisateur (nombre de mails non lus)
     * @return {Promise<MessageInfo>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getMessagerieInfo().then((messagerieInfo)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getMessagerieInfo() {
        return new MessageInfo_1.MessageInfo(await this.kdecole({ service: 'messagerie/info' }));
    }
    /**
     * Retorune les mails présents dans la boîte mail
     * @return {Promise<MessageBoiteReception>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getMessagerieBoiteReception().then((messagerieBoiteReception)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getMessagerieBoiteReception() {
        return new MessageBoiteReception_1.MessageBoiteReception(await this.kdecole({ service: 'messagerie/boiteReception' }));
    }
    /**
     * Retorune les détails d'un fil de discussion
     * @param {number} id Identifiant d'un fil de discussion
     * @return {Promise<Communication>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getCommunication(id).then((communication)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getCommunication(id) {
        return new Communication_1.Communication(await this.kdecole({
            service: 'messagerie/communication',
            type: 'put',
            parameters: `${id}`
        }));
    }
    /**
     * Permet de signaler une communication
     * @param {number} id Identifiant d'un fil de discussion
     * @return {Promise<void>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.signalerCommunication(id)
     * ```
     */
    async signalerCommunication(id) {
        await this.kdecole({
            service: 'messagerie/communication/signaler',
            type: 'put',
            parameters: `${id}`
        });
    }
    /**
     * Supprime la communication
     * @param {number} id Identifiant d'un fil de discussion
     * @return {Promise<void>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.supprimerCommunication(id)
     * ```
     */
    async supprimerCommunication(id) {
        await this.kdecole({
            service: 'messagerie/communication/supprimer',
            parameters: `${id}`
        });
    }
    /**
     * Retourne la valeur exacte de la moyenne générale de l'élève
     * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<number>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getMoyenneGenerale(trimestre, idEleve).then((moyenneGenerale)=>{
     * console.log(moyenneGenerale) //Affiche la moyenne générale de l'élève dans la console
     *  })
     * ```
     */
    async getMoyenneGenerale(trimestre, idEleve) {
        if (trimestre !== undefined && [1, 2, 3].includes(trimestre))
            throw Error('Le trimestre doit être 1, 2 ou 3');
        const moyennes = await this.getTableauMoyennes(trimestre, idEleve);
        let moyenneGenerale = 0;
        for (const moyenne of moyennes) {
            moyenneGenerale += moyenne / moyennes.length;
        }
        return moyenneGenerale;
    }
    /**
     * Retourne la médiane des moyennes des matières de l'élève
     * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<number>}
     * @example ```js
     * const Kdecole = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getCommunication(trimestre, idEleve).then((medianegenerale)=>{
     * console.log(medianegenerale) //Affiche la médiane des moyennes de l'élève dans la console
     *  })
     * ```
     */
    async getMedianeGenerale(trimestre, idEleve) {
        if (trimestre !== undefined && [1, 2, 3].includes(trimestre))
            throw Error('Le trimestre doit être 1, 2 ou 3');
        let moyennes = await this.getTableauMoyennes(trimestre, idEleve);
        moyennes = moyennes.slice(0).sort(function (x, y) {
            return x - y;
        });
        const b = (moyennes.length + 1) / 2;
        return (moyennes.length % 2) ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2;
    }
    /**
     * Retourne un tableau contenant les moyennes des matières de l'élève
     * @param {number} trimestre Numéro du trimestre (1, 2 ou 3)
     * @param {string} idEleve Identifiant d'un élève
     * @return {Promise<number[]>}
     * @private
     */
    async getTableauMoyennes(trimestre, idEleve) {
        if (trimestre !== undefined && [1, 2, 3].includes(trimestre))
            throw Error('Le trimestre doit être 1, 2 ou 3');
        const releve = await this.getReleve(idEleve);
        let numeroTrimestre = trimestre;
        if (numeroTrimestre === undefined) {
            for (const key in releve.trimestres) {
                if (releve.trimestres[parseInt(key)].periodeEnCours) {
                    numeroTrimestre = parseInt(key) + 1;
                }
            }
        }
        if (numeroTrimestre === undefined)
            throw Error('Aucun trimestre en cours');
        const trimestreObject = releve.trimestres[numeroTrimestre - 1];
        const moyennes = [];
        for (const matiere of trimestreObject.matieres) {
            if (typeof matiere.moyenneEleve === 'number') {
                moyennes.push(matiere.moyenneEleve);
            }
        }
        if (moyennes.length === 0)
            throw Error('Pas de moyennes dans ce trimestre.');
        return moyennes;
    }
    /**
     * Effectue un premier traitement des données reçues en provenance de l'API et en retourne le résultat
     */
    async kdecole({ service, parameters, type = 'get', data }) {
        if (parameters === undefined)
            parameters = `idetablissement/${this.idEtablissement}`;
        return await Kdecole.callAPI(this.appVersion, this.authToken, { service, parameters, type, data });
    }
    /**
     * Envoie les requêtes à l'API
     * Les en-têtes qui doivent être présentes sont:
     *  - X-Kdecole-Vers  Version de l'application mobile
     *  - X-Kdecole-Auth  Jeton d'accès
     */
    static async callAPI(appVersion, authToken, { service, parameters, type = 'get', data }) {
        try {
            return (await axios_1.default.request({
                baseURL: config_1.BASE_URL,
                headers: {
                    'X-Kdecole-Vers': appVersion,
                    'X-Kdecole-Auth': authToken
                },
                responseType: 'json',
                method: type,
                url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
                data: data
            })).data;
        }
        catch (e) {
            throw Error('Une erreur est survenue durant le traitement de la requête');
        }
    }
}
exports.default = Kdecole;
