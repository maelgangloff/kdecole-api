import axios from 'axios'
import { Kdecole, ApiVersion, ApiUrl } from '../../src/index'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

describe('Test setActiviteFinished', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return notes', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/fakeFlagRealiseActivite.json')
    })
    await user.setActiviteFinished(636051, 72184, true)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: {
        flagRealise: true
      },
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'put',
      responseType: 'json',
      url: '/contenuActivite/idetablissement/10485/636051/72184/'
    })
  })
})
