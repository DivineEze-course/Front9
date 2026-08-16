<script>
import logo from "../assets/images/logo/Front9-dark.png"
import logoMobile from "../assets/images/logo/Front9-text-only-dark.png"
import { useAuthStore } from "../stores/auth";
import { RouterLink } from "vue-router";
export default{
    data(){
        return {
            img: logo,
            img2: logoMobile
        }
    },
    computed: {
       user(){
        const authStore = useAuthStore();
            return authStore.user;
       }
    },
    props:['search'],
    emits:['updateSearch','toggleBar']
}
</script>
<template>
    <div class=" hidden lg:flex p-6 bg-black gap-20 justify-center items-center z-10 w-full">
        <RouterLink to="/">
        
        <img :src="img" alt="Front9-dark" class="hidden lg:block lg:w-[200px]">
        </RouterLink>
        <input :value="search" 
        @input="$emit('updateSearch', $event.target.value)" 
        type="search" placeholder="Search games..." 
        class=" text-[rgb(46,189,182)] w-[300px] lg:w-[760px] border-1 border-white/20 rounded-lg bg-gray-600/10 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">
        

        <div v-if="user" class="flex items-center gap-5 text-white">
            <div class="bg-white/20 rounded-full p-1 cursor-pointer hover:bg-white/15"  ><img src="/icons/stars.svg" class="w-[25px]" alt=""></div>
            <div class=" rounded-full p-1 cursor-pointer hover:bg-white/15"  ><img src="/icons/bell.svg" class="w-[25px]" alt=""></div>
            <div class=" rounded-full p-1 cursor-pointer hover:bg-white/15" ><img src="/icons/bag2.svg" class="w-[25px]" alt=""></div>
            <div class=" rounded-full p-1 cursor-pointer hover:bg-white/15" @click="$emit('toggleBar')" ><img src="/icons/profile2.svg" class="w-[25px]" alt=""></div>

            
        </div>


        <div v-else class=" hidden lg:flex font-bold text-[rgb(46,189,182)] gap-10 text-lg">
        
        <RouterLink to="/login">    <p class=" p-1 ps-2 pe-2 backdrop-blur-lg  border border 
        border-white/20 shadow-xl overflow-hidden transition hover:scale-102 
        hover:bg-white/15 rounded-md  cursor-pointer"
        >Login</p>
        </RouterLink>
        
        </div>
    </div>
    <div class="flex  lg:hidden items-center gap-10  justify-around  cursor-pointer p-5">
            <RouterLink to="/">
                <img :src="img"  class="w-[360px]">
            </RouterLink>
              

        <input :value="search" 
        @input="$emit('updateSearch', $event.target.value)" 
        type="search" placeholder="Search games..." 
        class="text-[rgb(46,189,182)] w-full border-1 font-bold border-gray-200/50 rounded-lg bg-gray-600/10 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">

        <div class=" w-[120px]" @click="$emit('toggleBar')">
        <img src="/icons/menu.png" class="w-[20px]" alt="">
        </div>

    </div>
</template>
