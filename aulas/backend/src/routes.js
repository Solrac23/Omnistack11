const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentsController = require('./controllers/IncidentsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')


const routes = express.Router()

// Rota de login.
routes.post('/sessions', SessionController.create)

// rotas da ongs.
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

// Listar perfil do caso.
routes.get('/profile', ProfileController.index)

// rotas para cadastro de incidentes etc.
routes.get('/incidents', IncidentsController.index)
routes.post('/incidents', IncidentsController.create)
routes.delete('/incidents/:id', IncidentsController.delete)

module.exports = routes