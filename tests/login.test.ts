import axios from 'axios'
import { Kdecole, ApiVersion, ApiUrl } from '../src/index'

const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
jest.mock('axios')

describe('Test login method', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })

  it('should call the right url and return the token', async () => {
    const expectedToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
    mockedAxios.request.mockResolvedValue({
      data: require('./fakeData/fakeActivation.json')
    })
    expect(await Kdecole.login('mael.gangloff', 'PRJROFCOZ')).toBe(expectedToken)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': '', 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/activation/mael.gangloff/PRJROFCOZ/'
    })
  })

  it('should not login and not return token if no token is provided', async () => {
    mockedAxios.request.mockResolvedValue({
      data: {
        errmsg: null,
        success: false,
        authtoken: null
      }
    })
    await expect(Kdecole.login('mael.gangloff', 'PRJROFCOZ')).rejects.toThrowError()
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': '', 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/activation/mael.gangloff/PRJROFCOZ/'
    })
  })

  it('should not login and not return token if the version is incorrect', async () => {
    mockedAxios.request.mockResolvedValue({
      data: {
        errmsg: {
          titre: 'Version non supportée',
          code: 101,
          type: 'BLOCK',
          message: "La version de l'application mobile que vous utilisez n'est plus compatible.<br>Veuillez dès à présent télécharger la mise à jour pour profiter des nouveautés.<br>L'application se fermera dès que vous aurez cliqué sur le bouton OK.",
          tempsvalide: 10
        }
      }
    })
    await expect(Kdecole.login('mael.gangloff', 'PRJROFCOZ')).rejects.toThrow()
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': '', 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/activation/mael.gangloff/PRJROFCOZ/'
    })
  })
})
