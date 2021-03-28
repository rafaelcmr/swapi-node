import { obterPlaneta } from '../util/swapiUtil.js'
import { Planet } from '../models/planetModel.js'

export async function getPlanetaSwapi(req, res) {
    const nome = req.params.name
    const result = await Planet.findOne({ name: nome})
    res.json({ result })
}

export async function savePlanet(req, res){
    const planet = await obterPlaneta(req.body.name)
    if(!planet) {
        return res.status(400).send({msg: 'Planet not exist.' })
    } else if(planet.length > 1) {
        return res.send({ msg: 'More than 1 planet found.' })
    }
    let films = planet[0].films.length
    const createdPlanet = {
        name: planet[0].name,
        terrain: planet[0].terrain,
        climate: planet[0].climate,
        qtdFilms: films
    }
    const result = await Planet.create( createdPlanet )
        res.json({result})

}

export async function listAllPlanets(req, res) {
    const list = await Planet.find();
    res.json({ list })
}