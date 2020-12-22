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
    static async activation(data) {
        const activation = new Activation(await Endpoint_js_1.Endpoint.kdecole({
            service: 'activation',
            parameters: `${data.login}/${data.password}`
        }));
        if (activation.success)
            return activation;
        throw new Error("Une erreur est survenue dans le traitement des données d'authentification");
    }
}
exports.Activation = Activation;
