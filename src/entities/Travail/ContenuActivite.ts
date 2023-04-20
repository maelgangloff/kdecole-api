import Attachment from '../Messagerie/Attachment'

export default class ContenuActivite {
  public codeHTML: string
  public flagTravailAfaire: boolean
  public flagRealise: boolean
  public titre: string
  public date: Date
  public isFaitModifiable: boolean
  public type: string
  public matiere: string
  public pjs: Attachment[] = []
  private readonly errmsg: string | null

  constructor (contenuActivite: {
    errmsg: string | null
    codeHTML: string
    flagTravailAFaire: boolean
    flagRealise: boolean
    titre: string
    date: number
    isFaitModifiable: boolean
    type: string
    matiere: string
    pjs: Array<{
      idRessource: number | null
      url: string | null
      name: string
      typeMIME: string | null
    }>
  }) {
    this.errmsg = contenuActivite.errmsg
    this.codeHTML = contenuActivite.codeHTML
    this.flagRealise = contenuActivite.flagRealise
    this.flagTravailAfaire = contenuActivite.flagTravailAFaire
    this.titre = contenuActivite.titre
    this.date = new Date(contenuActivite.date)
    this.isFaitModifiable = contenuActivite.isFaitModifiable
    this.type = contenuActivite.type
    this.matiere = contenuActivite.matiere
    contenuActivite.pjs.forEach(pj => this.pjs.push(new Attachment(pj)))
  }
}
