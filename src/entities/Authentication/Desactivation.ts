import { Endpoint } from '../Endpoint.js'

export class Desactivation {
    public success: boolean
    public authtoken: string | null
    private errmsg: string | null

    constructor (desactivation: {
        errmsg: string | null
        success: boolean
        authtoken: string | null
    }) {
      this.errmsg = desactivation.errmsg
      this.success = desactivation.success
      this.authtoken = desactivation.authtoken
    }

    public static desactivation (): Promise<Desactivation | Error> {
      return Endpoint.kdecole({ service: 'desactivation' }).then(response => {
        const desactivation = new Desactivation(response)
        if (desactivation.success) return desactivation
        return new Error('Une erreur est survenue dans le traitement des données de déconnexion')
      })
    }
}
