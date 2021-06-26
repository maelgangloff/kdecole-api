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

  it('should return correct devoirs csv', async () => {
    const releve = await user.getReleve()
    expect(releve.exportCSV().devoirs).toBe(`Période,Matière,Date/Heure,Devoir,Coefficient,Barème,Note,Note minimale,Note maximale,Note moyenne,Note médiane,Facultatif,Comptabilisé
Premier trimestre,LVB_Allemand,04/09/2020 13:00:00,Dev. 04/09/20~1ERE1,"1,00",20,,"20,00","20,00","20,00","20,00",non,non
Premier trimestre,LVB_Allemand,04/09/2020 13:00:00,Dev. 04/09/20~1ERE1 (1),"1,00",20,"10,00","10,00","12,00","10,66","10,00",non,oui
Premier trimestre,LVB_Allemand,07/09/2020 11:05:00,Dev. 07/09/20~1ERE1,"1,00",20,"13,00","3,00","20,00","13,57","14,50",non,oui
Premier trimestre,LCA LATIN,22/09/2020 00:00:00,Dev. 22/09/20~LATIN_1ERE,"1,00",20,"15,50","14,00","20,00","16,56","15,75",non,oui
Premier trimestre,ENSEIG_SCIENTIFIQUE,24/09/2020 11:05:00,activité thèorie cellulaire,"1,00",20,"16,00","6,00","18,00","12,36","13,00",non,oui
Premier trimestre,ENSEIG_SCIENTIFIQUE,24/09/2020 11:05:00,activité+correction notés,"1,00",20,"15,00","5,00","19,00","10,60","10,00",non,oui
Premier trimestre,SPE_MATH,25/09/2020 00:00:00,Second degré,"1,00",20,"20,00","1,00","20,00","13,36","13,00",non,oui
Premier trimestre,SPE_MATH,25/09/2020 00:00:00,Second degré,"1,00",20,,,,,,non,non
Premier trimestre,FRANC,28/09/2020 08:00:00,Devoir maison Montaigne "3 d'entre eux...","1,00",20,"11,00","4,00","15,00","8,27","8,00",non,oui
Premier trimestre,SPE_SPC,29/09/2020 00:00:00,QCM Composition système,"1,00",20,"20,00","14,00","20,00","16,30","16,00",non,oui
Premier trimestre,HIST-GEO,30/09/2020 00:00:00,Dev. 30/09/20~1ERE1,"1,00",20,"14,00","2,00","19,00","9,23","9,00",non,oui
Premier trimestre,LVA_Anglais,30/09/2020 13:55:00,Evaluation Séquence 1,"1,00",20,"10,50","5,00","17,00","11,71","12,75",non,oui
Premier trimestre,LVB_Allemand,05/10/2020 11:05:00,Dev. 05/10/20~1ERE1,"1,00",20,"7,50","1,00","20,00","13,04","13,25",non,oui
Premier trimestre,LVB_Allemand,05/10/2020 11:05:00,Dev. 05/10/20~1ERE1 (1),"1,00",20,"16,00","6,00","20,00","14,50","15,00",non,oui
Premier trimestre,HIST-GEO,07/10/2020 00:00:00,Dev. 07/10/20~1ERE1,"1,00",20,"14,00","11,00","20,00","15,95","16,00",non,oui
Premier trimestre,ENSEIG_SCIENTIFIQUE,08/10/2020 11:05:00,DS n°1,"2,00",20,"14,00","1,25","17,00","9,99","10,63",non,oui
Premier trimestre,ENSEIG_SCIENTIFIQUE,08/10/2020 11:05:00,Bilan ,"0,50",20,"15,00","0,00","20,00","14,64","15,00",non,oui
Premier trimestre,LVB_Allemand,09/10/2020 12:30:00,Dev. 09/10/20~1ERE1,"1,00",20,"16,00","9,00","20,00","15,46","16,00",non,oui
Premier trimestre,EPS,11/10/2020 00:00:00,natation ,"1,00",20,"14,75","13,50","18,50","16,07","16,50",non,oui
Premier trimestre,SPE_SPC,13/10/2020 10:10:00,TP Electronégativité,"0,50",20,"13,00","13,00","20,00","17,38","19,00",non,oui
Premier trimestre,FRANC,14/10/2020 00:00:00,commentaire Montaigne en classe,"1,00",20,"9,00","5,00","14,00","10,24","10,00",non,oui
Premier trimestre,ENSEIG_SCIENTIFIQUE,15/10/2020 00:00:00,Activité Radioactivité,"1,00",20,"20,00","0,00","20,00","12,44","14,00",non,oui
Premier trimestre,HIST-GEO,15/10/2020 00:00:00,Dev. 15/10/20~1ERE1,"1,00",20,"8,00","0,00","20,00","9,19","8,00",non,oui
Premier trimestre,FRANC,02/11/2020 08:00:00,commentaire Chateaubriand,"1,00",20,"8,50","6,00","17,50","11,61","12,00",non,oui
Premier trimestre,SPE_SVT,04/11/2020 00:00:00,Dessin d'observation microscopique lichen,"0,50",20,"17,50","14,00","20,00","17,22","17,50",non,oui
Premier trimestre,SPE_MATH,04/11/2020 10:10:00,secoond degré,"3,00",20,"18,50","2,00","20,00","11,42","11,25",non,oui
Premier trimestre,LVA_Anglais,05/11/2020 08:00:00,Evaluation ''Civil Rights Heroes '',"0,50",20,"8,00","6,00","16,80","10,14","9,10",non,oui
Premier trimestre,FRANC,05/11/2020 08:55:00,La controverse de Valladolid,"1,00",20,"10,50","0,00","15,00","10,52","11,00",non,oui
Premier trimestre,HIST-GEO,09/11/2020 00:00:00,Dev. 09/11/20~1ERE1,"1,00",20,"13,00","6,00","20,00","17,15","18,00",non,oui
Premier trimestre,LVB_Allemand,09/11/2020 11:05:00,Dev. 09/11/20~1ERE1,"1,00",20,"11,00","0,00","20,00","12,36","12,50",non,oui
Premier trimestre,SPE_SPC,10/11/2020 10:10:00,DS1,"2,00",20,"20,00","8,00","20,00","14,50","15,00",non,oui
Premier trimestre,SPE_SVT,12/11/2020 00:00:00,Chapitre "Fonctionnement d'un écosystème","2,00",20,"15,00","7,00","17,75","13,30","13,25",non,oui
Premier trimestre,HIST-GEO,16/11/2020 00:00:00,Dev. 16/11/20~1ERE1,"1,00",20,"14,00","4,00","20,00","15,05","16,00",non,oui
Premier trimestre,LVB_Allemand,16/11/2020 11:05:00,Dev. 16/11/20~1ERE1,"1,00",20,"11,00","2,00","20,00","16,62","19,00",non,oui
Premier trimestre,SPE_SPC,17/11/2020 10:10:00,IE Géométrie molécules,"1,00",20,"20,00","11,00","20,00","18,76","20,00",non,oui
Premier trimestre,SPE_SVT,18/11/2020 08:00:00,Devoir maison : présentation écosystème,"1,00",20,"12,50","11,00","18,50","15,70","16,26",non,oui
Premier trimestre,EMC,18/11/2020 13:00:00,intégration sociale,"1,00",20,"17,00","13,00","19,00","16,36","17,00",non,oui
Premier trimestre,LVA_Anglais,19/11/2020 08:00:00,Participation orale,"0,50",20,"11,00","10,00","18,00","12,07","11,00",non,oui
Premier trimestre,SPE_MATH,20/11/2020 00:00:00,Interrogation préparée - Suites,"1,00",20,"20,00","12,00","20,00","17,54","18,50",non,oui
Deuxième trimestre,FRANC,23/11/2020 08:00:00,Commentaire Diderot,"1,00",20,"13,00","5,00","15,00","9,53","9,00",non,oui
Deuxième trimestre,ENSEIG_SCIENTIFIQUE,26/11/2020 11:05:00,DS n°2,"2,00",20,"19,50","7,00","19,50","13,98","13,75",non,oui
Deuxième trimestre,LVA_Anglais,02/12/2020 13:55:00,ECOUTER : South Africa's Born Frees,"0,50",20,"12,00","6,00","18,00","12,89","13,00",non,oui
Deuxième trimestre,HIST-GEO,03/12/2020 00:00:00,Dev. 03/12/20~1ERE1,"1,00",20,"14,00","10,00","20,00","15,29","15,00",non,oui
Deuxième trimestre,LVA_Anglais,03/12/2020 08:00:00,LIRE Born-Free South Africa,"1,00",20,"15,30","9,75","18,60","15,35","15,40",non,oui
Deuxième trimestre,SPE_SPC,08/12/2020 10:10:00,IE Polarité,"1,00",20,"15,50","0,00","20,00","13,75","15,75",non,oui
Deuxième trimestre,HIST-GEO,09/12/2020 00:00:00,Interrogation de rattrapage,"1,00",20,,"10,00","18,00","12,67","10,00",non,non
Deuxième trimestre,SPE_MATH,09/12/2020 10:10:00,les suites,"2,00",20,"20,00","6,00","20,00","15,33","15,50",non,oui
Deuxième trimestre,SPE_SPC,14/12/2020 00:00:00,TP Savons,"0,50",20,,"15,00","20,00","17,08","16,00",non,non
Deuxième trimestre,ENSEIG_SCIENTIFIQUE,18/12/2020 00:00:00,entendre le son devoir type EC,"2,00",20,"17,00","12,00","19,50","15,85","15,50",non,oui`)
  })
})
