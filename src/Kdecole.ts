import { Desactivation } from './entities/Authentication/Desactivation.js'
import { Activation } from './entities/Authentication/Activation.js'
import { APP_VERSION, IDETABLISSEMENT, LOGIN, PASSWORD, SECRET } from './config'
import { Releve } from './entities/Note/Releve'
import { Endpoint } from './entities/Endpoint'
import { TravailAFaire } from './entities/Travail/TravailAFaire'
import { Actualite } from './entities/News/Actualite'
import { Absence } from './entities/VieScolaire/Absence'
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
      authToken = SECRET ?? null,
      appVersion = APP_VERSION ?? undefined,
      idEtablissement = IDETABLISSEMENT ?? 0
    ) {
      if (authToken === null) {
        throw Error("Un jeton d'accès doit être renseigné")
      }
      Kdecole.authToken = authToken
      if (appVersion) Kdecole.appVersion = appVersion
      Kdecole.idEtablissement = idEtablissement
    }

    public static async login (config?: { login: string, password: string }): Promise<Kdecole> {
      return Activation.activation({
        login: config?.login ?? LOGIN ?? '',
        password: config?.password ?? PASSWORD ?? ''
      }).then(activation => {
        if (activation.authtoken && activation.success) {
          return new Kdecole()
        } else {
          throw Error('Erreur de connexion')
        }
      })
    }

    public logout (): Promise<Desactivation | Error> {
      return Desactivation.desactivation()
    }

    public getReleve (): Promise<Releve> {
      return Endpoint.kdecole('consulterReleves', `idetablissement/${Kdecole.idEtablissement}`).then(releve =>
        new Releve(releve)
      )
    }

    public getActualites (): Promise<Actualite[]> {
      return Endpoint.kdecole('actualites', `idetablissement/${Kdecole.idEtablissement}`).then(JSONactualites => {
        const actualites: Actualite[] = []
        for (const JSONactualite of JSONactualites) {
          actualites.push(new Actualite(JSONactualite))
        }
        return actualites
      })
    }

    public getTravailAFaire (): Promise<TravailAFaire> {
      return Endpoint.kdecole('travailAFaire', `idetablissement/${Kdecole.idEtablissement}`).then(travailAFaire =>
        new TravailAFaire(travailAFaire))
    }

    public getAbsences (): Promise<Absence[]> {
      return Endpoint.kdecole('consulterAbsences', `idetablissement/${Kdecole.idEtablissement}`).then(absences =>
        new AbsencesList(absences).listeAbsences
      )
    }

    public getInfoUtilisateur (): Promise<Utilisateur> {
      return Endpoint.kdecole('infoutilisateur').then(utilisateur => new Utilisateur(utilisateur))
    }

    public getCalendrier (): Promise<Calendrier> {
      return Endpoint.kdecole('calendrier', `idetablissement/${Kdecole.idEtablissement}`).then(calendrier => new Calendrier(calendrier))
    }

    public getNotes (): Promise<NotesList> {
      return Endpoint.kdecole('consulterNotes', `idetablissement/${Kdecole.idEtablissement}`).then(notesList => new NotesList(notesList))
    }

    public getMessagerieInfo (): Promise<MessageInfo> {
      return Endpoint.kdecole('messagerie/info').then(messagerieInfo => new MessageInfo(messagerieInfo))
    }

    public getMessagerieBoiteReception (): Promise<MessageBoiteReception> {
      return Endpoint.kdecole('messagerie/boiteReception').then(messagerieBoiteReception => new MessageBoiteReception(messagerieBoiteReception))
    }
}
