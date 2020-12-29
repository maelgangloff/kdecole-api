import Eleve from './Eleve';
import Etablissement from './Etablissement';
export default class Utilisateur {
    type: number;
    nom: string;
    eleves: Array<Eleve>;
    xiti: {
        idProjet: string;
        idCollectivite: string;
        idXiti: string;
        idEtab: string;
        idPlateforme: string;
        codeProfil: string;
    };
    idEtablissementSelectionne: string | null;
    idEleveSelectionne: string | null;
    protection: string;
    etabs: Array<Etablissement>;
    timezone: string;
    private errmsg;
    constructor(utilisateur: {
        errmsg: string | null;
        type: number;
        nom: string;
        eleves: Array<{
            active: boolean;
            nom: string;
            uid: string;
            permissions: string | null;
        }> | null;
        xiti: {
            idProjet: string;
            idCollectivite: string;
            idXiti: string;
            idEtab: string;
            idPlateforme: string;
            codeProfil: string;
        };
        idEtablissementSelectionne: string | null;
        idEleveSelectionne: string | null;
        protection: string;
        etabs: Array<{
            permissions: string;
            uid: string;
            nom: string;
            active: boolean;
        }> | null;
        timezone: string;
    });
}
