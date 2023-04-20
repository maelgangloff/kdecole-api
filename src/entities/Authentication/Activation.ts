export default class Activation {
  public success: boolean
  public authtoken: string | null
  private readonly errmsg: string | null

  constructor (activation: {
    errmsg: string | null
    success: boolean
    authtoken: string | null
  }) {
    this.errmsg = activation.errmsg
    this.success = activation.success
    this.authtoken = activation.authtoken
  }
}
