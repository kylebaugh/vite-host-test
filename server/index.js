import express from 'express'
import ViteExpress from 'vite-express'

import handlerFunctions from './controller.js'

const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Routes
const {register, login} = handlerFunctions

app.post('/api/register', register)
app.post('/api/login', login)

ViteExpress.listen(app, 5678, () => console.log('hit me up on http://localhost:5678'))