"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kdecole = exports.APP_VERSION = exports.ApiVersion = exports.ApiUrl = void 0;
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
var ApiUrl;
(function (ApiUrl) {
    ApiUrl["PROD_MON_BUREAU_NUMERIQUE"] = "https://mobilite.monbureaunumerique.fr/mobilite";
    ApiUrl["PREPROD_MON_BUREAU_NUMERIQUE"] = "https://mobilite.preprod.monbureaunumerique.fr/mobilite";
    ApiUrl["PROD_MON_ENT_OCCITANIE"] = "https://mobilite.mon-ent-occitanie.fr/mobilite";
    ApiUrl["PROD_ARSENE76"] = "https://mobilite.arsene76.fr/mobilite";
    ApiUrl["PROD_ENT27"] = "https://mobilite.ent27.fr/mobilite";
    ApiUrl["PROD_ENTCREUSE"] = "https://mobilite.entcreuse.fr/mobilite";
    ApiUrl["PROD_AUVERGNERHONEALPES"] = "https://mobilite.ent.auvergnerhonealpes.fr/mobilite";
    ApiUrl["PROD_SAVOIRSNUMERIQUES62"] = "https://mobilite.savoirsnumeriques62.fr/mobilite";
    ApiUrl["PROD_AGORA06"] = "https://mobilite.agora06.fr/mobilite";
    ApiUrl["PROD_CYBERCOLLEGES42"] = "https://mobilite.cybercolleges42.fr/mobilite";
    ApiUrl["PROD_ECOLLEGE_HAUTE_GARONNE"] = "https://mobilite.ecollege.haute-garonne.fr/mobilite";
    ApiUrl["PROD_MONCOLLEGE_VALDOISE"] = "https://mobilite.moncollege.valdoise.fr/mobilite";
    ApiUrl["PROD_WEBCOLLEGE_SEINESAINTDENIS"] = "https://mobilite.webcollege.seinesaintdenis.fr/mobilite";
    ApiUrl["PROD_ECLAT_BFC"] = "https://mobilite.eclat-bfc.fr/mobilite";
    ApiUrl["PROD_DEMO_SKOLENGO"] = "https://mobilite.demo.skolengo.com/mobilite";
})(ApiUrl = exports.ApiUrl || (exports.ApiUrl = {}));
var ApiVersion;
(function (ApiVersion) {
    ApiVersion["PROD_MON_BUREAU_NUMERIQUE"] = "3.4.14";
    ApiVersion["PROD_MON_ENT_OCCITANIE"] = "3.5.2";
    ApiVersion["PROD_ARSENE76"] = "3.7.11";
    ApiVersion["PROD_ENT27"] = "3.5.6";
    ApiVersion["PROD_ENTCREUSE"] = "3.5.6";
    ApiVersion["PROD_AUVERGNERHONEALPES"] = "3.7.11";
    ApiVersion["PROD_SAVOIRSNUMERIQUES62"] = "3.5.4";
    ApiVersion["PROD_AGORA06"] = "3.7.14";
    ApiVersion["PROD_CYBERCOLLEGES42"] = "3.5.6";
    ApiVersion["PROD_ECOLLEGE_HAUTE_GARONNE"] = "3.1.15";
    ApiVersion["PROD_MONCOLLEGE_VALDOISE"] = "3.4.11";
    ApiVersion["PROD_WEBCOLLEGE_SEINESAINTDENIS"] = "3.7.14";
    ApiVersion["PROD_ECLAT_BFC"] = "3.5.3";
})(ApiVersion = exports.ApiVersion || (exports.ApiVersion = {}));
exports.APP_VERSION = ApiVersion.PROD_MON_BUREAU_NUMERIQUE;
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
class Kdecole {
    authToken;
    appVersion;
    idEtablissement;
    apiURL;
    /**
     * @param {string} authToken Le jeton d'accès
     * @param {ApiVersion|string} appVersion La version de l'application mobile autorisée par l'API
     * @param {number} idEtablissement L'identifiant de l'établissement
     * @param {ApiUrl|string} apiURL L'URL de l'API Kdecole
     */
    constructor(authToken, appVersion = ApiVersion.PROD_MON_BUREAU_NUMERIQUE, idEtablissement = 0, apiURL = ApiUrl.PROD_MON_BUREAU_NUMERIQUE) {
        this.authToken = authToken;
        this.appVersion = appVersion;
        this.idEtablissement = idEtablissement;
        this.apiURL = apiURL;
        if (authToken === undefined)
            throw Error('Un jeton d\'accès doit être renseigné');
    }
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
    static async login(username, password, appVersion = ApiVersion.PROD_MON_BUREAU_NUMERIQUE, apiUrl = ApiUrl.PROD_MON_BUREAU_NUMERIQUE) {
        const activation = new Activation_1.default(await Kdecole.kdecole(new Kdecole('', appVersion, 0, apiUrl), {
            service: 'activation',
            parameters: `${username}/${password}`
        }));
        if (activation.authtoken && activation.success)
            return activation.authtoken;
        throw Error('L\'authentification n\'a pas fonctionné');
    }
    /**
     * Invalide le jeton d'accès
     * @example ```js
     * const { Kdecole } = require('kdecole-api')
     * const user = new Kdecole(authToken)
     * user.logout()
     * ```
     * @return {Promise<void>}
     */
    async logout() {
        if (!new Desactivation_1.default(await Kdecole.kdecole(this, { service: 'desactivation' })).success) {
            throw Error('Une erreur est survenue lors de l\'invalidation du jeton d\'accès.');
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
    async starting() {
        await Kdecole.kdecole(this, { service: 'starting' });
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.getContenuArticle(uid).then((contenuArticle)=>{
     *  // Votre code
     *  })
     * ```
     */
    async getContenuArticle(uid) {
        return new ContenuArticle_1.default(await Kdecole.kdecole(this, {
            service: 'contenuArticle',
            parameters: `article/${uid}`
        }));
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
     *
     * const user = new Kdecole(AUTH_TOKEN)
     * user.setActiviteFinished(uidSeance, uid, flagRealise)
     * ```
     * @return {Promise<void>}
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
    async getMessagerieBoiteReception(pagination = 0) {
        return new MessageBoiteReception_1.default(await Kdecole.kdecole(this, {
            service: 'messagerie/boiteReception',
            parameters: pagination !== 0 ? `${pagination}` : undefined
        }));
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
    async getCommunication(id) {
        return new Communication_1.default(await Kdecole.kdecole(this, {
            service: 'messagerie/communication',
            parameters: `${id}`
        }));
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
     * const { Kdecole } = require('kdecole-api')
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
    async validerAppel(appel) {
        await Kdecole.kdecole(this, {
            service: 'gestionAppels',
            parameters: `idetablissement/${this.idEtablissement}/valider`,
            type: 'put',
            data: appel
        });
    }
    static async kdecole(ctx, { service, parameters, type = 'get', data }) {
        if (parameters === undefined &&
            service !== 'desactivation' &&
            service !== 'messagerie/info' &&
            service !== 'messagerie/communication' &&
            service !== 'messagerie/boiteReception' &&
            service !== 'starting' &&
            service !== 'infoutilisateur')
            parameters = `idetablissement/${ctx.idEtablissement}`;
        return (await axios_1.default.request({
            baseURL: ctx.apiURL,
            headers: {
                'X-Kdecole-Vers': ctx.appVersion,
                'X-Kdecole-Auth': ctx.authToken
            },
            validateStatus: (status) => (status >= 200 && status < 300) || status === 204,
            responseType: 'json',
            method: type,
            url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
            data: data
        })).data;
    }
}
exports.Kdecole = Kdecole;
