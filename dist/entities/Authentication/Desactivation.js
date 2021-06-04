"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Desactivation {
    success;
    authtoken;
    errmsg;
    constructor(desactivation) {
        this.errmsg = desactivation.errmsg;
        this.success = desactivation.success;
        this.authtoken = desactivation.authtoken;
    }
}
exports.default = Desactivation;
