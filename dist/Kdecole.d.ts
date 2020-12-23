import { Desactivation } from './entities/Authentication/Desactivation.js';
import { Releve } from './entities/Note/Releve';
import { TravailAFaire } from './entities/Travail/TravailAFaire';
import { Actualite } from './entities/News/Actualite';
import { AbsencesList } from './entities/VieScolaire/AbsencesList';
import { Utilisateur } from './entities/User/Utilisateur';
import { Calendrier } from './entities/Calendar/Calendrier';
import { NotesList } from './entities/Note/NotesList';
import { MessageInfo } from './entities/Messagerie/MessageInfo';
import { MessageBoiteReception } from './entities/Messagerie/MessageBoiteReception';
import { ContenuActivite } from './entities/Travail/ContenuActivite';
import { ContenuArticle } from './entities/News/ContenuArticle';
import { Communication } from './entities/Messagerie/Communication';
interface KdecoleRequest {
    service: 'starting' | 'actualites' | 'contenuArticle' | 'activation' | 'consulterReleves' | 'consulterAbsences' | 'infoutilisateur' | 'desactivation' | 'calendrier' | 'consulterNotes' | 'messagerie/info' | 'messagerie/boiteReception' | 'messagerie/communication' | 'messagerie/communication/nouvelleParticipation' | 'messagerie/communication/signaler' | 'messagerie/communication/supprimer' | 'travailAFaire' | 'contenuActivite' | 'gestionAppels';
    parameters?: string;
    type?: 'get' | 'post' | 'delete' | 'put';
    data?: any;
}
export declare class Kdecole {
    private readonly authToken;
    appVersion: string;
    idEtablissement: number;
    constructor(authToken?: string, appVersion?: string, idEtablissement?: number);
    static login(login: string, password: string): Promise<string>;
    logout(): Promise<Desactivation | Error>;
    getReleve(idEleve?: string): Promise<Releve>;
    getActualites(idEleve?: string): Promise<Actualite[]>;
    getContenuArticle(uid: string): Promise<ContenuArticle>;
    getTravailAFaire(idEleve?: string): Promise<TravailAFaire>;
    getContenuActivite(uidSeance: number, uid: number, idEleve?: string): Promise<ContenuActivite>;
    getAbsences(idEleve?: string): Promise<AbsencesList>;
    getInfoUtilisateur(idEleve?: string): Promise<Utilisateur>;
    getCalendrier(idEleve?: string): Promise<Calendrier>;
    getNotes(idEleve?: string): Promise<NotesList>;
    getMessagerieInfo(): Promise<MessageInfo>;
    getMessagerieBoiteReception(): Promise<MessageBoiteReception>;
    getCommunication(id: number): Promise<Communication>;
    signalerCommunication(id: number): Promise<void>;
    supprimerCommunication(id: number): Promise<void>;
    private kdecole;
    static callAPI(appVersion: string, authToken: string, { service, parameters, type, data }: KdecoleRequest): Promise<any>;
}
export {};
