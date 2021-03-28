import axios from 'axios'
const { get }  = axios;

const URL = 'https://swapi.dev/api/planets'

async function obterPlaneta(nome) {
    const result = await get(`${URL}/?search=${nome}`)
    return result.data.results
}

export { obterPlaneta }