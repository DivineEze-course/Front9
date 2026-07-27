<script>
import NavBar from './components/NavBar.vue';
import Sidebar from './components/Sidebar.vue';
import GameGrid from './components/GameGrid.vue';

export default {
    components: {
            NavBar, Sidebar, GameGrid
        },

    data() {
        return {      
        
    }
    }
}
</script>

<template>
 <NavBar />
 <Sidebar />
 <GameGrid />
</template>

<style >

</style>
