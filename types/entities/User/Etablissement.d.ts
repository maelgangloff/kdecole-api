export default class Etablissement {
    permissions: string;
    uid: string;
    nom: string;
    active: boolean;
    constructor(etablissement: {
        permissions: string;
        uid: string;
        nom: string;
        active: boolean;
    });
}
