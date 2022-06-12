<template>
  <div class="page-container">
    <div class="card-container one-card">
      <div class="pokemon-exp-container">
        EXP: {{ details.base_experience }}
      </div>
      <div class="pokemon-avatar-container">
        <img v-on:click="getCharacter" v-bind:src="pokemonAvatar" />
      </div>
      <div class="pokemon-title-container">
        {{ pokemon.name }}
      </div>
      <div class="pokemon-ability-container">
        <span>Ability:</span>
        <div>
          <span v-for="item of details.abilities" v-bind:key="item.ability.name">
            {{ item.ability.name.toUpperCase() }}, 
          </span>
        </div>
      </div>
      <div class="pokemon-stats-container">
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.hp)"
              v-bind:style="`height: ${percent.hp}%`"
            ></div>
            <span>{{ pokemonStats.hp }}</span>
          </div>
          <span>HP</span>
        </div>
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.attack)"
              v-bind:style="`height: ${percent.attack}%`"
            ></div>
            <span>{{ pokemonStats.attack }}</span>
          </div>
          <span>Attack</span>
        </div>
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.defense)"
              v-bind:style="`height: ${percent.defense}%`"
            ></div>
            <span>{{ pokemonStats.defense }}</span>
          </div>
          <span>Defense</span>
        </div>
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.specialAttack)"
              v-bind:style="`height: ${percent.specialAttack}%`"
            ></div>
            <span>{{ pokemonStats["special-attack"] }}</span>
          </div>
          <span>S.Attack</span>
        </div>
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.specialDefense)"
              v-bind:style="`height: ${percent.specialDefense}%`"
            ></div>
            <span>{{ pokemonStats["special-defense"] }}</span>
          </div>
          <span>S.Defense</span>
        </div>
        <div class="stat-container">
          <div class="progress-bar">
            <div
              class="progress-bar__line"
              v-bind:class="color(percent.speed)"
              v-bind:style="`height: ${percent.speed}%`"
            ></div>
            <span>{{ pokemonStats.speed }}</span>
          </div>
          <span>Speed</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    color(percent) {
      if (percent <= 25) return "red";
      else if (percent > 25 && percent <= 50) return "green";
      else if (percent > 50 && percent <= 75) return "blue";
      return "yellow";
    },
    getCharacter() {
      console.log(this.$store.getters.pokemonCharacteristic);
    },
  },
  computed: {
    pokemon() {
      return this.$store.getters.activePokemon;
    },
    details() {
      return this.$store.getters.pokemonCharacteristic;
    },
    pokemonStats() {
      let stats = {};
      this.details.stats.forEach((element) => {
        stats = Object.assign(stats, {
          [element.stat.name]: element.base_stat,
        });
      });
      return stats;
    },
    percent() {
      return {
        hp: (this.pokemonStats.hp / 200) * 100,
        attack: (this.pokemonStats.attack / 200) * 100,
        defense: (this.pokemonStats.defense / 200) * 100,
        specialAttack: (this.pokemonStats["special-attack"] / 200) * 100,
        specialDefense: (this.pokemonStats["special-defense"] / 200) * 100,
        speed: (this.pokemonStats.speed / 200) * 100,
      };
    },
    pokemonAvatar() {
      return `https://img.pokemondb.net/sprites/home/normal/${this.pokemon.name}.png`;
    },
  },
  mounted() {
    let url = "";
    if (this.pokemon.url) {
      url = this.pokemon.url;
    } else {
      url = `https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`;
      this.$store.commit("pushActivePokemon", {
        name: this.$route.params.name,
        url: url,
      });
    }
    this.$store.dispatch("requestCharacteristics", url);
  },
};
</script>

<style>
.page-container {
  display: grid;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  flex-wrap: wrap;
  align-items: center;
}
.one-card {
  grid-template-rows: 1fr 4fr 1fr 1fr 50px;
  grid-gap: 5px;
}
.pokemon-exp-container {
  display: flex;
  justify-content: flex-end;
  font-size: 12px;
  color: rgb(87, 87, 87);
}
.pokemon-ability-container {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  align-items: flex-start;
  grid-gap: 15px;
  font-size: 10px;
}
.pokemon-stats-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}
.stat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
}
.stat-container > span {
  font-size: 8px;
  margin-top: 5px;
}

.progress-bar {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 18px;
  background: #dfe6e9;
  position: relative;
  border-radius: 2px;
}

.progress-bar__line {
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 2px;
}
.progress-bar > span {
  font-size: 9px;
  z-index: 3;
}
.green {
  background: #55efc4;
}

.blue {
  background: #74b9ff;
}

.red {
  background: #ff7675;
}
.yellow {
  background: #fdcb6e;
}
</style>
