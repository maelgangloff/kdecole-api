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
export declare class Kdecole {
    static authToken: string;
    static appVersion: string;
    static idEtablissement: number;
    constructor(authToken?: string, appVersion?: string, idEtablissement?: number);
    static login(login: string, password: string): Promise<string>;
    logout(): Promise<Desactivation | Error>;
    getReleve(idEleve?: string): Promise<Releve>;
    getActualites(idEleve?: string): Promise<Actualite[]>;
    getTravailAFaire(idEleve?: string): Promise<TravailAFaire>;
    getAbsences(idEleve?: string): Promise<AbsencesList>;
    getInfoUtilisateur(idEleve?: string): Promise<Utilisateur>;
    getCalendrier(idEleve?: string): Promise<Calendrier>;
    getNotes(idEleve?: string): Promise<NotesList>;
    getMessagerieInfo(): Promise<MessageInfo>;
    getMessagerieBoiteReception(): Promise<MessageBoiteReception>;
}
