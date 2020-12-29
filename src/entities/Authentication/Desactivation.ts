export default class Desactivation {
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
}
