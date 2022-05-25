'use strict'

// creating a base name for the mongodb
const mongooseBaseName = 'Maps-express'

// create the mongodb uri for development and test
const database = {
  development: `mongodb://localhost/${mongooseBaseName}-development`,
  test: `mongodb://localhost/${mongooseBaseName}-test`
  // security: `authorization: enabled`,
  // setParameter: `authenticationMechanisms: SCRAM-SHA-1`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.MONGODB_URI || localDb

console.log('The Current Database: ',  currentDb)
module.exports = currentDb
