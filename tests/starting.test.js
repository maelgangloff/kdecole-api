import axios from 'axios'
import {APP_VERSION, ApiUrl} from "../dist/Kdecole";

const { Kdecole } = require('../dist/Kdecole.js')

jest.mock('axios')
const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, APP_VERSION, 10485)

describe('Test starting method', () => {

    beforeEach(() => {
        axios.mockClear()

    })

    it('should call the right url', async () => {
        axios.request.mockResolvedValue({
            data: undefined
        })
        expect(await user.starting())
        expect(axios.request).toHaveBeenCalledWith({
            "baseURL": ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
            "data": undefined,
            "headers": {"X-Kdecole-Auth": authToken, "X-Kdecole-Vers": APP_VERSION},
            validateStatus: expect.any(Function),
            "method": "get",
            "responseType": "json",
            "url": "/starting/"
        })
    })
})
