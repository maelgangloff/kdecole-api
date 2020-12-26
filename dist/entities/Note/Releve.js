"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Releve = void 0;
const Trimestre_js_1 = require("./Trimestre.js");
class Releve {
    constructor(releve) {
        this.trimestres = [];
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_js_1.Trimestre(trimestre)));
    }
}
exports.Releve = Releve;
