import { Desactivation } from './entities/Authentication/Desactivation.js';
import { Releve } from './entities/Note/Releve';
import { TravailAFaire } from './entities/Travail/TravailAFaire';
import { Actualite } from './entities/News/Actualite';
import { Absence } from './entities/VieScolaire/Absence';
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
    static login(config?: {
        login: string;
        password: string;
    }): Promise<Kdecole>;
    logout(): Promise<Desactivation | Error>;
    getReleve(): Promise<Releve>;
    getActualites(): Promise<Actualite[]>;
    getTravailAFaire(): Promise<TravailAFaire>;
    getAbsences(): Promise<Absence[]>;
    getInfoUtilisateur(): Promise<Utilisateur>;
    getCalendrier(): Promise<Calendrier>;
    getNotes(): Promise<NotesList>;
    getMessagerieInfo(): Promise<MessageInfo>;
    getMessagerieBoiteReception(): Promise<MessageBoiteReception>;
}
