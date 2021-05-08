import axios from 'axios'
import TravailAFaire from "../../dist/entities/Travail/TravailAFaire.js"
import ContenuActivite from "../../dist/entities/Travail/ContenuActivite.js"
import {APP_VERSION, ApiUrl} from "../../dist/Kdecole";

const { Kdecole } = require('../../dist/Kdecole.js')

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')

describe('Test TravailAFaire', () => {

    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return taf', async () => {
        axios.request.mockResolvedValue({
            data: require('../fakeData/Taf/fakeTravailAFaire.json')
        })
        expect(await user.getTravailAFaire()).toBeInstanceOf(TravailAFaire)
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/travailAFaire/idetablissement/10485/"
        })
    })

    it('should return taf of a specific student', async () => {
        axios.request.mockResolvedValue({
            data: require('../fakeData/Taf/fakeTravailAFaire.json')
        })
        expect(await user.getTravailAFaire('AAP05567')).toBeInstanceOf(TravailAFaire)
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/travailAFaire/ideleve/AAP05567/"
        })
    })

    it('should return ContenuActivite', async () => {
        axios.request.mockResolvedValue({
            data: require('../fakeData/Taf/fakeContenuActivite.json')
        })
        expect(await user.getContenuActivite(636051, 72184)).toBeInstanceOf(ContenuActivite)
        expect(axios.request).toBeCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/contenuActivite/idetablissement/10485/636051/72184/"
        })
    })

    it('should return ContenuActivite of a specific student', async () => {
        axios.request.mockResolvedValue({
            data: require('../fakeData/Taf/fakeContenuActivite.json')
        })
        await user.getContenuActivite(636051, 72184, 'AAP05567')
        expect(axios.request).toBeCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/contenuActivite/ideleve/AAP05567/636051/72184/"
        })
    })
})
