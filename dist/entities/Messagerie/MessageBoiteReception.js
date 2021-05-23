"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Communication_1 = __importDefault(require("./Communication"));
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
