<script>
import { getGame } from "../../api/games";
import NavBar from "../components/NavBar.vue";
import GameFull from "../components/GameFull.vue";
import GameSkeleton from '../components/GameSkeleton.vue';
import MobileNav from "../components/MobileNav.vue";
export default {
    components: {
        NavBar,GameFull,GameSkeleton,MobileNav
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
    <div v-if="loading" class=" flex flex-col h-screen bg-black gap-10 p-6 lg:p-10">
        <GameSkeleton/>
        <GameSkeleton/>
    </div>
    <div v-else class="bg-black h-full">
    
    <div class="">
        <NavBar :search="search" @updateSearch="search = $event" @toggleBar="toggleBar()"/>
        <MobileNav
            :showBar="showBar"
            @close="showBar = false"
            @showLogoutModal="showLogoutModal = true"
        />
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