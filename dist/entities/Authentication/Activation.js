"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activation = void 0;
const Endpoint_js_1 = require("../Endpoint.js");
class Activation extends Endpoint_js_1.Endpoint {
    constructor(activation) {
        super();
        this.errmsg = activation.errmsg;
        this.success = activation.success;
        this.authtoken = activation.authtoken;
    }
    static activation(data) {
        return Endpoint_js_1.Endpoint.kdecole('activation', `${data.login}/${data.password}`).then(response => {
            const activation = new Activation(response);
            if (activation.success)
                return activation;
            throw new Error("Une erreur est survenue dans le traitement des données d'authentification");
        });
    }
}
exports.Activation = Activation;
