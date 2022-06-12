<template>
  <div>
    <div class="btn-container">
      <div class="btn-align-container">
        <button
          class="btn"
          v-bind:disabled="!pagination.previous"
          v-on:click="getPaginationUrl(pagination.previous)"
        >
          Previous
        </button>
        <button
          class="btn"
          v-bind:disabled="!pagination.next"
          v-on:click="getPaginationUrl(pagination.next)"
        >
          Next
        </button>
      </div>
    </div>
    <div class="pokemons-list--container">
      <PokemonCard
        class="pokemon-card"
        v-for="pokemon of getPokemons"
        v-bind:key="pokemon.name"
        v-bind:pokemon="pokemon"
        v-on:click="openPokemon(pokemon)"
      >
      </PokemonCard>
    </div>
    <div class="btn-container">
      <div class="btn-align-container">
        <button
          class="btn"
          v-bind:disabled="!pagination.previous"
          v-on:click="getPaginationUrl(pagination.previous)"
        >
          Previous
        </button>
        <button
          class="btn"
          v-bind:disabled="!pagination.next"
          v-on:click="getPaginationUrl(pagination.next)"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";
import { throttle } from "@/utils/throttle";

export default {
  components: {
    PokemonCard,
  },

  computed: {
    getPokemons() {
      return this.$store.getters.pokemons;
    },
    pagination() {
      return this.$store.getters.pagination;
    },
  },
  methods: {
    openPokemon(pokemon) {
      this.$store.commit("pushActivePokemon", pokemon);
      this.$router.push({ name: "detailed", params: { name: pokemon.name } });
    },
    getPaginationUrl(url) {
      this.loading = true;
      this.$store.dispatch("requestPokemons", url);
    },
  },
  mounted() {
        this.$store.dispatch("requestPokemons");

    this.getPaginationUrl = throttle(this.getPaginationUrl, 500);
  },
};
</script>

<style>
.pokemons-list--container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  grid-auto-rows: minmax(320px, min-content);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .pokemons-list--container {
    grid-template-columns: repeat(auto-fill, 250px);
  }
}
.btn-container {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 250px));
  grid-auto-rows: minmax(80px, min-content);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}

.btn-align-container {
  grid-column-end: -1;
}

.btn {
  padding: 10px;
  margin: 10px;
  width: 100px;
  background: #8eacbb;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  color: #34515e;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.5);
  transition: 200ms ease;
}
.btn:hover {
  background: #a2c4d5;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.5);
}
.btn:active {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.7);
  background: #809ba9;
}
.btn:disabled {
  opacity: 0.8;
  box-shadow: none;
  background: #8eacbb;
}
</style>
