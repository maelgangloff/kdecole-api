"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Appel_1 = __importDefault(require("./Appel"));
class GestionAppels {
    dateDuJour;
    listeAppels = [];
    constructor(gestionAppels) {
        this.dateDuJour = new Date(gestionAppels.dateDuJour);
        gestionAppels.listeAppels.forEach(appel => this.listeAppels.push(new Appel_1.default(appel)));
    }
}
exports.default = GestionAppels;
