import { mongoose } from '../config/databaseConfig.js'

const PlanetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    terrain: {
        type: String,
        required: true
    },

    climate: {
        type:String,
        required: true,
    },
    qtdFilms: {
        type: Number,
        required: true,
    },
})

const Planet = mongoose.model('Planet', PlanetSchema)

export { Planet }