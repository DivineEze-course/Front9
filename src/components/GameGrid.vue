<script>
import { getGames } from '../../api/games';
import { RouterLink } from 'vue-router';

import GameCard from './GameCard.vue';
import GameSkeleton from './GameSkeleton.vue';
export default {
    data(){
        return{
        
            games:[],
            gamesToShow:6,
            loading: true
        }
    },

    methods: {
       async fetchGames() {
    const filters = {};

    if (this.platform?.value) {
        filters.platform = this.platform.value;
    }

    if (this.genre?.value) {
        filters.category = this.genre.value;
    }

    if (this.category?.value) {
        filters["sort-by"] = this.category.value;
    }

    this.games = await getGames(filters);
}
    },

    async mounted() {
        await this.fetchGames();
    this.loading = false;
    },
    components:{
       GameCard,RouterLink,GameSkeleton
    },
    props: [
    'category',
    'platform',
    'genre',
    'search'
    ],

    watch: {
    platform() {
        this.fetchGames();
    },

    genre() {
        this.fetchGames();
    },

    category() {
        this.fetchGames();
    }
},
computed: {
    filteredGames(){
        return this.games.filter(game =>
            game.title.toLowerCase().includes(this.search.toLowerCase())
        )
    },
    displayedGames(){
        return this.filteredGames.slice(0,this.gamesToShow)
    }
   
}

}
</script>

<template>
    <div class="bg-black w-full pt-5 ps-5 pe-5 lg:pe-0 lg:ps-0 mb-5">
        <div v-if="loading" class="flex flex-col gap-4 lg:grid grid-cols-3 lg:w-[1000px]">
        <GameSkeleton v-for="n in 6" :key="n" />
    </div>   
<div v-else class="flex flex-col tems-center justify-center lg:grid grid-cols-3 gap-6 ">
     
<RouterLink 
v-for="game in displayedGames" 
:key="game.id" 
:to="`/game/${game.id}`">
<GameCard :title="game.title" :genre="game.genre" :platforms="game.platform"
 :thumbnail="game.thumbnail" :short_description="game.short_description" />
</RouterLink>
</div>
<div class="flex justify-center mt-9 " v-if="filteredGames.length > gamesToShow">
    <div class="pe-9 ps-9 p-3 bg-[rgb(46,189,182)]  flex rounded-lg cursor-pointer hover:bg-[rgb(46,189,182)]/50  text-white"  @click="gamesToShow += 3">
 <p class="text-center">Show More</p>
 </div>
 </div>
    </div>


</template>
