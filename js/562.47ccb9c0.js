"use strict";(self["webpackChunkpokemons"]=self["webpackChunkpokemons"]||[]).push([[562],{5562:function(e,s,t){t.r(s),t.d(s,{default:function(){return O}});var a=t(3396),n=t(2268);const o={class:"page-container"},r={class:"card-container one-card"},l={class:"pokemon-exp-container"},i={class:"pokemon-avatar-container"},c=["src"],p={class:"pokemon-title-container"},_={class:"pokemon-ability-container"},d=(0,a._)("span",null,"Ability:",-1),k={class:"pokemon-stats-container"},m={class:"stat-container"},h={class:"progress-bar"},u=(0,a._)("span",null,"HP",-1),v={class:"stat-container"},g={class:"progress-bar"},b=(0,a._)("span",null,"Attack",-1),f={class:"stat-container"},C={class:"progress-bar"},S=(0,a._)("span",null,"Defense",-1),w={class:"stat-container"},$={class:"progress-bar"},y=(0,a._)("span",null,"S.Attack",-1),z={class:"stat-container"},A={class:"progress-bar"},D=(0,a._)("span",null,"S.Defense",-1),j={class:"stat-container"},P={class:"progress-bar"},x=(0,a._)("span",null,"Speed",-1);function E(e,s,t,E,H,q){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",r,[(0,a._)("div",l," EXP: "+(0,n.zw)(q.details.base_experience),1),(0,a._)("div",i,[(0,a._)("img",{onClick:s[0]||(s[0]=(...e)=>q.getCharacter&&q.getCharacter(...e)),src:q.pokemonAvatar},null,8,c)]),(0,a._)("div",p,(0,n.zw)(q.pokemon.name),1),(0,a._)("div",_,[d,(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(q.details.abilities,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e.ability.name},(0,n.zw)(e.ability.name.toUpperCase())+", ",1)))),128))])]),(0,a._)("div",k,[(0,a._)("div",m,[(0,a._)("div",h,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.hp)]),style:(0,n.j5)(`height: ${q.percent.hp}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats.hp),1)]),u]),(0,a._)("div",v,[(0,a._)("div",g,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.attack)]),style:(0,n.j5)(`height: ${q.percent.attack}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats.attack),1)]),b]),(0,a._)("div",f,[(0,a._)("div",C,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.defense)]),style:(0,n.j5)(`height: ${q.percent.defense}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats.defense),1)]),S]),(0,a._)("div",w,[(0,a._)("div",$,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.specialAttack)]),style:(0,n.j5)(`height: ${q.percent.specialAttack}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats["special-attack"]),1)]),y]),(0,a._)("div",z,[(0,a._)("div",A,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.specialDefense)]),style:(0,n.j5)(`height: ${q.percent.specialDefense}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats["special-defense"]),1)]),D]),(0,a._)("div",j,[(0,a._)("div",P,[(0,a._)("div",{class:(0,n.C_)(["progress-bar__line",q.color(q.percent.speed)]),style:(0,n.j5)(`height: ${q.percent.speed}%`)},null,6),(0,a._)("span",null,(0,n.zw)(q.pokemonStats.speed),1)]),x])])])])}var H={methods:{color(e){return e<=25?"red":e>25&&e<=50?"green":e>50&&e<=75?"blue":"yellow"},getCharacter(){console.log(this.$store.getters.pokemonCharacteristic)}},computed:{pokemon(){return this.$store.getters.activePokemon},details(){return this.$store.getters.pokemonCharacteristic},pokemonStats(){let e={};return this.details.stats.forEach((s=>{e=Object.assign(e,{[s.stat.name]:s.base_stat})})),e},percent(){return{hp:this.pokemonStats.hp/200*100,attack:this.pokemonStats.attack/200*100,defense:this.pokemonStats.defense/200*100,specialAttack:this.pokemonStats["special-attack"]/200*100,specialDefense:this.pokemonStats["special-defense"]/200*100,speed:this.pokemonStats.speed/200*100}},pokemonAvatar(){return`https://img.pokemondb.net/sprites/home/normal/${this.pokemon.name}.png`}},mounted(){let e="";this.pokemon.url?e=this.pokemon.url:(e=`https://pokeapi.co/api/v2/pokemon/${this.$route.params.name}`,this.$store.commit("pushActivePokemon",{name:this.$route.params.name,url:e})),this.$store.dispatch("requestCharacteristics",e)}},q=t(89);const K=(0,q.Z)(H,[["render",E]]);var O=K}}]);
//# sourceMappingURL=562.47ccb9c0.js.map