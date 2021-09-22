import axios from 'axios'
import { ApiUrl, ApiVersion, Kdecole } from '../src/Kdecole'
import Calendrier from '../src/entities/Calendar/Calendrier'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/fakeCalendrier.json')
})

describe('Test Calendrier', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return calendrier', async () => {
    expect(await user.getCalendrier()).toBeInstanceOf(Calendrier)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/calendrier/idetablissement/10485/'
    })
  })
  it('should call the right url and return calendrier of a specific student', async () => {
    await user.getCalendrier('AAP05567')
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/calendrier/ideleve/AAP05567/'
    })
  })
})
