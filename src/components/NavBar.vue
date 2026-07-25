<script>
import logo from "../assets/images/logo/Front9-text-only.png"
export default{
    data(){
        return {
            img: logo
        }
    }
}
</script>
<template>
    <div class="flex p-10 bg-white gap-15 justify-center items-center">
        <div>
        <img :src="img" alt="front-9-logo" class="w-[150px]">
        </div>
        <input type="search" placeholder="Search games" class="w-[760px] border-1 border-gray-200 rounded-lg bg-gray-200 p-2 hover:border-[rgb(46,189,182)] hover:border-2 focus:outline-[rgb(46,189,182)] focus:bg-white-">
        <div class=" flex font-bold text-[rgb(46,189,182)] gap-10 text-lg">
        <p>Login</p>
        <p>Sign Up</p>
        </div>
    </div>
</template>
