export default class Actualite {
    type: string;
    auteur: string;
    codeEmetteur: number;
    date: Date;
    uid: string;
    titre: string;
    private errmsg;
    constructor(article: {
        errmsg: string | null;
        type: string;
        auteur: string;
        codeEmetteur: string;
        titre: string;
        date: number;
        uid: string;
    });
}
