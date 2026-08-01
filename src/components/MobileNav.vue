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
    emits:['close']
}
</script>
<template>
    <div v-if="showBar" class="fixed inset-0 bg-black/50 z-50" @click="$emit('close')">
    <div v-if="showBar" @click.stop class=" absolute top-0 right-0 h-screen w-[200px] h-[600px] bg-black absolute z-100 rounded-l-xl p-5">
        <div class="flex items-center  justify-between">
            <p class="text-white text-3xl">Home</p>
            <div>
                <img src="/icons/close.png" class="w-[30px]" @click="$emit('close')">
            </div>
        </div>
        <div class="flex flex-col gap-5 mt-5">
        <div v-for="item in navList" :key="item.name" class=" text-white font-bold text-2xl">
            {{ item.name }}
        </div>
</div>
    </div>
    </div>
</template>