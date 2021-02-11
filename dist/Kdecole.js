"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUrl = exports.BASE_URL = exports.APP_VERSION = void 0;
const axios_1 = __importDefault(require("axios"));
const Desactivation_1 = __importDefault(require("./entities/Authentication/Desactivation"));
const Activation_1 = __importDefault(require("./entities/Authentication/Activation"));
const Releve_1 = __importDefault(require("./entities/Note/Releve"));
const TravailAFaire_1 = __importDefault(require("./entities/Travail/TravailAFaire"));
const Actualite_1 = __importDefault(require("./entities/News/Actualite"));
const AbsencesList_1 = __importDefault(require("./entities/VieScolaire/AbsencesList"));
const Utilisateur_1 = __importDefault(require("./entities/User/Utilisateur"));
const Calendrier_1 = __importDefault(require("./entities/Calendar/Calendrier"));
const NotesList_1 = __importDefault(require("./entities/Note/NotesList"));
const MessageInfo_1 = __importDefault(require("./entities/Messagerie/MessageInfo"));
const MessageBoiteReception_1 = __importDefault(require("./entities/Messagerie/MessageBoiteReception"));
const ContenuActivite_1 = __importDefault(require("./entities/Travail/ContenuActivite"));
const ContenuArticle_1 = __importDefault(require("./entities/News/ContenuArticle"));
const Communication_1 = __importDefault(require("./entities/Messagerie/Communication"));
const GestionAppels_1 = __importDefault(require("./entities/Prof/GestionAppels"));
exports.APP_VERSION = '3.4.14';
exports.BASE_URL = 'https://mobilite.monbureaunumerique.fr/mobilite';
var ApiUrl;
(function (ApiUrl) {
    ApiUrl["PROD_MON_BUREAU_NUMERIQUE"] = "https://mobilite.monbureaunumerique.fr/mobilite";
    ApiUrl["PREPROD_MON_BUREAU_NUMERIQUE"] = "https://mobilite.preprod.monbureaunumerique.fr/mobilite";
    ApiUrl["PROD_MON_ENT_OCCITANIE"] = "https://mobilite.mon-ent-occitanie.fr/mobilite";
    ApiUrl["PROD_ARSENE76"] = "https://mobilite.arsene76.fr/mobilite";
    ApiUrl["PROD_ENT27"] = "https://mobilite.ent27.fr/mobilite";
    ApiUrl["PROD_ENDCREUSE"] = "https://mobilite.entcreuse.fr/mobilite";
    ApiUrl["PROD_AUVERGNERHONEALPES"] = "https://mobilite.ent.auvergnerhonealpes.fr/mobilite";
    ApiUrl["PROD_SAVOIRSNUMERIQUES62"] = "https://mobilite.savoirsnumeriques62.fr/mobilite";
})(ApiUrl = exports.ApiUrl || (exports.ApiUrl = {}));
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
class Kdecole {
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {string} appVersion La version de l'application mobile autorisée par l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
     */
    constructor(authToken, appVersion = exports.APP_VERSION, idEtablissement = 0, apiURL = ApiUrl.PROD_MON_BUREAU_NUMERIQUE) {
        if (authToken === undefined) {
            throw Error("Un jeton d'accès doit être renseigné");
        }
        this.authToken = authToken;
        this.appVersion = appVersion;
        this.idEtablissement = idEtablissement;
        this.apiURL = apiURL;
    }
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
    static async login(username, password, appVersion = exports.APP_VERSION, apiUrl = ApiUrl.PROD_MON_BUREAU_NUMERIQUE) {
        const activation = new Activation_1.default(await Kdecole.kdecole(new Kdecole('', appVersion, 0, apiUrl), {
            service: 'activation',
            parameters: `${username}/${password}`
        }));
        if (activation.authtoken && activation.success) {
            return activation.authtoken;
        }
        else {
            throw Error("L'authentification n'a pas fonctionné");
        }
    }
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const Kdecole = require('kdecole-api').default
     * const user = new Kdecole(authToken)
     * user.logout()
     * ```
     * @return {Promise<Desactivation>}
     */
    async logout() {
        const desactivation = new Desactivation_1.default(await Kdecole.kdecole(this, { service: 'desactivation' }));
        if (desactivation.success)
            return desactivation;
        throw Error('Une erreur est survenue dans le traitement des données de déconnexion');
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
     * const Kdecole = require('kdecole-api').default
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getReleve(idEleve).then((releve)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getReleve(idEleve) {
        return new Releve_1.default(await Kdecole.kdecole(this, {
            service: 'consulterReleves',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
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
    async getActualites(idEleve) {
        const actualites = [];
        for (const JSONactualite of await Kdecole.kdecole(this, {
            service: 'actualites',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        })) {
            actualites.push(new Actualite_1.default(JSONactualite));
        }
        return actualites;
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
    async getContenuArticle(uid) {
        return new ContenuArticle_1.default(await Kdecole.kdecole(this, { service: 'contenuArticle', parameters: `article/${uid}` }));
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
    async getTravailAFaire(idEleve) {
        return new TravailAFaire_1.default(await Kdecole.kdecole(this, {
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
     * const Kdecole = require('kdecole-api').default
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getContenuActivite(uidSeance, uid, idEleve).then((contenuActivite)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getContenuActivite(uidSeance, uid, idEleve) {
        return new ContenuActivite_1.default(await Kdecole.kdecole(this, {
            service: 'contenuActivite',
            parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}`
        }));
    }
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
    async setActiviteFinished(uidSeance, uid, flagRealise) {
        await Kdecole.kdecole(this, {
            service: 'contenuActivite',
            parameters: `idetablissement/${this.idEtablissement}/${uidSeance}/${uid}`,
            type: 'put',
            data: {
                flagRealise: flagRealise
            }
        });
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
    async getAbsences(idEleve) {
        return new AbsencesList_1.default(await Kdecole.kdecole(this, {
            service: 'consulterAbsences',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
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
    async getInfoUtilisateur(idEleve) {
        return new Utilisateur_1.default(await Kdecole.kdecole(this, {
            service: 'infoutilisateur',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
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
    async getCalendrier(idEleve) {
        return new Calendrier_1.default(await Kdecole.kdecole(this, {
            service: 'calendrier',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
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
    async getNotes(idEleve) {
        return new NotesList_1.default(await Kdecole.kdecole(this, {
            service: 'consulterNotes',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
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
    async getMessagerieInfo() {
        return new MessageInfo_1.default(await Kdecole.kdecole(this, { service: 'messagerie/info' }));
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
    async getMessagerieBoiteReception() {
        return new MessageBoiteReception_1.default(await Kdecole.kdecole(this, { service: 'messagerie/boiteReception' }));
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
    async getCommunication(id) {
        return new Communication_1.default(await Kdecole.kdecole(this, {
            service: 'messagerie/communication',
            type: 'get',
            parameters: `${id}`
        }));
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
    async reportCommunication(id) {
        await Kdecole.kdecole(this, {
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
     * const Kdecole = require('kdecole-api').default
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.deleteCommunication(id)
     * ```
     */
    async deleteCommunication(id) {
        await Kdecole.kdecole(this, {
            service: 'messagerie/communication/supprimer',
            parameters: `${id}`,
            type: 'delete'
        });
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
    async setCommunicationLu(id) {
        await Kdecole.kdecole(this, {
            service: 'messagerie/communication/lu',
            parameters: `${id}`,
            type: 'put',
            data: {
                action: 'lu'
            }
        });
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
    async sendMessage(id, corpsMessage) {
        await Kdecole.kdecole(this, {
            service: 'messagerie/communication/nouvelleParticipation',
            parameters: `${id}`,
            type: 'put',
            data: {
                dateEnvoi: (new Date()).getTime(),
                corpsMessage: corpsMessage
            }
        });
    }
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
    async gestionAppels() {
        return new GestionAppels_1.default(await Kdecole.kdecole(this, { service: 'gestionAppels' }));
    }
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
    async validerAppel(appel) {
        await Kdecole.kdecole(this, {
            service: 'gestionAppels',
            parameters: `idetablissement/${this.idEtablissement}/valider`,
            type: 'put',
            data: appel
        });
    }
    static async kdecole(ctx, { service, parameters, type = 'get', data }) {
        if (parameters === undefined && service !== 'desactivation' && service !== 'messagerie/info' && service !== 'messagerie/communication' && service !== 'messagerie/boiteReception' && service !== 'infoutilisateur')
            parameters = `idetablissement/${ctx.idEtablissement}`;
        return (await axios_1.default.request({
            baseURL: ctx.apiURL,
            headers: {
                'X-Kdecole-Vers': ctx.appVersion,
                'X-Kdecole-Auth': ctx.authToken
            },
            responseType: 'json',
            method: type,
            url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
            data: data
        })).data;
    }
}
exports.default = Kdecole;
