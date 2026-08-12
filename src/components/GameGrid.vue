<script>
import { getGames } from '../../api/games';
import { RouterLink } from 'vue-router';

import GameCard from './GameCard.vue';
export default {
    data(){
        return{
            
            games:[],
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
       GameCard,RouterLink
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
    }
}

}
</script>

<template>
    <div class="bg-black w-full pt-5 ps-5 pe-5 lg:pe-0 lg:ps-0">


<div  class="flex flex-col tems-center justify-center lg:grid grid-cols-3 gap-6 ">
<RouterLink 
v-for="game in filteredGames" 
:key="game.id" 
:to="`/game/${game.id}`">
<GameCard :title="game.title" :genre="game.genre" :platforms="game.platform"
 :thumbnail="game.thumbnail" :short_description="game.short_description" />
</RouterLink>
</div>
</div>

</template>
