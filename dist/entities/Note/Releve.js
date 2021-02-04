"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Trimestre_1 = require("./Trimestre");
class Releve {
    constructor(releve) {
        this.trimestres = [];
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_1.default(trimestre)));
    }
}
exports.default = Releve;
