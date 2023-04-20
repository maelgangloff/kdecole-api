import axios from 'axios'
import GestionAppels from '../../src/entities/Prof/GestionAppels'
import { Kdecole, ApiVersion, ApiUrl } from '../../src/index'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: require('../fakeData/Prof/fakeGestionAppels.json')
})

describe('Test valider appel', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return appels', async () => {
    expect(await user.gestionAppels()).toBeInstanceOf(GestionAppels)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/gestionAppels/idetablissement/10485/'
    })
  })
  it('should validate appel', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    await user.validerAppel(require('../fakeData/Prof/fakeValiderAppel.json'))
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: 'https://mobilite.monbureaunumerique.fr/mobilite',
      data: require('../fakeData/Prof/fakeValiderAppel.json'),
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'put',
      responseType: 'json',
      url: '/gestionAppels/idetablissement/10485/valider/'
    })
  })
})
