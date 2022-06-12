<template>
  <div class="header">
    <span v-on:click="this.$router.push('/')" class="logo">Pokemons</span>
    <input
      v-if="searchVisible"
      class="search"
      placeholder="Search"
      type="text"
      v-on:input="this.search"
      v-model="searchQuery"
    />
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #607d8b;
  color: #fff;
  padding: 10px;
}
.logo {
  margin: 10px;
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
