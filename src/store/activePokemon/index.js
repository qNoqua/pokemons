import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const iniitialStateOfActivePokemon = { name: "", url: '' };
const iniitialStateOfPokemonCharacteristic = {
  abilities: [],
  base_experience: 0,
  height: 0,
  stats: [
    { base_stat: 0, stat: { name: "hp" } },
    { base_stat: 0, stat: { name: "attack" } },
    { base_stat: 0, stat: { name: "defense" } },
    { base_stat: 0, stat: { name: "special-attack" } },
    { base_stat: 0, stat: { name: "special-defense" } },
    { base_stat: 0, stat: { name: "speed" } },
  ],
  weight: 0,
};

export const activePokemonModule = {
  state: {
    activePokemon: iniitialStateOfActivePokemon,
    pokemonCharacteristic: iniitialStateOfPokemonCharacteristic,
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
