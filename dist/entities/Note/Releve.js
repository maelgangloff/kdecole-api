"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trimestre_1 = __importDefault(require("./Trimestre"));
class Releve {
    trimestres = [];
    constructor(releve) {
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_1.default(trimestre)));
    }
}
exports.default = Releve;
