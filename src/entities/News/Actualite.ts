export default class Actualite {
    public type: string
    public auteur: string
    public codeEmetteur: number
    public date: Date
    public uid: string
    private errmsg: string | null

    constructor (article: {
        errmsg: string | null
        type: string
        auteur: string
        codeEmetteur: string
        date: number
        uid: string
    }) {
      this.errmsg = article.errmsg
      this.type = article.type
      this.auteur = article.auteur
      this.codeEmetteur = parseInt(article.codeEmetteur)
      this.date = new Date(article.date)
      this.uid = article.uid
    }
}
