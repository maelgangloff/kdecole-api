import axios from 'axios'
import {APP_VERSION, BASE_URL} from "../dist/config.js"
import {Utilisateur} from "../dist/entities/User/Utilisateur.js"

const Kdecole = require('../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: require('./fakeData/fakeInfoUser.json')
})

describe('Test Utilisateur', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return utilisateur', async () => {
        expect(await user.getInfoUtilisateur()).toBeInstanceOf(Utilisateur)
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/infoutilisateur/idetablissement/10485/"
        })
    })
    it('should return utilisateur with idEleveSelectionne', async () => {
        await user.getInfoUtilisateur('AAP05567')
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/infoutilisateur/ideleve/AAP05567/"
        })
    })
})
