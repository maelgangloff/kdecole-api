"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBoiteReception = void 0;
const Communication_js_1 = require("./Communication.js");
class MessageBoiteReception {
    constructor(messageBoiteReception) {
        this.communications = [];
        this.nbMaxCommunicationRecues = messageBoiteReception.nbMaxCommunicationRecues;
        messageBoiteReception.communications.forEach(communication => this.communications.push(new Communication_js_1.Communication(communication)));
        this.nbMaxCaracteresMessage = messageBoiteReception.nbMaxCaracteresMessage;
        this.nbMaxCommunicationBoiteReception = messageBoiteReception.nbMaxCommunicationBoiteReception;
    }
}
exports.MessageBoiteReception = MessageBoiteReception;
