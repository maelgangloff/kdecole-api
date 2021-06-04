"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Activation {
    success;
    authtoken;
    errmsg;
    constructor(activation) {
        this.errmsg = activation.errmsg;
        this.success = activation.success;
        this.authtoken = activation.authtoken;
    }
}
exports.default = Activation;
