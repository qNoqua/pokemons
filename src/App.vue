<template>
  <component v-bind:is="layout" />
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  name: "App",
  components: {
    MainLayout,
  },
  computed: {
    layout() {
      return "MainLayout";
    },
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: #0c0c0c url(//static.pokemonpets.com/images/HomePage/pokemon-mmo-rpg-game-pets.webp) repeat;
  display: flex;
  justify-content: center;
}
#app {
  height: 100%;
  width: 100%;
  font-family: Nunito, sans-serif;  color: #4a4a4a;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
</style>
