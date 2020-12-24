export class Etablissement {
    public permissions: string
    public uid: string
    public nom: string
    public active: boolean

    constructor (etablissement: {
        permissions: string
        uid: string
        nom: string
        active: boolean
    }) {
      this.permissions = etablissement.permissions
      this.uid = etablissement.uid
      this.nom = etablissement.nom
      this.active = etablissement.active
    }
}
