export default class Eleve {
    active: boolean;
    nom: string;
    uid: string;
    permissions: string | null;
    constructor(eleve: {
        active: boolean;
        nom: string;
        uid: string;
        permissions: string | null;
    });
}
