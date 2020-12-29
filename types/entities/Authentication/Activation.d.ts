export default class Activation {
    success: boolean;
    authtoken: string | null;
    private errmsg;
    constructor(activation: {
        errmsg: string | null;
        success: boolean;
        authtoken: string | null;
    });
}
