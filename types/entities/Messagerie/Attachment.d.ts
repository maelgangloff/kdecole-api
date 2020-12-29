export default class Attachment {
    idRessource: number | null;
    url: string | null;
    name: string;
    typeMIME: string | null;
    constructor(attachment: {
        idRessource: number | null;
        url: string | null;
        name: string;
        typeMIME: string | null;
    });
}
