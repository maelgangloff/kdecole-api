"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Trimestre_1 = __importDefault(require("./Trimestre"));
const csv_writer_1 = require("csv-writer");
class Releve {
    trimestres = [];
    constructor(releve) {
        releve.forEach(trimestre => this.trimestres.push(new Trimestre_1.default(trimestre)));
    }
    exportCSV() {
        const ouiNon = (boolean) => boolean ? 'oui' : 'non';
        const formatNumber = (number) => typeof number === 'number' && !isNaN(number) ? number.toFixed(2).replace('.', ',') : '';
        const devoirsCsvStringifier = csv_writer_1.createObjectCsvStringifier({
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
        });
        const trimestresCsvStringifier = csv_writer_1.createObjectCsvStringifier({
            header: [
                { id: 'periodeLibelle', title: 'Période' },
                { id: 'moyenneGenerale', title: 'Moyenne générale élève' }
            ]
        });
        const matieresCsvStringifier = csv_writer_1.createObjectCsvStringifier({
            header: [
                { id: 'periodeLibelle', title: 'Période' },
                { id: 'matiereLibelle', title: 'Matière' },
                { id: 'devoirsLength', title: 'Nombre de devoirs' },
                { id: 'moyenneEleve', title: 'Moyenne élève' },
                { id: 'moyenneClasse', title: 'Moyenne classe' }
            ]
        });
        return {
            devoirs: devoirsCsvStringifier.getHeaderString() + devoirsCsvStringifier.stringifyRecords(this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({ matiereLibelle, devoirs }) => devoirs.map(({ date, titreDevoir, coefficient, bareme, note, noteMin, noteMax, moyenne, medianeClasse, facultatif, comptabilise }) => ({
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
            }))))
                .flat(3)
                .sort((a, b) => a.date.getTime() - b.date.getTime()).map(devoir => ({
                ...devoir,
                date: `${devoir.date.toLocaleDateString()} ${devoir.date.toLocaleTimeString()}`
            }))),
            trimestres: trimestresCsvStringifier.getHeaderString() + trimestresCsvStringifier.stringifyRecords(this.trimestres.map(trimestre => ({
                periodeLibelle: trimestre.periodeLibelle,
                moyenneGenerale: formatNumber(trimestre.getMoyenneGenerale())
            }))),
            matieres: matieresCsvStringifier.getHeaderString() + matieresCsvStringifier.stringifyRecords(this.trimestres.map(({ periodeLibelle, matieres }) => matieres.map(({ matiereLibelle, devoirs, moyenneEleve, moyenneClasse }) => ({
                periodeLibelle,
                matiereLibelle,
                devoirsLength: devoirs.length,
                moyenneEleve: formatNumber(moyenneEleve),
                moyenneClasse: formatNumber(moyenneClasse)
            }))).flat(2))
        };
    }
}
exports.default = Releve;
