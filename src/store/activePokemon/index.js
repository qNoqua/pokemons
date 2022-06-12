import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const iniitialStateOfActivePokemon = { name: '', url: null };
const iniitialStateOfPokemonCharacteristic = { abilities: [], base_experience: 0, height: 0, stats: [{stat: {name:''}}], weight: 0 };

export const activePokemonModule = {
  state: {
    activePokemon: iniitialStateOfActivePokemon,
    pokemonCharacteristic: iniitialStateOfPokemonCharacteristic,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
