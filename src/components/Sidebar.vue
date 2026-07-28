<script>
import Subsection from './Subsection.vue';
import Toggle from './Toggle.vue';


export default {
    components: {
        Subsection,Toggle
    },
    data(){
        return{
            isShowBrowse: false,
            isShowPlatform: false,
            showBrowseCount:3,
            showPlatformCount:3,
            browse: [
                {title: "Platforms",
                 icon: "video-game.png"   
                },
                {title: "Stores",
                 icon: "download.png"   
                },
               {title: "Collections",
                 icon: "folder.png"   
                },
                 {title: "Reviews",
                 icon: "chat.png"   
                },
                 {title: "Genres",
                 icon: "ghost.png"   
                },
                {title: "Creators",
                 icon: "profile.png"   
                },
                {title: "Tags",
                 icon: "hashtag.png"   
                },
                 {title: "Developers",
                 icon: "coding.png"   
                },
                 {title: "Publishers",
                 icon: "box.png"   
                }, 
            ],

            platforms:[
                {title:"PC",
                 icon:"windows-platform-logo.png"   
                },
                 {title:"PlayStation",
                 icon:"playstation.png"   
                },
                {title:"Xbox",
                 icon:"x-box.png"   
                },
                 {title:"Nintendo",
                 icon:"nintendo-switch.png"   
                },
                {title:"IOS",
                 icon:"ios.png"   
                },
                 {title:"Andriod",
                 icon:"android.png"   
                },
                
                
            ]

        }
    },
    computed: {
        showBrowse(){
            return this.browse.slice(0,this.showBrowseCount)
        },
    
    showPlatform(){
            return this.platforms.slice(0,this.showPlatformCount)
        }
    },

    methods: {
        toggleBrowse(){
            this.isShowBrowse = !this.isShowBrowse
            if(this.showBrowseCount === 3){
                this.showBrowseCount = this.browse.length
            }
            else{
                this.showBrowseCount = 3
            }
            
        },
        togglePlatform(){
            this.isShowPlatform = !this.isShowPlatform
            if(this.showPlatformCount === 3){
                this.showPlatformCount = this.platforms.length
            }
            else{
                this.showPlatformCount = 3
            }
        }

    }

}
</script>
<template>
<div class="flex flex-col bg-black text-white w-[280px] p-10 text-2xl font-bold gap-5  border-r-1 border-r-[rgb(46,189,182)]">
    <p class="text-3xl">Home</p>
    <p >Reviews</p>
    <div class="flex flex-col gap-3">
    <p>New Releases</p>
    <div class="text-lg flex flex-col gap-2">
        <Subsection icon="star.png" text="Last 30 days"/>
        <Subsection icon="fire.png" text="This Week"/>
        <Subsection icon="skip-button.png" text="Next Week"/>
        <Subsection icon="calendar.png" text="Release calendar"/>
    </div>
    </div>
    <div class="flex flex-col gap-3">
    <p>Top</p>
    <div class="text-lg flex flex-col gap-2">
     <Subsection icon="trophy.png" text="Best of the year"/>
      <Subsection icon="bar-chart.png" text="Popular in 2026"/>
       <Subsection icon="crown.png" text="All Time in top 20"/>
       </div>
    </div>
    
    <div class="flex flex-col gap-3">
    <p class="">All Games</p>
    <div class="flex flex-col gap-3">
    <p>Browse</p>
    <div class="text-lg flex flex-col gap-2">
     
    <div v-for="genre in showBrowse" :key="genre.title">
        <Subsection :icon="genre.icon" :text="genre.title"/>
    </div>
<Toggle :boolean="isShowBrowse" @toggle="toggleBrowse" />
     </div>
     </div>
     <div class="flex flex-col gap-3">
    <p>Platforms</p>
     <div class="text-lg flex flex-col gap-2">
     
    <div v-for="genre in showPlatform" :key="genre.title">
        <Subsection :icon="genre.icon" :text="genre.title" @click="togglePlatform"/>
    </div>
<Toggle :boolean="isShowPlatform" @toggle="togglePlatform"/>
     </div>
    </div>
</div>
</div>
</template>