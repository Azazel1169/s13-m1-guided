// IMPORTS AT THE TOP
const express = require('express')
const morgan = require('morgan')
// INSTANCE OF EXPRESS APP
const dogRoutes = require('./dog-routes')

const server = express()
// GLOBAL MIDDLEWARE
server.use(express.json())
server.use(morgan('dev'))
// ENDPOINTS

server.use('/api/dogs', dogRoutes)

// [GET]    /             (Hello World endpoint)
// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server
