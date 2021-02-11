"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const Kdecole_1 = __importDefault(require("./Kdecole"));
/**
 * Pour obtenir un jeton d'authentification, vous pouvez utiliser ligne de commande
 * @example ```js
 * npx kdecole <identifiant> <code_activation_mobile>
 * ```
 */
async function cli(args) {
    if (args.length < 4) {
        console.log("Pas assez d'arguments.");
        console.log('La synthaxe est: kdecole IDENTIFIANT CODE');
        return;
    }
    switch (args.length) {
        case 4:
            console.log(await Kdecole_1.default.login(args[2], args[3]));
            console.log('ATTENTION: Ce token est une information qui ne doit pas être divulguée.');
    }
}
exports.cli = cli;
