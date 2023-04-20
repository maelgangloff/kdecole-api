import axios from 'axios'
import AbsencesList from '../src/entities/VieScolaire/AbsencesList'
import { ApiUrl, ApiVersion, Kdecole } from '../src/index'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>
mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/fakeAbsences.json')
})

describe('Test Absence', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return absences', async () => {
    expect(await user.getAbsences()).toBeInstanceOf(AbsencesList)
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterAbsences/idetablissement/10485/'
    })
  })
  it('should call the right url and return absences of a specific student', async () => {
    await user.getAbsences('AAP05567')
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterAbsences/ideleve/AAP05567/'
    })
  })
})
