import axios from 'axios'
import TravailAFaire from '../../src/entities/Travail/TravailAFaire'
import ContenuActivite from '../../src/entities/Travail/ContenuActivite'
import { Kdecole, ApiVersion, ApiUrl } from '../../src/index'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

describe('Test TravailAFaire', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return taf', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/Taf/fakeTravailAFaire.json')
    })
    expect(await user.getTravailAFaire()).toBeInstanceOf(TravailAFaire)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/travailAFaire/idetablissement/10485/'
    })
  })

  it('should call the right url if notBeforeDate is specified', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/Taf/fakeTravailAFaire.json')
    })
    expect(await user.getTravailAFaire(undefined, new Date(1609714800000))).toBeInstanceOf(TravailAFaire)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/travailAFaire/idetablissement/10485/1609714800000/'
    })
  })

  it('should return taf of a specific student', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/Taf/fakeTravailAFaire.json')
    })
    expect(await user.getTravailAFaire('AAP05567')).toBeInstanceOf(TravailAFaire)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/travailAFaire/ideleve/AAP05567/'
    })
  })

  it('should return ContenuActivite', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/Taf/fakeContenuActivite.json')
    })
    expect(await user.getContenuActivite(636051, 72184)).toBeInstanceOf(ContenuActivite)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/contenuActivite/idetablissement/10485/636051/72184/'
    })
  })

  it('should return ContenuActivite of a specific student', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('../fakeData/Taf/fakeContenuActivite.json')
    })
    await user.getContenuActivite(636051, 72184, 'AAP05567')
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/contenuActivite/ideleve/AAP05567/636051/72184/'
    })
  })
})
