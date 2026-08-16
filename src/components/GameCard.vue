<script>
export default {
    data(){
        return {

        }
    },
    props:['title','thumbnail','platforms', 'genre', 'short_description'],
    methods: {
        getPlatformIcon(platform){
            switch (platform) {
                case "PC (Windows)":
                    return "/icons/windows.png";
                case "Web Browser":
                    return "/icons/web.png"
                    
                default:
                    return "/icons/video-game.png"

            }
        },
        descriptionShort(description){
            if(description.length > 55){
                return description.slice(0,55) + "...";
            }
            else{
                return description;
            }
        }
    }
}
</script>
<template>
<div class="flex flex-col gap-3 bg-white/20 backdrop-blur-lg border border border-white/20 shadow-xs   overflow-hidden transition hover:scale-102 hover:bg-white/15 p-3 rounded-lg w-full lg:w-[280px] cursor-pointer">
    <div class="w-full rounded-md">
        <img :src="thumbnail" class="rounded-md" :alt="title">
    </div>
    
    <div class="text-xl font-bold text-[rgb(46,189,182)]">
        {{ title }} 
    </div>
    <div class="text-white/60">
        {{ descriptionShort(short_description) }}
    </div>
    <div class="flex justify-between items-center">
        <div>
    <img :src="getPlatformIcon(platforms)" class="w-5">
    </div>
    <div class="bg-gray-300 p-2 rounded-sm">
    <p> {{ genre }}</p>
    </div>
    </div>
</div>
</template>