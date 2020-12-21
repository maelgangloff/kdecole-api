export class Attachment {
    private idRessource: number | null
    private url: string | null
    private name: string
    private typeMIME: string | null

    constructor (attachment: {
        idRessource: number | null
        url: string | null
        name: string
        typeMIME: string | null
    }) {
      this.idRessource = attachment.idRessource
      this.url = attachment.url
      this.name = attachment.name
      this.typeMIME = attachment.typeMIME
    }
}
