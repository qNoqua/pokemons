export const actions = {
  async requestCharacteristics(context, url) {
    const response = await fetch(url, {
      method: "GET",
    });
    const result = await response.json();

    context.commit("setPokemonCharacteristic", result);
  },
};
