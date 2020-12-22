"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endpoint = void 0;
const axios_1 = require("axios");
const Kdecole_js_1 = require("../Kdecole.js");
const config_1 = require("../config");
class Endpoint {
    static async kdecole({ service, parameters = `idetablissement/${Kdecole_js_1.Kdecole.idEtablissement}`, type = 'get', data }) {
        try {
            return (await axios_1.default.request({
                baseURL: config_1.BASE_URL,
                headers: {
                    'X-Kdecole-Vers': Kdecole_js_1.Kdecole.appVersion,
                    'X-Kdecole-Auth': Kdecole_js_1.Kdecole.authToken ?? null
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
exports.Endpoint = Endpoint;
