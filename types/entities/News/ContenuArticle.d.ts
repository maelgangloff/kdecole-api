import { Attachment } from '../Messagerie/Attachment';
export declare class ContenuArticle {
    titre: string;
    codeHTML: string;
    date: Date;
    url: string;
    auteur: string;
    type: string;
    pjs: Attachment[];
    private errmsg;
    constructor(contenuArticle: {
        errmsg: string | null;
        titre: string;
        codeHTML: string;
        date: number;
        url: string;
        auteur: string;
        type: string;
        pjs: {
            idRessource: number | null;
            url: string | null;
            name: string;
            typeMIME: string | null;
        }[];
    });
}
