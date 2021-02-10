"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cli = void 0;
const Kdecole_1 = require("./Kdecole");
async function cli(args) {
    if (args.length < 4) {
        console.log("Pas assez d'arguments.");
        return;
    }
    switch (args.length) {
        case 4:
            console.log(await Kdecole_1.default.login(args[2], args[3]));
            console.log('ATTENTION: Ce token est une information qui ne doit pas être divulguée.');
    }
}
exports.cli = cli;
