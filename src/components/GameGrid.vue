<script>
import { getGames } from '../../api/games';
import Header from './Header.vue';
import Filters from './Filters.vue';
import GameCard from './GameCard.vue';
export default {
    data(){
        return{
            games:[],
            loading: true
        }
    },

    async mounted() {
        this.games = await getGames();
        this.loading = false;
    },
    components:{
        Header,Filters,GameCard
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
<!-- <div
    v-for="game in games"
    :key="game.id"
>
    <img :src="game.thumbnail">

    <h2>{{ game.title }}</h2>

    <p>{{ game.genre }}</p>

    <p>{{ game.platform }}</p>
</div> -->