export default class Eleve {
  public active: boolean
  public nom: string
  public uid: string
  public permissions: string | null

  constructor (eleve: {
    active: boolean
    nom: string
    uid: string
    permissions: string | null
  }) {
    this.active = eleve.active
    this.nom = eleve.nom
    this.uid = eleve.uid
    this.permissions = eleve.permissions
  }
}
