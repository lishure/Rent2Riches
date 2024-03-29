// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies

/* eslint-disable  no-unused-vars */
const mysql = require('mysql')
/* eslint-enable  no-unused-vars */

const ENV = process.env.NODE_ENV || 'development'

// Creates mySQL connection using Knex.js
const Knex = require('knex')(require('../knexfile')[ENV])

// Exports the connection for other files to use
module.exports = Knex
