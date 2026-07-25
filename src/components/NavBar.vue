<script>
import logo from "/Front9-text-only.png"
export default{
    data(){
        return {
            img: logo
        }
    }
}
</script>
<template>
    <div class="flex">
        <img :src="img" alt="front-9-logo">
        <input type="search" class="border-2">
        <p>Login</p>
        <p>Sign Up</p>
    </div>
</template>
