"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trimestre_1 = __importDefault(require("./Trimestre"));
class Releve {
    trimestres = [];
    constructor(releve) {
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_1.default(trimestre)));
    }
    exportCSV() {
        const ouiNon = (boolean) => boolean ? 'oui' : 'non';
        const surroundWithQuotes = (text) => text.indexOf(',') === -1 ? text : `"${text}"`;
        const formatNumber = (number) => typeof number === 'number' && !isNaN(number) ? surroundWithQuotes(number.toFixed(2).replace('.', ',')) : '';
        const arrayToCSV = (array) => array.map(obj => Object.values(obj)).map(e => e.join(',')).join('\n');
        const devoirsHeader = ['Période', 'Matière', 'Date/Heure', 'Devoir', 'Coefficient', 'Barème', 'Note', 'Note minimale', 'Note maximale', 'Note moyenne', 'Note médiane', 'Facultatif', 'Comptabilisé'];
        const trimestresHeader = ['Période', 'Moyenne générale élève'];
        const matieresHeader = ['Période', 'Matière', 'Nombre de devoirs', 'Moyenne élève', 'Moyenne classe'];
        return {
            devoirs: arrayToCSV([devoirsHeader, ...this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({ matiereLibelle, devoirs }) => devoirs.map(({ date, titreDevoir, coefficient, bareme, note, noteMin, noteMax, moyenne, medianeClasse, facultatif, comptabilise }) => ({
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
                }))))
                    .flat(3)
                    .sort((a, b) => a.date.getTime() - b.date.getTime()).map(devoir => ({
                    ...devoir,
                    date: `${devoir.date.toLocaleDateString()} ${devoir.date.toLocaleTimeString()}`
                }))]),
            trimestres: arrayToCSV([trimestresHeader, ...this.trimestres.map(trimestre => ({
                    periodeLibelle: surroundWithQuotes(trimestre.periodeLibelle),
                    moyenneGenerale: formatNumber(trimestre.getMoyenneGenerale())
                }))]),
            matieres: arrayToCSV([matieresHeader, ...this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({ matiereLibelle, devoirs, moyenneEleve, moyenneClasse }) => ({
                    periodeLibelle: surroundWithQuotes(periodeLibelle),
                    matiereLibelle: surroundWithQuotes(matiereLibelle),
                    devoirsLength: devoirs.length,
                    moyenneEleve: formatNumber(moyenneEleve),
                    moyenneClasse: formatNumber(moyenneClasse)
                }))).flat(2)])
        };
    }
}
exports.default = Releve;
