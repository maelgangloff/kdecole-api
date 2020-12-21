import { Endpoint } from '../Endpoint.js';
export declare class Activation extends Endpoint {
    success: boolean;
    authtoken: string | null;
    private errmsg;
    constructor(activation: {
        errmsg: string | null;
        success: boolean;
        authtoken: string | null;
    });
    static activation(data: {
        login: string;
        password: string;
    }): Promise<Activation>;
}
