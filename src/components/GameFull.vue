<script>
export default {
    data(){
        return {

        }
    },
    props:['title','thumbnail','platforms', 'genre', 'description','developer', 'screenshot', 'requirements'],
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
<div class="flex flex-col p-5 w-full items-center w-[1000px] gap-10">
    <div class="lg:relative flex flex-col lg:flex-row gap-10">
        <img :src="thumbnail" class="rounded-md lg:w-[1000px]" :alt="title" >
        <div class="lg:absolute flex flex-col justify-between gap-5 lg:gap-2 lg:bg-black/60 p-4  lg:w-[500px] lg:h-[250px] rounded-lg lg:rounded-r-lg 
        bottom-0  text-white  backdrop-blur-lg  border-white/20 shadow-xl">


            <div class="flex justify-end lg:justify-start">
                <p class="bg-[rgb(46,189,182)]/40 backdrop-blur-lg shadow-xl p-2 rounded-md text-xs">{{ genre }}</p>
            </div>
                <div class="flex flex-col mt-3 lg:mt-0 gap-2">
            <div class="text-3xl lg:text-5xl font-bold"><p class="text-[rgb(46,220,182)]">{{ title }}</p></div>
            <div>By {{ developer }}</div>
            </div>
           
            <div class="flex items-center gap-4 justify-between">
                <button class="bg-[rgb(46,189,182)] backdrop-blur-lg shadow-xl p-3 rounded-md w-[150px] lg:w-[200px] cursor-pointer">Play Now</button>
                <button class="bg-[rgb(46,189,182)]/40 backdrop-blur-lg  shadow-xl p-3   rounded-md w-[150px] lg:w-[200px] cursor-pointer"  >Add to Favorite</button>
            </div>
        </div>
        </div>
        
        <div class="text-white lg:w-[1000px]  backdrop-blur-lg shadow-xl rounded-md mt-5">
            <p class="text-4xl font-bold mb-4">What About The Game</p>
            <p>{{ description }}</p>
        </div>
<div class="flex flex-col lg:flex-row lg:w-[1000px] gap-3"> 
        <div v-for="picture in screenshot" :key="picture.id">
          <img :src="picture.image" :alt="title">
        </div>
</div>

<div class=" flex flex-col gap-7 text-white bg-[rgb(46,189,182)]/40 backdrop-blur-lg shadow-xl p-5 rounded-md mt-5 lg:w-[1000px]">
    <p class="text-4xl font-bold">Minimum Requirements</p>
    <div class="flex flex-col gap-3 text-lg">
        <p>{{ requirements.os }}</p>
        <p>Processor: {{ requirements.processor }}</p>
        <p>Memory: {{ requirements.memory }}</p>
        <p>Graphics: {{ requirements.graphics }}</p>
        <p>Storage: {{ requirements.storage }}</p>
    </div>

</div>
</div>
</template>