import axios from 'axios'
import Releve from '../src/entities/Note/Releve'
import { Kdecole, ApiUrl, ApiVersion } from '../src/Kdecole'

const authToken = '0AnemIFGvcORx88ESDrvIflY0qRV2ussl0n31tC5Sh2U6xDZJ0E3VrD1RYzrWGX3rYUZK4nI3wLnbxZYQi2sKXMrGbgxIuq2ewjOpRYfWLSP0mLFK3D3CZVu7Ev2s'
const user = new Kdecole(authToken, ApiVersion.PROD_MON_BUREAU_NUMERIQUE, 10485)

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios> & jest.Mock<typeof axios>

mockedAxios.request.mockResolvedValue({
  data: require('./fakeData/fakeReleve.json')
})

describe('Test Releve', () => {
  beforeEach(() => {
    mockedAxios.mockClear()
  })
  it('should call the right url and return a releve', async () => {
    expect(await user.getReleve()).toBeInstanceOf(Releve)
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterReleves/idetablissement/10485/'
    })
  })
  it('should return moyenneGenerale and medianeGenerale', async () => {
    const releve = await user.getReleve()
    const expectedMoyennesGenerales = ['14.55', '15.83', null]
    expect(releve).toBeInstanceOf(Releve)
    for (const trimestre in releve.trimestres) {
      const moyenneGenerale = releve.trimestres[trimestre].getMoyenneGenerale()
      if (moyenneGenerale === null) {
        expect(moyenneGenerale).toBe(expectedMoyennesGenerales[trimestre])
      } else {
        expect(moyenneGenerale.toFixed(2)).toBe(expectedMoyennesGenerales[trimestre])
      }
    }
  })
  it('should return a releve of a specific student', async () => {
    await user.getReleve('AAP05567')
    expect(mockedAxios.request).toHaveBeenCalledWith({
      baseURL: ApiUrl.PROD_MON_BUREAU_NUMERIQUE,
      data: undefined,
      headers: { 'X-Kdecole-Auth': authToken, 'X-Kdecole-Vers': ApiVersion.PROD_MON_BUREAU_NUMERIQUE },
      validateStatus: expect.any(Function),
      method: 'get',
      responseType: 'json',
      url: '/consulterReleves/ideleve/AAP05567/'
    })
  })
  it('should return correct trimestres csv', async () => {
    const releve = await user.getReleve()
    expect(releve.exportCSV().trimestres).toBe(`Période,Moyenne générale élève
Premier trimestre,"14,55"
Deuxième trimestre,"15,83"
Troisième trimestre,`)
  })
  it('should return correct matieres csv', async () => {
    const releve = await user.getReleve()
    expect(releve.exportCSV().matieres).toBe(`Période,Matière,Nombre de devoirs,Moyenne élève,Moyenne classe
Premier trimestre,SPE_SPC,4,"19,00","16,00"
Premier trimestre,LCA LATIN,1,"15,50","16,50"
Premier trimestre,EMC,1,"17,00","16,50"
Premier trimestre,FRANC,4,"10,00","10,00"
Premier trimestre,EPS,1,"15,00","16,00"
Premier trimestre,ENSEIG_SCIENTIFIQUE,5,"15,50","11,50"
Premier trimestre,SPE_SVT,3,"14,50","14,50"
Premier trimestre,SPE_MATH,4,"19,00","13,00"
Premier trimestre,HIST-GEO,5,"12,50","13,00"
Premier trimestre,LVB_Allemand,8,"12,00","14,00"
Premier trimestre,LVA_Anglais,3,"10,00","11,50"
Deuxième trimestre,SPE_SPC,2,"15,50","15,00"
Deuxième trimestre,FRANC,1,"13,00","9,50"
Deuxième trimestre,ENSEIG_SCIENTIFIQUE,2,"18,50","14,50"
Deuxième trimestre,SPE_MATH,1,"20,00","15,50"
Deuxième trimestre,HIST-GEO,2,"14,00","15,00"
Deuxième trimestre,LVA_Anglais,2,"14,00","14,00"`)
  })
})
