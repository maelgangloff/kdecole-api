export default class Attachment {
  public idRessource: number | null
  public url: string | null
  public name: string
  public typeMIME: string | null

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
