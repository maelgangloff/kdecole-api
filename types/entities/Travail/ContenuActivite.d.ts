import Attachment from '../Messagerie/Attachment';
export default class ContenuActivite {
    codeHTML: string;
    flagTravailAfaire: boolean;
    flagRealise: boolean;
    titre: string;
    date: Date;
    isFaitModifiable: boolean;
    type: string;
    matiere: string;
    pjs: Attachment[];
    private errmsg;
    constructor(contenuActivite: {
        errmsg: string | null;
        codeHTML: string;
        flagTravailAFaire: boolean;
        flagRealise: boolean;
        titre: string;
        date: number;
        isFaitModifiable: boolean;
        type: string;
        matiere: string;
        pjs: {
            idRessource: number | null;
            url: string | null;
            name: string;
            typeMIME: string | null;
        }[];
    });
}
