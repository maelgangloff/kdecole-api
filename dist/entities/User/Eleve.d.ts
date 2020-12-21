export declare class Eleve {
    private active;
    private nom;
    private uid;
    private permissions;
    constructor(eleve: {
        active: boolean;
        nom: string;
        uid: string;
        permissions: string | null;
    });
}
