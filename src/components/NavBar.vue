<script>
import logo from "../assets/images/logo/Front9-dark.png"
import logoMobile from "../assets/images/logo/Front9-text-only-dark.png"
export default{
    data(){
        return {
            img: logo,
            img2: logoMobile
        }
    },
    props:['search'],
    emits:['updateSearch','toggleBar']
}
</script>
<template>
    <div class=" hidden lg:flex p-10 bg-black gap-20 justify-center items-center z-10">
        <div>
        
        <img :src="img" alt="Front9-dark" class="hidden lg:block lg:w-[200px]">
        </div>
        <input :value="search" 
        @input="$emit('updateSearch', $event.target.value)" 
        type="search" placeholder="Search games..." 
        class=" w-[300px] lg:w-[760px] border-1 border-gray-200 rounded-lg bg-gray-200 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">
        


        <div class=" hidden lg:flex font-bold text-[rgb(46,189,182)] gap-10 text-lg">
        <p class=" p-1 ps-2 pe-2 bg-white/20 backdrop-blur-lg  border border border-white/20 shadow-xl overflow-hidden transition hover:scale-102 hover:bg-white/15 rounded-md  cursor-pointer">Login</p>
        <p class=" p-1 ps-2 pe-2 bg-white/20 backdrop-blur-lg  border border border-white/20 shadow-xl overflow-hidden transition hover:scale-102 hover:bg-white/15 rounded-md  cursor-pointer">Sign Up</p>
        <div>
            <img src="/icons/moon.png" class="w-[30px]">
        </div>
        </div>
    </div>
    <div class="flex flex-col lg:hidden items-center gap-5 justify-center ps-10 pe-10 cursor-pointer mb-10 pt-5">
        <div class="flex items-center gap-35">
        <div>
        <img :src="img"  >
        </div>
        <div class=" w-[120px]" @click="$emit('toggleBar')">
        <img src="/icons/menu.png" class="w-[50px]" alt="">
        </div>
        </div>

        <input :value="search" 
        @input="$emit('updateSearch', $event.target.value)" 
        type="search" placeholder="Search games..." 
        class=" w-full border-1 border-gray-200 rounded-lg bg-gray-200 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">
        

    </div>
</template>
