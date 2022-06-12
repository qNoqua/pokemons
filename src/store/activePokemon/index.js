import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const iniitialStateOfActivePokemon = { name: '', url: null };
const iniitialStateOfPokemonCharacteristic = {  };

export const activePokemonModule = {
  state: {
    activePokemon: iniitialStateOfActivePokemon,
    pokemonCharacteristic: iniitialStateOfPokemonCharacteristic,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
