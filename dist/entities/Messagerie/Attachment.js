"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Attachment {
    constructor(attachment) {
        this.idRessource = attachment.idRessource;
        this.url = attachment.url;
        this.name = attachment.name;
        this.typeMIME = attachment.typeMIME;
    }
}
exports.default = Attachment;
