import Trimestre from './Trimestre'

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
      const surroundWithQuotes = (text: string) => text.indexOf(',') === -1 ? text : `"${text}"`
      const formatNumber = (number: number|null) => typeof number === 'number' && !isNaN(number) ? surroundWithQuotes(number.toFixed(2).replace('.', ',')) : ''
      const arrayToCSV = (array: any[]) => array.map(obj => Object.values(obj)).map(e => e.join(',')).join('\n')

      const devoirsHeader = ['Période', 'Matière', 'Date/Heure', 'Devoir', 'Coefficient', 'Barème', 'Note', 'Note minimale', 'Note maximale', 'Note moyenne', 'Note médiane', 'Facultatif', 'Comptabilisé']
      const trimestresHeader = ['Période', 'Moyenne générale élève']
      const matieresHeader = ['Période', 'Matière', 'Nombre de devoirs', 'Moyenne élève', 'Moyenne classe']

      return {
        devoirs: arrayToCSV([devoirsHeader, ...this.trimestres.map(({ periodeLibelle, matieres }) =>
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
                periodeLibelle: surroundWithQuotes(periodeLibelle),
                matiereLibelle: surroundWithQuotes(matiereLibelle),
                date,
                titreDevoir: surroundWithQuotes(titreDevoir),
                coefficient: formatNumber(coefficient),
                bareme: bareme % 1 === 0 ? bareme : formatNumber(bareme),
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
          }))]),
        trimestres: arrayToCSV([trimestresHeader, ...this.trimestres.map(trimestre => ({
          periodeLibelle: surroundWithQuotes(trimestre.periodeLibelle),
          moyenneGenerale: formatNumber(trimestre.getMoyenneGenerale())
        }))]),
        matieres: arrayToCSV([matieresHeader, ...this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({
          matiereLibelle,
          devoirs,
          moyenneEleve,
          moyenneClasse
        }) => ({
          periodeLibelle: surroundWithQuotes(periodeLibelle),
          matiereLibelle: surroundWithQuotes(matiereLibelle),
          devoirsLength: devoirs.length,
          moyenneEleve: formatNumber(moyenneEleve),
          moyenneClasse: formatNumber(moyenneClasse)
        }))).flat(2)])
      }
    }
}
