<script>
export default {
    props: ['icon', 'text'],
    data (){
        return {

        }
    }
}

</script>

<template>
    <div class="flex items-center gap-2 hover:scale-102 hover:bg-white/10 p-1 rounded-sm cursor-pointer">
            <div class="p-2 bg-white/40 backdrop-blur-lg border border border-white/20 shadow-xl overflow-hidden transition hover:scale-102 hover:bg-white/25 rounded-sm ">
            <img :src="`icons/${icon}`" class="w-[20px]">
            </div>
            <p>{{text}}</p>
        </div>
</template>