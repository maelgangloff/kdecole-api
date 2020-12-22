import axios from 'axios'
import { Kdecole } from '../Kdecole.js'
import { BASE_URL } from '../config'

interface KdecoleParams {
  service: 'starting'
      | 'actualites'
      | 'contenuArticle'
      | 'activation'
      | 'consulterReleves'
      | 'consulterAbsences'
      | 'infoutilisateur'
      | 'desactivation'
      | 'calendrier'
      | 'consulterNotes'
      | 'messagerie/info'
      | 'messagerie/boiteReception'
      | 'messagerie/communication'
      | 'messagerie/communication/nouvelleParticipation'
      | 'messagerie/communication/signaler'
      | 'messagerie/communication/supprimer'
      | 'travailAFaire' | 'contenuActivite'
      | 'gestionAppels'
  parameters?: string
  type?: 'get' | 'post' | 'delete' | 'put'
  data?: any
}

export class Endpoint {
  public static async kdecole ({ service, parameters = `idetablissement/${Kdecole.idEtablissement}`, type = 'get', data }: KdecoleParams): Promise<any[any]> {
    try {
      return (await axios.request({
        baseURL: BASE_URL,
        headers: {
          'X-Kdecole-Vers': Kdecole.appVersion,
          'X-Kdecole-Auth': Kdecole.authToken ?? null
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
