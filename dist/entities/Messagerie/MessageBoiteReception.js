"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Communication_1 = require("./Communication");
class MessageBoiteReception {
    constructor(messageBoiteReception) {
        this.communications = [];
        this.nbMaxCommunicationRecues = messageBoiteReception.nbMaxCommunicationRecues;
        messageBoiteReception.communications.forEach(communication => this.communications.push(new Communication_1.default(communication)));
        this.nbMaxCaracteresMessage = messageBoiteReception.nbMaxCaracteresMessage;
        this.nbMaxCommunicationBoiteReception = messageBoiteReception.nbMaxCommunicationBoiteReception;
    }
}
exports.default = MessageBoiteReception;
