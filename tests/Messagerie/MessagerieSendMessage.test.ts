import axios from 'axios'
import { Kdecole, ApiVersion, ApiUrl } from '../../src/Kdecole'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: {}
})

describe('Test Messagerie send a message', () => {
  const RealNow = Date.now
  beforeAll(() => {
    global.Date.now = jest.fn(() => new Date('2021-06-20T12:55:30Z').getTime())
  })

  afterAll(() => {
    global.Date.now = RealNow
  })

  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url', async () => {
    const mockDate = new Date(1609095076)
    const spy = jest
      .spyOn(global, 'Date')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .mockImplementation(() => mockDate)
    await user.sendMessage(123456, 'test')
    expect(mockedAxios.request).toBeCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: {
        dateEnvoi: (new Date()).getTime(),
        corpsMessage: 'test'
      },
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'put',
      responseType: 'json',
      url: '/messagerie/communication/nouvelleParticipation/123456/'
    })
    spy.mockRestore()
  })
})
