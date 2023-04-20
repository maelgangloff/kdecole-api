import axios from 'axios'
import MessageBoiteReception from '../../src/entities/Messagerie/MessageBoiteReception'
import { Kdecole, ApiVersion, ApiUrl } from '../../src/index'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: require('../fakeData/Messagerie/fakeBoiteReception.json')
})

describe('Test Messagerie Boite de réception', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return boite de réception', async () => {
    expect(await user.getMessagerieBoiteReception()).toBeInstanceOf(MessageBoiteReception)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/messagerie/boiteReception/'
    })
  })
  it('should call the right url and return boite de réception when pagination parameter is given', async () => {
    expect(await user.getMessagerieBoiteReception(20)).toBeInstanceOf(MessageBoiteReception)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/messagerie/boiteReception/20/'
    })
  })
})
