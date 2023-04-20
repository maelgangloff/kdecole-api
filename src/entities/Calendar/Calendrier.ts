import ListeJourCdt from './ListeJourCdt'

export default class Calendrier {
  public currentDate: Date
  public listeJourCdt: ListeJourCdt[] = []
  public cdtOuvert: boolean
  private readonly errmsg: string | null

  constructor (calendrier: {
    errmsg: string | null
    currentDate: number
    listeJourCdt: Array<{
      listeSeances: Array<{
        hdeb: number
        enSeance: Array<{
          type: string
          uid: number
          date: number
          titre: string
        }> | null
        matiere: string
        aFaire: Array<{
          type: string
          uid: number
          date: number
          titre: string
        }> | null
        heureFin: string
        flagModif: boolean
        titre: string
        flagActif: boolean
        heureDebut: string
        hfin: number
        aRendre: Array<{
          type: string
          uid: number
          date: number
          titre: string
        }> | null
        motifModif: string | null
        idSeance: number
        salle: string
      }>
      date: number
    }>
    cdtOuvert: boolean
  }) {
    this.errmsg = calendrier.errmsg
    this.currentDate = new Date(calendrier.currentDate)
    this.cdtOuvert = calendrier.cdtOuvert
    calendrier.listeJourCdt.forEach(listeJourCdt => this.listeJourCdt.push(new ListeJourCdt(listeJourCdt)))
  }

  /**
     * Générer un iCalendar de l'emploi du temps
     * @param {number} weeks Nombre de semaines
     * @param {string} name Le nom du calendrier
     * @returns {string} L'emploi du temps au format iCalendar
     */
  public toICalendar (weeks = 2, name = 'Emploi du temps'): string {
    const convertDT = (d: Date): string => d.toISOString().replace(/[-:.]/g, '').replace('000Z', 'Z')

    const numberOfWeek = (d1: Date, d2: Date): number => ((d1.getTime() - d2.getTime()) / (7 * 24 * 60 * 60 * 1000))

    const getMonday = (d: Date): Date => new Date(new Date(d.setDate((d.getDate() - d.getDay()) + (d.getDay() === 0 ? -6 : 1))).setHours(0, 0, 0, 0))

    return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//kdecole-api//ical//EN
METHOD:PUBLISH
TZID:Europe/Paris
NAME:${name}
X-WR-CALNAME:${name}
` + this.listeJourCdt
      .filter(jour => getMonday(this.currentDate) <= jour.date && numberOfWeek(jour.date, this.currentDate) < weeks)
      .map(jour => jour.listeSeances).flat()
      .filter(seance => seance.flagActif)
      .reduce((acc, seance) =>
        acc + `BEGIN:VEVENT
DTSTAMP:${convertDT(this.currentDate)}
SEQUENCE:${seance.flagModif ? '1' : '0'}
UID:${seance.idSeance}@kdecoleapi
DTSTART:${convertDT(seance.hdeb)}
DTEND:${convertDT(seance.hfin)}
STATUS:${seance.flagActif ? 'CONFIRMED' : 'CANCELLED'}
SUMMARY:${seance.matiere} ${seance.salle.split(' -')[0]}
DESCRIPTION:UID: ${seance.idSeance}
LOCATION:${seance.salle}
END:VEVENT
`, '') + 'END:VCALENDAR'
  }
}
