<script>
import NavBar from './components/NavBar.vue';
import Sidebar from './components/Sidebar.vue';
import GameGrid from './components/GameGrid.vue';
import Filters from './components/Filters.vue';

export default {
    
    components: {
            NavBar, Sidebar, GameGrid, Filters
        },

    data() {
        return {    
            search:"",
            

        currentCategory :{
            name:"All",
            value: "",
        },
         currentPlatform  :{
            name:"All Platforms",
            value: "",
        },
         currentGenres :{
            name: "All Genre",
            value: "",
        },
        
    }
    }
}
</script>

<template>
 <NavBar :search="search" @updateSearch="search = $event"/>
<div class="flex bg-black">
 <Sidebar />
 <div class="">
<Filters
    :currentCategory="currentCategory"
    :currentPlatform="currentPlatform"
    :currentGenres="currentGenres"

    @updateCategory="currentCategory = $event"
    @updatePlatform="currentPlatform = $event"
    @updateGenres="currentGenres = $event"
/>
<GameGrid
    :search="search"
    :category="currentCategory"
    :platform="currentPlatform"
    :genre="currentGenres"
/>
</div>
 </div>
</template>

<style >

</style>
