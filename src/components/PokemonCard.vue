<template>
  <div class="card-container">
    <div class="pokemon-avatar-container">
      <img class="pokemon-avatar" v-bind:src="pokemonAvatar" />
    </div>
    <div class="pokemon-title-container">{{ pokemon.name }}</div>
    <span class="pokemon-description-container">Click on the card to see more..</span>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    pokemonAvatar() {
      return `https://img.pokemondb.net/sprites/home/normal/${this.pokemon.name}.png`;
    },
  },
};
</script>

<style>
.pokemon-description-container {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 15px;
  font-size: 10px;
}
</style>
