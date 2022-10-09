import axios from 'axios'
import { ApiUrl, ApiVersion, Kdecole } from '../src/Kdecole'
import Actualite from '../src/entities/News/Actualite'
import ContenuArticle from '../src/entities/News/ContenuArticle'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

describe('Test Actualite', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return articles', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('./fakeData/fakeActualites.json')
    })
    const actualites = await user.getActualites()

    for (const actualite of actualites) {
      expect(actualite).toBeInstanceOf(Actualite)
    }

    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/actualites/idetablissement/10485/'
    })
  })

  it('should call the right url and return articles', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('./fakeData/fakeActualites.json')
    })
    await user.getActualites('AAP05567')

    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/actualites/ideleve/AAP05567/'
    })
  })

  it('should call the right url and return the full content of an article', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('./fakeData/fakeArticle.json')
    })
    expect(await user.getContenuArticle('10485-5237')).toBeInstanceOf(ContenuArticle)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/contenuArticle/article/10485-5237/'
    })
  })

  it('should call the right url and return the full content of an information', async () => {
    mockedAxios.request.mockResolvedValue({
      data: require('./fakeData/fakeInformation.json')
    })
    expect(await user.getContenuInformation('96619')).toBeInstanceOf(ContenuArticle)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/contenuArticle/information/96619/'
    })
  })
})
