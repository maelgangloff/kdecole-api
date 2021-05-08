import axios from 'axios'
import {APP_VERSION, ApiUrl} from "../../dist/Kdecole";

const { Kdecole } = require('../../dist/Kdecole.js')

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

jest.mock('axios')
axios.request.mockResolvedValue({
    data: {}
})

describe('Test Messagerie report a message', () => {
    beforeEach(() => {
        axios.mockClear()
    })
    it('should call the right url', async () => {
        const mockDate = new Date(1609095076)
        const spy = jest
            .spyOn(global, 'Date')
            .mockImplementation(() => mockDate)
        await user.sendMessage(123456, 'test')
        expect(axios.request).toBeCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": {
                dateEnvoi: (new Date()).getTime(),
                corpsMessage: 'test'
            },
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            "method": "put",
            "responseType": "json",
            "url": "/messagerie/communication/nouvelleParticipation/123456/"
        })
        spy.mockRestore()
    })
})
