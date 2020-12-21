export class Eleve {
    private active: boolean
    private nom: string
    private uid: string
    private permissions: string | null

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
