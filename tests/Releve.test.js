import axios from 'axios'
import Releve from "../dist/entities/Note/Releve.js";
import {APP_VERSION, BASE_URL} from "../dist/Kdecole";

const Kdecole = require('../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: require('./fakeData/fakeReleve.json')
})

describe('Test Releve', () => {

    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return a releve', async () => {
        expect(await user.getReleve()).toBeInstanceOf(Releve)
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/consulterReleves/idetablissement/10485/"
        })
    })
    it('should return moyenneGenerale and medianeGenerale', async () => {
        const releve = await user.getReleve()
        const expectedMoyennesGenerales = ["14.55", "15.83", false]
        expect(releve).toBeInstanceOf(Releve)
        for (const trimestre in releve.trimestres) {
            const moyenneGenerale = releve.trimestres[trimestre].getMoyenneGenerale()
            switch (typeof moyenneGenerale) {
                case "number":
                    expect(moyenneGenerale.toFixed(2)).toBe(expectedMoyennesGenerales[trimestre])
                    break
                case "boolean":
                    expect(moyenneGenerale).toBe(expectedMoyennesGenerales[trimestre])
                    break
            }
        }
    })
    it('should return a releve of a specific student', async () => {
        await user.getReleve('AAP05567')
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": BASE_URL,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/consulterReleves/ideleve/AAP05567/"
        })
    })
})
