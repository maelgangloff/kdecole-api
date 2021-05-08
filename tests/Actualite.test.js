import axios from 'axios'
import Actualite from "../dist/entities/News/Actualite"
import ContenuArticle from "../dist/entities/News/ContenuArticle"
import {APP_VERSION, ApiUrl} from "../dist/Kdecole";


const { Kdecole } = require('../dist/Kdecole.js')

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')


describe('Test Actualite', () => {

    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return articles', async () => {
        axios.request.mockResolvedValue({
            data: require('./fakeData/fakeActualites.json')
        })
        const actualites = await user.getActualites()

        for (const actualite of actualites) {
            expect(actualite).toBeInstanceOf(Actualite)
        }

        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/actualites/idetablissement/10485/"
        })
    })

    it('should call the right url and return articles', async () => {
        axios.request.mockResolvedValue({
            data: require('./fakeData/fakeActualites.json')
        })
        await user.getActualites('AAP05567')

        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/actualites/ideleve/AAP05567/"
        })
    })

    it('should call the right url and return the full content of an article', async () => {
        axios.request.mockResolvedValue({
            data: require('./fakeData/fakeArticle.json')
        })
        expect(await user.getContenuArticle('10485-5237')).toBeInstanceOf(ContenuArticle)
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "get",
            "responseType": "json",
            "url": "/contenuArticle/article/10485-5237/"
        })
    })
})
