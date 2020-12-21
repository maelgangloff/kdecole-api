import { Endpoint } from '../Endpoint.js'

export class Activation extends Endpoint {
    public success: boolean
    public authtoken: string | null
    private errmsg: string | null

    constructor (activation: {
        errmsg: string | null
        success: boolean
        authtoken: string | null
    }) {
      super()
      this.errmsg = activation.errmsg
      this.success = activation.success
      this.authtoken = activation.authtoken
    }

    public static activation (data: { login: string, password: string }): Promise<Activation> {
      return Endpoint.kdecole('activation', `${data.login}/${data.password}`).then(response => {
        const activation = new Activation(response)
        if (activation.success) return activation
        throw new Error("Une erreur est survenue dans le traitement des données d'authentification")
      })
    }
}
