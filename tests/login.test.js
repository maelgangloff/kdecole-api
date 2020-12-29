import axios from 'axios'
import {APP_VERSION, BASE_URL} from "../dist/Kdecole";
const Kdecole = require('../dist/Kdecole.js').default

jest.mock('axios')

describe('Test login method', () => {

    beforeEach(() => {
        axios.mockClear()
    })

    it('should call the right url and return the token', async () => {
        const expectedToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
        axios.request.mockResolvedValue({
            data: require('./fakeData/fakeActivation.json')
        })
        expect(await Kdecole.login('mael.gangloff', 'PRJROFCOZ')).toBe(expectedToken)
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": "", "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/activation/mael.gangloff/PRJROFCOZ/"
        })

    })

    it('should not login and not return token if no token is provided', async () => {
        axios.request.mockResolvedValue({
            data: {
                "errmsg": null,
                "success": false,
                "authtoken": null
            }
        })
        await expect(Kdecole.login('mael.gangloff', 'PRJROFCOZ')).rejects.toThrowError()
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": "", "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/activation/mael.gangloff/PRJROFCOZ/"
        })
    })

    it('should not login and not return token if the version is incorrect', async () => {
        axios.request.mockResolvedValue({
            data: {
                "errmsg": {
                    "titre": "Version non supportée",
                    "code": 101,
                    "type": "BLOCK",
                    "message": "La version de l'application mobile que vous utilisez n'est plus compatible.<br>Veuillez dès à présent télécharger la mise à jour pour profiter des nouveautés.<br>L'application se fermera dès que vous aurez cliqué sur le bouton OK.",
                    "tempsvalide": 10
                }
            }
        })
        await expect(Kdecole.login('mael.gangloff', 'PRJROFCOZ')).rejects.toThrow()
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": "", "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/activation/mael.gangloff/PRJROFCOZ/"
        })
    })
})
