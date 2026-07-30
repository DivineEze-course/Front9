<script>
import logo from "../assets/images/logo/Front9-dark.png"
export default{
    data(){
        return {
            img: logo
        }
    },
    props:['search'],
    emits:['updateSearch']
}
</script>
<template>
    <div class="flex p-10 bg-black gap-15 justify-center items-center z-10">
        <div>
        <img :src="img" alt="Front9-dark" class="w-[150px]">
        </div>
        <input :value="search" 
        @input="$emit('updateSearch', $event.target.value)" 
        type="search" placeholder="Search games..." 
        class="w-[760px] border-1 border-gray-200 rounded-lg bg-gray-200 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">
        
        <div class=" flex font-bold text-[rgb(46,189,182)] gap-10 text-lg">
        <p>Login</p>
        <p>Sign Up</p>
        <div>
            <img src="/icons/moon.png" class="w-[30px]">
        </div>
        </div>
    </div>
</template>
