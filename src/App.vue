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
 <NavBar />
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
    :category="currentCategory"
    :platform="currentPlatform"
    :genre="currentGenres"
/>
</div>
 </div>
</template>

<style >

</style>
