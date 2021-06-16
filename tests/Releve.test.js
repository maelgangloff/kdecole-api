import axios from 'axios'
import Releve from "../dist/entities/Note/Releve.js";
import {APP_VERSION, ApiUrl} from "../dist/Kdecole";
import {readFileSync} from "fs"
import * as fs from "fs";

const { Kdecole } = require('../dist/Kdecole.js')

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
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            validateStatus: expect.any(Function),
            "method": "get",
            "responseType": "json",
            "url": "/consulterReleves/idetablissement/10485/"
        })
    })
    it('should return moyenneGenerale and medianeGenerale', async () => {
        const releve = await user.getReleve()
        const expectedMoyennesGenerales = ["14.55", "15.83", null]
        expect(releve).toBeInstanceOf(Releve)
        for (const trimestre in releve.trimestres) {
            const moyenneGenerale = releve.trimestres[trimestre].getMoyenneGenerale()
            if(moyenneGenerale === null) {
                expect(moyenneGenerale).toBe(expectedMoyennesGenerales[trimestre])
            } else {
                expect(moyenneGenerale.toFixed(2)).toBe(expectedMoyennesGenerales[trimestre])
            }
        }
    })
    it('should return a releve of a specific student', async () => {
        await user.getReleve('AAP05567')
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            validateStatus: expect.any(Function),
            "method": "get",
            "responseType": "json",
            "url": "/consulterReleves/ideleve/AAP05567/"
        })
    })
    it('should return correct trimestres csv', async () => {
        const releve = await user.getReleve()
        expect(releve.exportCSV().trimestres).toBe(readFileSync(__dirname + '/fakeData/csv/trimestres.csv', 'utf8'))
    })
    it('should return correct matieres csv', async () => {
        const releve = await user.getReleve()
        expect(releve.exportCSV().matieres).toBe(readFileSync(__dirname + '/fakeData/csv/matieres.csv', 'utf8'))
    })
})
