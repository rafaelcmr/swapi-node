import assert from 'assert'
import { obterPlaneta } from '../src/util/swapiUtil.js'

describe('Star Wars Api Tests', () => {

    it('Should return Tatooine when search by name', async () => {
        let name = 'Tatooine'
        let expected = { name: 'Tatooine' }
        const result = await obterPlaneta(name)
        const awnser = {name: result[0].name}
        assert.deepStrictEqual(expected, awnser)
    })

})