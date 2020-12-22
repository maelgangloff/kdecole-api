interface KdecoleParams {
    service: 'starting' | 'actualites' | 'contenuArticle' | 'activation' | 'consulterReleves' | 'consulterAbsences' | 'infoutilisateur' | 'desactivation' | 'calendrier' | 'consulterNotes' | 'messagerie/info' | 'messagerie/boiteReception' | 'messagerie/communication' | 'messagerie/communication/nouvelleParticipation' | 'messagerie/communication/signaler' | 'messagerie/communication/supprimer' | 'travailAFaire' | 'contenuActivite' | 'gestionAppels';
    parameters?: string;
    type?: 'get' | 'post' | 'delete' | 'put';
    data?: any;
}
export declare class Endpoint {
    static kdecole({ service, parameters, type, data }: KdecoleParams): Promise<any[any]>;
}
export {};
