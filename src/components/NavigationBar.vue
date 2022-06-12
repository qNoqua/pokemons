<template>
  <div class="header">
    <input
      v-if="searchVisible"
      class="search"
      placeholder="Search"
      type="text"
      v-on:input="this.search"
      v-model="searchQuery"
    />
    <span v-else v-on:click="this.$router.push('/')" class="logo">Pokemons</span>
  </div>
</template>

<script>
import { debounce } from "@/utils/debounce";

export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      this.$store.dispatch("requestSearchData", this.searchQuery.toLowerCase());
    },
  },
  computed: {
    searchVisible() {
      return this.$store.getters.searchVisible;
    },
  },
  mounted() {
    this.search = debounce(this.search, 500);
  },
};
</script>

<style>
.header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: #607d8b;
  color: #fff;
  padding: 10px;
  z-index: 10;
}
.logo {
  margin: 5px;
  font-size: 24px;
  cursor: pointer;
}
.search {
  background: #8eacbb;
  border: none;
  border-radius: 5px;
  padding: 8px 15px;
  font-size: 20px;
  color: #fff;
  font-family: Nunito, sans-serif;
}
.search:focus {
  outline: 2px solid #607d8b;
  background: #809ba9;
}
.search::placeholder{
  opacity: 0.3;
  color: #fff;
}
</style>
