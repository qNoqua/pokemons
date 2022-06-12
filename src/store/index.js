import { createStore } from 'vuex'
import { pokemonsListModule } from '@/store/pokemonsList'
import { activePokemonModule } from '@/store/activePokemon'

const store = createStore ({
    modules: {
        pokemonsListModule,
        activePokemonModule,
    }
})

export default store