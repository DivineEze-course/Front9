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
                {name: 'All',
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
                {name: 'All Platforms',
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
                {name: 'All Genres',
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
    }

    },
    emits: [
    "updateCategory",
    "updatePlatform",
    "updateGenres"
],
    props:['currentCategory','currentPlatform','currentGenres']

}
</script>

<template>
    <div class="flex gap-3 mt-5 justify-center lg:justify-normal">
        <FilterBtns :name="currentCategory.name" order="Sort by:" :dropdownItems="categories" @toggle="toggleDropdown('categories')" :boolean="openDropdown === 'categories'" @select="selectCategory"/>
        <FilterBtns :name="currentPlatform.name" :dropdownItems="platform" @toggle="toggleDropdown('platform')" :boolean="openDropdown === 'platform'" @select="selectPlatform"/>
        <FilterBtns :name="currentGenres.name" :dropdown-items="genres" @toggle="toggleDropdown('genres')" :boolean="openDropdown === 'genres'" @select="selectGenres"/>

    </div>
</template>