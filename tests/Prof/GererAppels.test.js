import axios from 'axios'
import GestionAppels from "../../dist/entities/Prof/GestionAppels"
import {APP_VERSION, ApiUrl} from "../../dist/Kdecole";

const { Kdecole } = require('../../dist/Kdecole.js')

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: require('../fakeData/Prof/fakeGestionAppels.json')
})

describe('Test valider appel', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return appels', async () => {
        expect(await user.gestionAppels()).toBeInstanceOf(GestionAppels)
        expect(axios.request).toBeCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/gestionAppels/idetablissement/10485/"
        })
    })
    it('should validate appel', async () => {
        await user.validerAppel(require('../fakeData/Prof/fakeValiderAppel.json'))
        expect(axios.request).toBeCalledWith({
            "baseURL": 'https://mobilite.monbureaunumerique.fr/mobilite',
            "data": require('../fakeData/Prof/fakeValiderAppel.json'),
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "put",
            "responseType": "json",
            "url": "/gestionAppels/idetablissement/10485/valider/"
        })
    })
})
