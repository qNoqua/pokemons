export const getters = {
    pokemons(state) {
        return state.data.results
    },
    pagination (state) {
        const {previous, next} = state.data;
        return {
            previous: previous,
            next: next
        }
    },
    loading (state) {
        return state.loading
    },
    searchVisible (state) {
        return state.searchVisible
    }
}