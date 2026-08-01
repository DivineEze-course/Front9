<script>
import NavBar from './components/NavBar.vue';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import GameGrid from './components/GameGrid.vue';
import Filters from './components/Filters.vue';
import MobileNav from './components/MobileNav.vue';

export default {
    
    components: {
            NavBar, Sidebar, GameGrid, Filters, Header,MobileNav
        },

    data() {
        return {    
            search:"",
            

        currentCategory :{
            name:"",
            value: "",
        },
         currentPlatform  :{
            name:"Platforms",
            value: "",
        },
         currentGenres :{
            name: "Genre",
            value: "",
        },
        showBar :false
    }
    },

     methods: {
        toggleBar(){
            this.showBar = !this.showBar
            console.log(this.showBar)
        }
    }
}
</script>

<template>
    <div class="bg-black relative">
 <NavBar :search="search" @updateSearch="search = $event" @toggleBar="toggleBar()"/>
<div class="flex bg-black">
    <MobileNav :showBar="showBar" @close="showBar = false"/>
 <Sidebar />
 <div class="">
    <Header />
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
 </div>
</template>

<style >

</style>
