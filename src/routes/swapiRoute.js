import { Router } from 'express'
import * as SwapiController from '../controllers/swapiController.js'

const router = Router()

router.post('/', SwapiController.savePlanet)
router.get('/:name', SwapiController.getPlanetaSwapi)
router.get('/planets/all', SwapiController.listAllPlanets)


export { router }