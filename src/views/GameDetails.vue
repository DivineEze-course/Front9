<script>
import { getGame } from "../../api/games";
import NavBar from "../components/NavBar.vue";
import GameFull from "../components/GameFull.vue";
export default {
    components: {
        NavBar,GameFull
    },
    data(){
        return{
            game:null,
            loading:true,
            search:"",
            showBar:false
    }
},
methods:{
     toggleBar() {
        this.showBar = !this.showBar;
    },  
   async fetchGame(){
    try{
        const gameId = this.$route.params.id;
        this.game = await getGame(gameId);
        console.log(this.game)
    }
    catch(error){
        console.error("Error fetching game:", error);

    }
    finally{
        this.loading = false
    }
       
    }
},

async mounted(){
    await this.fetchGame();
    console.log(this.$route.params.id)
    }
}

</script>

<template>
    <div class=" bg-black">
    <div v-if="loading">
        <p>Loading...</p>
    </div>
    <div v-else class="">
        <NavBar :search="search" @updateSearch="search = $event" @toggleBar="toggleBar()"/>
        <div class="flex justify-center items-center">
        <GameFull 
            :title="game?.title"
            :thumbnail="game?.thumbnail"
            :platforms="game?.platform"
            :genre="game?.genre"
            :description="game?.description"
            :short_description="game?.short_description"
            :developer="game?.developer"
            :screenshot="game?.screenshots"
            :requirements="game?.minimum_system_requirements"
        />
        </div>
    </div>
    </div>
</template>