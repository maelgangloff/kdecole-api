import axios from 'axios'
import { Kdecole } from '../Kdecole.js'
import { BASE_URL } from '../config'

export class Endpoint {
  public static async kdecole (service: string, parameters?: string, type: 'get' | 'post' | 'delete' | 'put' = 'get', data?: any[any]): Promise<any[any]> {
    try {
      return (await axios.request({
        baseURL: BASE_URL,
        headers: {
          'X-Kdecole-Vers': Kdecole.appVersion,
          'X-Kdecole-Auth': Kdecole.authToken
        },
        responseType: 'json',
        method: type,
        url: parameters ? `/${service}/${parameters}/` : `/${service}/`,
        data: data
      })).data
    } catch (e) {
      throw Error('Une erreur est survenue durant le traitement de la requête')
    }
  }
}
