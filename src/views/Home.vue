<script>
import NavBar from '../components/NavBar.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import GameGrid from '../components/GameGrid.vue';
import Filters from '../components/Filters.vue';
import MobileNav from '../components/MobileNav.vue';
import GameSlideShow from '../components/GameSlideShow.vue';
export default {
    
    components: {
            NavBar, Sidebar, GameGrid, Filters, Header, MobileNav, GameSlideShow
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
    <div class="bg-black relative h-screen">
 <NavBar :search="search" @updateSearch="search = $event" @toggleBar="toggleBar()"/>
 <MobileNav :showBar="showBar" @close="showBar = false"/>

<div class="flex flex-col lg:hidden bg-black">
     <div class="p-4">
 <GameSlideShow />
 </div>
 <div class="flex flex-col">
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

 <div class="hidden lg:flex flex-col justify-center gap-10 bg-black p-5">
     <div class="p-4 flex justify-center">
 <GameSlideShow />
 </div>
 <div class="flex gap-15 justify-center">
    <div>
<Filters
    :currentCategory="currentCategory"
    :currentPlatform="currentPlatform"
    :currentGenres="currentGenres"

    @updateCategory="currentCategory = $event"
    @updatePlatform="currentPlatform = $event"
    @updateGenres="currentGenres = $event"
/>
</div>
<div>
<Header />
<GameGrid
    :search="search"
    :category="currentCategory"
    :platform="currentPlatform"
    :genre="currentGenres"
/>
</div>
</div>
 </div>
 </div>
</template>

<style >

</style>
