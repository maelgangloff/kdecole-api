"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const Kdecole_1 = require("./Kdecole");
/**
 * Pour obtenir un jeton d'authentification, vous pouvez utiliser la ligne de commande
 * @example ```bash
 * npx kdecole <identifiant> <code_activation_mobile>
 * ```
 */
async function cli(args) {
    if (args.length < 4) {
        console.log("Pas assez d'arguments.");
        console.log('La syntaxe est: kdecole IDENTIFIANT CODE');
        return;
    }
    switch (args.length) {
        case 4:
            console.log(await Kdecole_1.Kdecole.login(args[2], args[3]));
            console.log('ATTENTION: Ce token doit rester secret.');
    }
}
exports.cli = cli;
