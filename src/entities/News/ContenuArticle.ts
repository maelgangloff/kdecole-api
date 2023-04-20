import Attachment from '../Messagerie/Attachment'

export default class ContenuArticle {
  public titre: string
  public codeHTML: string
  public date: Date
  public url: string
  public auteur: string
  public type: string
  public pjs: Attachment[] = []
  private readonly errmsg: string | null

  constructor (contenuArticle: {
    errmsg: string | null
    titre: string
    codeHTML: string
    date: number
    url: string
    auteur: string
    type: string
    pjs: Array<{
      idRessource: number | null
      url: string | null
      name: string
      typeMIME: string | null
    }>
  }) {
    this.errmsg = contenuArticle.errmsg
    this.titre = contenuArticle.titre
    this.codeHTML = contenuArticle.codeHTML
    this.date = new Date(contenuArticle.date)
    this.url = contenuArticle.url
    this.auteur = contenuArticle.auteur
    this.type = contenuArticle.type
    contenuArticle.pjs.forEach(pj => this.pjs.push(new Attachment(pj)))
  }
}
