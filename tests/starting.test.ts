import axios from 'axios'
import { ApiVersion, ApiUrl, Kdecole } from '../src/Kdecole'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

describe('Test starting method', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })

  it('should call the right url', async () => {
    mockedAxios.request.mockResolvedValue({
      data: undefined
    })
    expect(await user.starting())
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/starting/'
    })
  })
})
