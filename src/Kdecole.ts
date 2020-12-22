import { Desactivation } from './entities/Authentication/Desactivation.js'
import { Activation } from './entities/Authentication/Activation.js'
import { APP_VERSION, IDETABLISSEMENT, SECRET } from './config'
import { Releve } from './entities/Note/Releve'
import { Endpoint } from './entities/Endpoint'
import { TravailAFaire } from './entities/Travail/TravailAFaire'
import { Actualite } from './entities/News/Actualite'
import { AbsencesList } from './entities/VieScolaire/AbsencesList'
import { Utilisateur } from './entities/User/Utilisateur'
import { Calendrier } from './entities/Calendar/Calendrier'
import { NotesList } from './entities/Note/NotesList'
import { MessageInfo } from './entities/Messagerie/MessageInfo'
import { MessageBoiteReception } from './entities/Messagerie/MessageBoiteReception'

/**
 * Support de l'API Kdecole (Mon Bureau Numérique)
 */

export class Kdecole {
  public static authToken: string
  public static appVersion = '3.4.14'
  public static idEtablissement = 0

  constructor (
    authToken:string = SECRET ?? null,
    appVersion:string = APP_VERSION ?? undefined,
    idEtablissement:number = IDETABLISSEMENT ?? 0
  ) {
    if (authToken === null) {
      throw Error("Un jeton d'accès doit être renseigné")
    }
    Kdecole.authToken = authToken
    if (appVersion) Kdecole.appVersion = appVersion
    Kdecole.idEtablissement = idEtablissement
  }

  public static async login (login: string, password: string): Promise<string> {
    const activation = await Activation.activation({
      login: login,
      password: password
    })
    if (activation.authtoken && activation.success) {
      return activation.authtoken
    } else {
      throw Error('Erreur de connexion')
    }
  }

  public logout (): Promise<Desactivation | Error> {
    return Desactivation.desactivation()
  }

  public async getReleve (idEleve?: string): Promise<Releve> {
    return new Releve(await Endpoint.kdecole({
      service: 'consulterReleves',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getActualites (idEleve?: string): Promise<Actualite[]> {
    const actualites: Actualite[] = []
    for (const JSONactualite of await Endpoint.kdecole({
      service: 'actualites',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    })) {
      actualites.push(new Actualite(JSONactualite))
    }
    return actualites
  }

  public async getTravailAFaire (idEleve?:string): Promise<TravailAFaire> {
    return new TravailAFaire(await Endpoint.kdecole({
      service: 'travailAFaire',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getAbsences (idEleve?: string): Promise<AbsencesList> {
    return new AbsencesList(await Endpoint.kdecole({
      service: 'consulterAbsences',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getInfoUtilisateur (idEleve?: string): Promise<Utilisateur> {
    return new Utilisateur(await Endpoint.kdecole({
      service: 'infoutilisateur',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getCalendrier (idEleve?:string): Promise<Calendrier> {
    return new Calendrier(await Endpoint.kdecole({
      service: 'calendrier',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getNotes (idEleve?:string): Promise<NotesList> {
    return new NotesList(await Endpoint.kdecole({
      service: 'consulterNotes',
      parameters: idEleve ? `ideleve/${idEleve}` : undefined
    }))
  }

  public async getMessagerieInfo (): Promise<MessageInfo> {
    return new MessageInfo(await Endpoint.kdecole({ service: 'messagerie/info' }))
  }

  public async getMessagerieBoiteReception (): Promise<MessageBoiteReception> {
    return new MessageBoiteReception(await Endpoint.kdecole({ service: 'messagerie/boiteReception' }))
  }
}
