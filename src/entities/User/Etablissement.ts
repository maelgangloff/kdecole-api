export class Etablissement {
    private permissions: string
    private uid: string
    private nom: string
    private active: boolean

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
