import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

const iniitialState = { results: [], count: 0, next: null, previous: null };

export const pokemonsListModule = {
  state: {
    data: iniitialState,
    searchVisible: false
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
