<script>
import FilterBtns from './FilterBtns.vue';


export default{
    components:{
        FilterBtns
    },

    data(){
        return {
            openDropdown:null,
            categories:[
                {name: '',
                value: ''
                },
                {name: 'Relevance',
                value: 'relevance'
                },
                {name: 'Popularity',
                value: 'popularity'
                },
                {name: 'Release',
                value: 'release-date'
                },
            ],
            platform:[
                {name: 'Platforms',
                value: ''
                },
                {name: 'PC',
                value: 'pc'
                },
                {name: 'Browser',
                value: 'browser'
                },
            ],
            genres:[
                {name: 'Genres',
                value: ''
                },
                {name: 'Shooter',
                value: 'shooter'
                },
                {name: 'Strategy',
                value: 'strategy'
                },
                {name: 'Action',
                value: 'action'
                },
                {name: 'Racing',
                value: 'racing'
                },
                {name: 'Sports',
                value: 'sports'
                },
                {name: 'Fighting',
                value: 'fighting'
                },
                {name: 'Fantasy',
                value: 'fantasy'
                },
                {name: 'Battle Royale',
                value: 'battle-royale'
                },
                {name: 'Anime',
                value: 'anime'
                },
                {name: 'Open World',
                value: 'open-world'
                },
                {name: 'Survival',
                value: 'survival'
                },
            ],
        }
    },
    methods:{
       toggleDropdown(name){
        this.openDropdown = this.openDropdown === name ? null : name;
       },
       selectCategory(item){
        this.$emit("updateCategory", item);
    },

    selectPlatform(item){
        this.$emit("updatePlatform", item);
    },

    selectGenres(item){
        this.$emit("updateGenres", item);
    },
    resetFilter(){
         this.$emit("updateCategory", this.categories[0]);
          this.$emit("updatePlatform", this.platform[0]);
          this.$emit("updateGenres", this.genres[0]);
    }

    },
    emits: [
    "updateCategory",
    "updatePlatform",
    "updateGenres",
    "resetFilter"
],
    props:['currentCategory','currentPlatform','currentGenres']

}
</script>

<template>
    <div class="lg:hidden">
    <div class="flex gap-3 mt-5 justify-center lg:justify-normal">
        <FilterBtns :name="currentCategory.name" order="Sort by:" :dropdownItems="categories" @toggle="toggleDropdown('categories')" :boolean="openDropdown === 'categories'" @select="selectCategory"/>
        <FilterBtns :name="currentPlatform.name" :dropdownItems="platform" @toggle="toggleDropdown('platform')" :boolean="openDropdown === 'platform'" @select="selectPlatform"/>
        <FilterBtns :name="currentGenres.name" :dropdown-items="genres" @toggle="toggleDropdown('genres')" :boolean="openDropdown === 'genres'" @select="selectGenres"/>

    </div>
    </div>

    <div class=" hidden lg:block p-4 border border-2 border-[rgb(46,189,182)]/15 rounded-lg ">
        <div class="flex justify-between items-center">
        <p class="text-[rgb(46,189,182)] text-xl font-bold">Filters</p>
        <p class="text-white font-bold text-xl cursor-pointer hover:text-white/60" @click="resetFilter() " >Reset</p>
        </div>
    <div class="flex flex-col gap-3 mt-5 justify-center lg:justify-normal">
        <FilterBtns :name="currentCategory.name" order="Sort by:" :dropdownItems="categories" @toggle="toggleDropdown('categories')" :boolean="openDropdown === 'categories'" @select="selectCategory"/>
        <FilterBtns :name="currentPlatform.name" :dropdownItems="platform" @toggle="toggleDropdown('platform')" :boolean="openDropdown === 'platform'" @select="selectPlatform"/>
        <FilterBtns :name="currentGenres.name" :dropdown-items="genres" @toggle="toggleDropdown('genres')" :boolean="openDropdown === 'genres'" @select="selectGenres"/>

    </div>
    </div>
</template>