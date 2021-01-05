const express = require('express')
const bearerToken = require('express-bearer-token')
const fs = require('fs')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Kdecole = require(path.resolve(__dirname, '../dist/Kdecole.js')).default

const schema = buildSchema(fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf-8'))
const rootValue = {
    login: ({username, password}, req) => Kdecole.login(username, password, req.header('KDECOLE-VERSION')),
    logout: (args, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).logout(),
    releves: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getReleve(idEleve),
    actualites: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getActualites(idEleve),
    contenuArticle: ({uid}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getContenuArticle(uid),
    travailAFaire: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getTravailAFaire(idEleve),
    contenuActivite: ({uidSeance, uid, idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getContenuActivite(uidSeance, uid, idEleve),
    absences: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getAbsences(idEleve),
    infoUtilisateur: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getInfoUtilisateur(idEleve),
    calendrier: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getCalendrier(idEleve),
    dernieresNotes: ({idEleve}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getNotes(idEleve),
    messagerieInfo: (args, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getMessagerieInfo(),
    messagerieBoiteReception: (args, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getMessagerieBoiteReception(),
    communication: ({id}, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).getCommunication(id),
    appels: (args, req) => new Kdecole(req.token, req.header('KDECOLE-VERSION'), req.header('idEtablissement'), req.header('apiURL')).gestionAppels()
}

express()
    .use(bearerToken())
    .use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}))
    .listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
