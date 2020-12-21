import { ContenuArticle } from './ContenuArticle';
export declare class Actualite {
    type: string;
    auteur: string;
    codeEmetteur: number;
    date: Date;
    uid: string;
    private errmsg;
    constructor(article: {
        errmsg: string | null;
        type: string;
        auteur: string;
        codeEmetteur: string;
        date: number;
        uid: string;
    });
    getContenuArticle(): Promise<ContenuArticle>;
}
