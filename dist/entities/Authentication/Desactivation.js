"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Desactivation = void 0;
const Endpoint_js_1 = require("../Endpoint.js");
class Desactivation {
    constructor(desactivation) {
        this.errmsg = desactivation.errmsg;
        this.success = desactivation.success;
        this.authtoken = desactivation.authtoken;
    }
    static desactivation() {
        return Endpoint_js_1.Endpoint.kdecole('desactivation').then(response => {
            const desactivation = new Desactivation(response);
            if (desactivation.success)
                return desactivation;
            return new Error('Une erreur est survenue dans le traitement des données de déconnexion');
        });
    }
}
exports.Desactivation = Desactivation;
