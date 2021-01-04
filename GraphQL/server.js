const express = require('express')
const fs = require('fs')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const Kdecole = require(path.resolve(__dirname, '../dist/Kdecole.js')).default

const schema = buildSchema(fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf-8'))
const rootValue = {
    login: (obj, {username, password, appVersion}) => Kdecole.login(username, password, appVersion)
}

express().use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
})).listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')
