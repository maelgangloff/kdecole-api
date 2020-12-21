export declare class Desactivation {
    success: boolean;
    authtoken: string | null;
    private errmsg;
    constructor(desactivation: {
        errmsg: string | null;
        success: boolean;
        authtoken: string | null;
    });
    static desactivation(): Promise<Desactivation | Error>;
}
