import Eleve from './Eleve'
import Etablissement from './Etablissement'

export default class Utilisateur {
    public type: number
    public nom: string
    public eleves: Array<Eleve> = []
    public xiti: {
        idProjet: string,
        idCollectivite: string,
        idXiti: string,
        idEtab: string,
        idPlateforme: string,
        codeProfil: string
    }

    public idEtablissementSelectionne: string | null
    public idEleveSelectionne: string | null
    public protection: string
    public etabs: Array<Etablissement> = []
    public timezone: string
    private errmsg: string | null

    constructor (utilisateur: {
        errmsg: string | null
        type: number
        nom: string
        eleves: Array<{
            active: boolean
            nom: string
            uid: string
            permissions: string | null
        }> | null
        xiti: {
            idProjet: string
            idCollectivite: string
            idXiti: string
            idEtab: string
            idPlateforme: string
            codeProfil: string
        },
        idEtablissementSelectionne: string | null
        idEleveSelectionne: string | null
        protection: string
        etabs: Array<{
            permissions: string
            uid: string
            nom: string
            active: boolean
        }> | null
        timezone: string
    }) {
      this.errmsg = utilisateur.errmsg
      this.type = utilisateur.type
      this.nom = utilisateur.nom
      utilisateur.eleves?.forEach(eleve => this.eleves.push(new Eleve(eleve)))
      utilisateur.etabs?.forEach(etab => this.etabs.push(new Etablissement(etab)))
      this.xiti = utilisateur.xiti
      this.idEtablissementSelectionne = utilisateur.idEtablissementSelectionne
      this.idEleveSelectionne = utilisateur.idEleveSelectionne
      this.protection = utilisateur.protection
      this.timezone = utilisateur.timezone
    }
}
