"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kdecole = void 0;
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
class Kdecole {
    constructor(authToken = config_1.SECRET, appVersion = config_1.APP_VERSION, idEtablissement = config_1.IDETABLISSEMENT) {
        this.idEtablissement = 0;
        if (authToken === undefined) {
            throw Error("Un jeton d'accès doit être renseigné");
        }
        this.authToken = authToken;
        this.appVersion = appVersion;
        this.idEtablissement = idEtablissement;
    }
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
    async logout() {
        const desactivation = new Desactivation_js_1.Desactivation(await this.kdecole({ service: 'desactivation' }));
        if (desactivation.success)
            return desactivation;
        return new Error('Une erreur est survenue dans le traitement des données de déconnexion');
    }
    async getReleve(idEleve) {
        return new Releve_1.Releve(await this.kdecole({
            service: 'consulterReleves',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
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
    async getContenuArticle(uid) {
        return new ContenuArticle_1.ContenuArticle(await this.kdecole({ service: 'contenuArticle', parameters: `article/${uid}` }));
    }
    async getTravailAFaire(idEleve) {
        return new TravailAFaire_1.TravailAFaire(await this.kdecole({
            service: 'travailAFaire',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getContenuActivite(uidSeance, uid, idEleve) {
        return new ContenuActivite_1.ContenuActivite(await this.kdecole({
            service: 'contenuActivite',
            parameters: `${idEleve ? 'ideleve/' + idEleve : 'idetablissement/' + this.idEtablissement}/${uidSeance}/${uid}/`
        }));
    }
    async getAbsences(idEleve) {
        return new AbsencesList_1.AbsencesList(await this.kdecole({
            service: 'consulterAbsences',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getInfoUtilisateur(idEleve) {
        return new Utilisateur_1.Utilisateur(await this.kdecole({
            service: 'infoutilisateur',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getCalendrier(idEleve) {
        return new Calendrier_1.Calendrier(await this.kdecole({
            service: 'calendrier',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getNotes(idEleve) {
        return new NotesList_1.NotesList(await this.kdecole({
            service: 'consulterNotes',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getMessagerieInfo() {
        return new MessageInfo_1.MessageInfo(await this.kdecole({ service: 'messagerie/info' }));
    }
    async getMessagerieBoiteReception() {
        return new MessageBoiteReception_1.MessageBoiteReception(await this.kdecole({ service: 'messagerie/boiteReception' }));
    }
    async getCommunication(id) {
        return new Communication_1.Communication(await this.kdecole({
            service: 'messagerie/communication',
            type: 'put',
            parameters: `${id}`
        }));
    }
    async signalerCommunication(id) {
        await this.kdecole({
            service: 'messagerie/communication/signaler',
            type: 'put',
            parameters: `${id}`
        });
    }
    async supprimerCommunication(id) {
        await this.kdecole({
            service: 'messagerie/communication/supprimer',
            parameters: `${id}`
        });
    }
    async getMoyenneGenerale(trimestre, idEleve) {
        const moyennes = await this.getTableauMoyennes(trimestre, idEleve);
        let moyenneGenerale = 0;
        for (const moyenne of moyennes) {
            moyenneGenerale += moyenne / moyennes.length;
        }
        return moyenneGenerale;
    }
    async getMedianeGenerale(trimestre, idEleve) {
        let moyennes = await this.getTableauMoyennes(trimestre, idEleve);
        moyennes = moyennes.slice(0).sort(function (x, y) {
            return x - y;
        });
        const b = (moyennes.length + 1) / 2;
        return (moyennes.length % 2) ? moyennes[b - 1] : (moyennes[b - 1.5] + moyennes[b - 0.5]) / 2;
    }
    async getTableauMoyennes(trimestre, idEleve) {
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
    async kdecole({ service, parameters, type = 'get', data }) {
        if (parameters === undefined)
            parameters = `idetablissement/${this.idEtablissement}`;
        return await Kdecole.callAPI(this.appVersion, this.authToken, { service, parameters, type, data });
    }
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
exports.Kdecole = Kdecole;
