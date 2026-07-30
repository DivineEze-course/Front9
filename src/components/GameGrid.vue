<script>
import { getGames } from '../../api/games';
import Header from './Header.vue';

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
        Header,GameCard
    },
    props: [
    'category',
    'platform',
    'genre'
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
}

}
</script>

<template>
    <div class="bg-black w-full p-5">
<Header />


<div  class="flex lg:grid grid-cols-4 gap-6  mt-10 ">
<div v-for="game in games" :key="game.id">
<GameCard :title="game.title" :genre="game.genre" :platforms="game.platform" :thumbnail="game.thumbnail" :description="game.short_description" />
</div>
</div>
</div>

</template>
