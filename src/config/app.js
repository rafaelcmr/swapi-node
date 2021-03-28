import express from 'express'
import { router } from '../routes/swapiRoute.js'

const app = express()
app.use(express.json())
app.use(router)

export { app }