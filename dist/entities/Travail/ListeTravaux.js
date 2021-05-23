"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Travail_1 = __importDefault(require("./Travail"));
class ListeTravaux {
    constructor(listTravaux) {
        this.listTravail = [];
        this.date = new Date(listTravaux.date);
        listTravaux.listTravail.forEach(travail => this.listTravail.push(new Travail_1.default(travail)));
    }
}
exports.default = ListeTravaux;
