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
    static async login(config) {
        return Activation_js_1.Activation.activation({
            login: config?.login ?? config_1.LOGIN ?? '',
            password: config?.password ?? config_1.PASSWORD ?? ''
        }).then(activation => {
            if (activation.authtoken && activation.success) {
                return new Kdecole();
            }
            else {
                throw Error('Erreur de connexion');
            }
        });
    }
    logout() {
        return Desactivation_js_1.Desactivation.desactivation();
    }
    getReleve() {
        return Endpoint_1.Endpoint.kdecole('consulterReleves', `idetablissement/${Kdecole.idEtablissement}`).then(releve => new Releve_1.Releve(releve));
    }
    getActualites() {
        return Endpoint_1.Endpoint.kdecole('actualites', `idetablissement/${Kdecole.idEtablissement}`).then(JSONactualites => {
            const actualites = [];
            for (const JSONactualite of JSONactualites) {
                actualites.push(new Actualite_1.Actualite(JSONactualite));
            }
            return actualites;
        });
    }
    getTravailAFaire() {
        return Endpoint_1.Endpoint.kdecole('travailAFaire', `idetablissement/${Kdecole.idEtablissement}`).then(travailAFaire => new TravailAFaire_1.TravailAFaire(travailAFaire));
    }
    getAbsences() {
        return Endpoint_1.Endpoint.kdecole('consulterAbsences', `idetablissement/${Kdecole.idEtablissement}`).then(absences => new AbsencesList_1.AbsencesList(absences).listeAbsences);
    }
    getInfoUtilisateur() {
        return Endpoint_1.Endpoint.kdecole('infoutilisateur').then(utilisateur => new Utilisateur_1.Utilisateur(utilisateur));
    }
    getCalendrier() {
        return Endpoint_1.Endpoint.kdecole('calendrier', `idetablissement/${Kdecole.idEtablissement}`).then(calendrier => new Calendrier_1.Calendrier(calendrier));
    }
    getNotes() {
        return Endpoint_1.Endpoint.kdecole('consulterNotes', `idetablissement/${Kdecole.idEtablissement}`).then(notesList => new NotesList_1.NotesList(notesList));
    }
    getMessagerieInfo() {
        return Endpoint_1.Endpoint.kdecole('messagerie/info').then(messagerieInfo => new MessageInfo_1.MessageInfo(messagerieInfo));
    }
    getMessagerieBoiteReception() {
        return Endpoint_1.Endpoint.kdecole('messagerie/boiteReception').then(messagerieBoiteReception => new MessageBoiteReception_1.MessageBoiteReception(messagerieBoiteReception));
    }
}
exports.Kdecole = Kdecole;
Kdecole.appVersion = '3.4.14';
Kdecole.idEtablissement = 0;
