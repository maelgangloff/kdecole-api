import Trimestre from './Trimestre'
import { createObjectCsvStringifier } from 'csv-writer'

export default class Releve {
    public trimestres: Array<Trimestre> = []

    constructor (releve: Array<{
        matieres: Array<{
            bareme: string
            moyenneEleve: string
            devoirs: Array<{
                note: string | null
                date: number
                medianeClasse: string | null
                sousMatiere: string | null
                noteMin: string | null
                appreciation: string | null
                bareme: number
                coefficient: number
                pjs: Array<any>
                id: number
                titreDevoir: string
                noteMax: string | null
                facultatif: boolean
                moyenne: string | null
                matiere?: string
                comptabilise: boolean
                commentaireDevoir: string
            }>
            enseignants: Array<string>
            matiereLibelle: string
            moyenneClasse: string
        }>
        idPeriode: number
        libelleClasse: string
        periodeLibelle: string
        periodeEnCours: boolean
        bareme: string
    }>) {
      releve.forEach(trimestre => this.trimestres.push(new Trimestre(trimestre)))
    }

    public exportCSV (): {devoirs: string, trimestres: string, matieres: string} {
      const ouiNon = (boolean: boolean) => boolean ? 'oui' : 'non'
      const formatNumber = (number: number|null) => typeof number === 'number' && !isNaN(number) ? number.toFixed(2).replace('.', ',') : ''

      const devoirsCsvStringifier = createObjectCsvStringifier({
        header: [
          { id: 'periodeLibelle', title: 'Période' },
          { id: 'matiereLibelle', title: 'Matière' },
          { id: 'date', title: 'Date/Heure' },
          { id: 'titreDevoir', title: 'Devoir' },
          { id: 'coefficient', title: 'Coefficient' },
          { id: 'bareme', title: 'Barème' },
          { id: 'note', title: 'Note' },
          { id: 'noteMin', title: 'Note minimale' },
          { id: 'noteMax', title: 'Note maximale' },
          { id: 'moyenne', title: 'Note moyenne' },
          { id: 'medianeClasse', title: 'Note médiane' },
          { id: 'facultatif', title: 'Facultatif' },
          { id: 'comptabilise', title: 'Comptabilisé' }
        ]
      })
      const trimestresCsvStringifier = createObjectCsvStringifier({
        header: [
          { id: 'periodeLibelle', title: 'Période' },
          { id: 'moyenneGenerale', title: 'Moyenne générale élève' }
        ]
      })
      const matieresCsvStringifier = createObjectCsvStringifier({
        header: [
          { id: 'periodeLibelle', title: 'Période' },
          { id: 'matiereLibelle', title: 'Matière' },
          { id: 'devoirsLength', title: 'Nombre de devoirs' },
          { id: 'moyenneEleve', title: 'Moyenne élève' },
          { id: 'moyenneClasse', title: 'Moyenne classe' }
        ]
      })
      return {
        devoirs: devoirsCsvStringifier.getHeaderString() + devoirsCsvStringifier.stringifyRecords(this.trimestres.map(({ periodeLibelle, matieres }) =>
          matieres.map(({ matiereLibelle, devoirs }) =>
            devoirs.map(({
              date,
              titreDevoir,
              coefficient,
              bareme,
              note,
              noteMin,
              noteMax,
              moyenne,
              medianeClasse,
              facultatif,
              comptabilise
            }) =>
              ({
                periodeLibelle,
                matiereLibelle,
                date,
                titreDevoir,
                coefficient: formatNumber(coefficient),
                bareme,
                note: formatNumber(note),
                noteMin: formatNumber(noteMin),
                noteMax: formatNumber(noteMax),
                moyenne: formatNumber(moyenne),
                medianeClasse: formatNumber(medianeClasse),
                facultatif: ouiNon(facultatif),
                comptabilise: ouiNon(comptabilise)
              })
            )))
          .flat(3)
          .sort((a, b) => a.date.getTime() - b.date.getTime()).map(devoir => ({
            ...devoir,
            date: `${devoir.date.toLocaleDateString()} ${devoir.date.toLocaleTimeString()}`
          }))),

        trimestres: trimestresCsvStringifier.getHeaderString() + trimestresCsvStringifier.stringifyRecords(this.trimestres.map(trimestre => ({
          periodeLibelle: trimestre.periodeLibelle,
          moyenneGenerale: formatNumber(trimestre.getMoyenneGenerale())
        }))),

        matieres: matieresCsvStringifier.getHeaderString() + matieresCsvStringifier.stringifyRecords(this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({
          matiereLibelle,
          devoirs,
          moyenneEleve,
          moyenneClasse
        }) => ({
          periodeLibelle,
          matiereLibelle,
          devoirsLength: devoirs.length,
          moyenneEleve: formatNumber(moyenneEleve),
          moyenneClasse: formatNumber(moyenneClasse)
        }))).flat(2))
      }
    }
}
