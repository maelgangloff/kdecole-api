"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kdecole = void 0;
const Desactivation_js_1 = require("./entities/Authentication/Desactivation.js");
const Activation_js_1 = require("./entities/Authentication/Activation.js");
const config_1 = require("./config");
const Releve_1 = require("./entities/Note/Releve");
const Endpoint_1 = require("./entities/Endpoint");
const TravailAFaire_1 = require("./entities/Travail/TravailAFaire");
const Actualite_1 = require("./entities/News/Actualite");
const AbsencesList_1 = require("./entities/VieScolaire/AbsencesList");
const Utilisateur_1 = require("./entities/User/Utilisateur");
const Calendrier_1 = require("./entities/Calendar/Calendrier");
const NotesList_1 = require("./entities/Note/NotesList");
const MessageInfo_1 = require("./entities/Messagerie/MessageInfo");
const MessageBoiteReception_1 = require("./entities/Messagerie/MessageBoiteReception");
class Kdecole {
    constructor(authToken = config_1.SECRET ?? null, appVersion = config_1.APP_VERSION ?? undefined, idEtablissement = config_1.IDETABLISSEMENT ?? 0) {
        if (authToken === null) {
            throw Error("Un jeton d'accès doit être renseigné");
        }
        Kdecole.authToken = authToken;
        if (appVersion)
            Kdecole.appVersion = appVersion;
        Kdecole.idEtablissement = idEtablissement;
    }
    static async login(login, password) {
        const activation = await Activation_js_1.Activation.activation({
            login: login,
            password: password
        });
        if (activation.authtoken && activation.success) {
            return activation.authtoken;
        }
        else {
            throw Error('Erreur de connexion');
        }
    }
    logout() {
        return Desactivation_js_1.Desactivation.desactivation();
    }
    async getReleve(idEleve) {
        return new Releve_1.Releve(await Endpoint_1.Endpoint.kdecole({
            service: 'consulterReleves',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getActualites(idEleve) {
        const actualites = [];
        for (const JSONactualite of await Endpoint_1.Endpoint.kdecole({
            service: 'actualites',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        })) {
            actualites.push(new Actualite_1.Actualite(JSONactualite));
        }
        return actualites;
    }
    async getTravailAFaire(idEleve) {
        return new TravailAFaire_1.TravailAFaire(await Endpoint_1.Endpoint.kdecole({
            service: 'travailAFaire',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getAbsences(idEleve) {
        return new AbsencesList_1.AbsencesList(await Endpoint_1.Endpoint.kdecole({
            service: 'consulterAbsences',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getInfoUtilisateur(idEleve) {
        return new Utilisateur_1.Utilisateur(await Endpoint_1.Endpoint.kdecole({
            service: 'infoutilisateur',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getCalendrier(idEleve) {
        return new Calendrier_1.Calendrier(await Endpoint_1.Endpoint.kdecole({
            service: 'calendrier',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getNotes(idEleve) {
        return new NotesList_1.NotesList(await Endpoint_1.Endpoint.kdecole({
            service: 'consulterNotes',
            parameters: idEleve ? `ideleve/${idEleve}` : undefined
        }));
    }
    async getMessagerieInfo() {
        return new MessageInfo_1.MessageInfo(await Endpoint_1.Endpoint.kdecole({ service: 'messagerie/info' }));
    }
    async getMessagerieBoiteReception() {
        return new MessageBoiteReception_1.MessageBoiteReception(await Endpoint_1.Endpoint.kdecole({ service: 'messagerie/boiteReception' }));
    }
}
exports.Kdecole = Kdecole;
Kdecole.appVersion = '3.4.14';
Kdecole.idEtablissement = 0;
