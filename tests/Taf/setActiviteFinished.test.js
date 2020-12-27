import axios from 'axios'
import {APP_VERSION, BASE_URL} from "../../dist/config.js"

const Kdecole = require('../../dist/Kdecole.js').default

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')

describe('Test setActiviteFinished', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url and return notes', async () => {
        axios.request.mockResolvedValue({
            data: require('../fakeData/fakeFlagRealiseActivite.json')
        })
        await user.setActiviteFinished(636051, 72184, true)
        expect(axios.request).toBeCalledWith({
            "baseURL": BASE_URL,
            "data": {
                "flagRealise":true
            },
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "put",
            "responseType": "json",
            "url": "/contenuActivite/idetablissement/10485/636051/72184/"
        })
    })
})
