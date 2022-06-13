export const actions = {
  async requestPokemons(
    context,
    url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9"
  ) {
    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();
    context.commit("setPokemons", result);
  },
  async requestSearchData(context, search) {
    if (search === "") return context.dispatch("requestPokemons");
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`,
        {
          method: "GET",
        }
      );
      let results = [];

      if (response.status === 200) {
        const result = await response.json();
        result.forms.forEach(element => {
          results.push({
            name: element.name,
            url: `https://pokeapi.co/api/v2/pokemon/${element.name}`
          })
        });
      }
      context.commit("setPokemons", {
        count: results.length,
        next: null,
        previous: null,
        results: results,
      });
    } catch (e) {
      console.log(e);
    }
  },
};
