export default class Actualite {
    public type: string
    public auteur: string
    public codeEmetteur: string
    public date: Date
    public uid: string
    public titre: string
    private errmsg: string | null

    constructor (article: {
        errmsg: string | null
        type: string
        auteur: string
        codeEmetteur: string
        titre: string
        date: number
        uid: string
    }) {
      this.errmsg = article.errmsg
      this.type = article.type
      this.auteur = article.auteur
      this.codeEmetteur = article.codeEmetteur
      this.titre = article.titre
      this.date = new Date(article.date)
      this.uid = article.uid
    }
}
