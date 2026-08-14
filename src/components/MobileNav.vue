<script>
export default {
    data(){
        return{
            navList:[
                {
                name:"Games",
                link: ""},
                 {
                name:"Browse",
                link: ""},
                 {
                name:"Platform",
                link: ""},
                 {
                name:"Reviews",
                link: ""},
                 {
                name:"Login",
                link: ""},

               
        ]

        }
    },
    props:['showBar'],
    emits:['close','showLogoutModal'],

}
</script>
<template>
    <div v-if="showBar" class="fixed inset-0 bg-black/50 z-50" @click="$emit('close')">
    <div v-if="showBar" @click.stop class=" absolute top-0 right-0 min-h-screen w-[200px] bg-black absolute z-100 rounded-l-xl p-5">
        <div class="flex flex-col h-screen gap-10 text-white text-2xl cursor-pointer pb-10">
            <RouterLink to="/">
                <img src="../assets/images/logo/Front9-full-logo-dark.png" class="w-[200px] -mt-10 -mb-10">
            </RouterLink>
            <div class="flex flex-col gap-6 lg:hidden">
            <div class="flex items-cente gap-3 cursor-pointer">
                <div class="bg-white/20 rounded-full p-1 cursor-pointer hover:bg-white/15 "  ><img src="/icons/stars.svg" class="w-[25px]" alt="">
            </div>
                <p>Liked</p>
            
        </div>
        <div class="flex items-center gap-3 cursor-pointer">
            <img src="/icons/bell.svg" class="w-[30px]">
<p class="text-2xl">Notification </p>

</div>  
<div class="flex items-center gap-3 cursor-pointer">
    <img src="/icons/bag2.svg" class="w-[30px]">
<p class="text-2xl">Shop </p>

</div>  
<div class="flex items-center gap-3 cursor-pointer">
    <img src="/icons/profile2.svg" class="w-[30px]">
<p class="text-2xl">Profile </p>

</div>  

      </div>      
<div class="flex flex-col h-full justify-end items-center">
<div class="flex items-center gap-3 cursor-pointer content-end"  @click="$emit('showLogoutModal')">
<p class="text-2xl">Logout </p>
<img src="/icons/leave.svg" class="w-[30px]">
</div>  
        </div>
        </div>

    </div>
    </div>
</template>