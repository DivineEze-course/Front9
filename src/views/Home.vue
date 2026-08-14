<script>
import NavBar from '../components/NavBar.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
import GameGrid from '../components/GameGrid.vue';
import Filters from '../components/Filters.vue';
import MobileNav from '../components/MobileNav.vue';
import GameSlideShow from '../components/GameSlideShow.vue';
import GameSkeleton from '../components/GameSkeleton.vue';
import LogoutModal from '@/components/LogoutModal.vue';

import { useAuthStore } from '../stores/auth';
export default {
    
    components: {
            NavBar, Sidebar, GameGrid, Filters, Header, MobileNav, GameSlideShow,GameSkeleton,LogoutModal
        },

    data() {
        return {    
            search:"",
            
            

        currentCategory :{
            name:"",
            value: "",
        },
         currentPlatform  :{
            name:"Platforms",
            value: "",
        },
         currentGenres :{
            name: "Genre",
            value: "",
        },
        showBar :false,
        showLogoutModal:false,
    }
    },

     methods: {
        toggleBar(){
            this.showBar = !this.showBar
           
        },
        async logout(){
            const authstore = useAuthStore()
            await authstore.logout();
            this.showLogoutModal = false;
            this.$router.push('/login')

        }
        
    },
    computed: {
    isSearching() {
        return this.search.trim().length > 0;
    }
}
}
</script>

<template>
    <div class="bg-black min-h-screen">

        <!-- Navbar -->
        <NavBar
            :search="search"
            @updateSearch="search = $event"
            @toggleBar="toggleBar"
        />

        <!-- Mobile navigation -->
        <MobileNav
            :showBar="showBar"
            @close="showBar = false"
            @showLogoutModal="showLogoutModal = true"
        />

        <!-- Logout Modal -->
        <LogoutModal
            :show="showLogoutModal"
            @close="showLogoutModal = false"
            @confirm="logout"
        />


        <!-- ========================= -->
        <!-- NORMAL HOMEPAGE -->
        <!-- ========================= -->

        <div v-if="!isSearching">

            <!-- MOBILE -->
            <div class="flex flex-col lg:hidden bg-black">

                <div class="p-4">
                    <GameSlideShow />
                </div>

                <div class="flex flex-col">

                    <Header />

                    <Filters
                        :currentCategory="currentCategory"
                        :currentPlatform="currentPlatform"
                        :currentGenres="currentGenres"

                        @updateCategory="currentCategory = $event"
                        @updatePlatform="currentPlatform = $event"
                        @updateGenres="currentGenres = $event"
                    />

                    <GameGrid
                        :search="search"
                        :category="currentCategory"
                        :platform="currentPlatform"
                        :genre="currentGenres"
                    />

                </div>

            </div>


            <!-- DESKTOP -->
            <div class="hidden lg:flex flex-col justify-center gap-10 bg-black p-5">

                <div class="p-4 flex justify-center">
                    <GameSlideShow />
                </div>

                <div class="flex gap-15 justify-center">

                    <div>
                        <Filters
                            :currentCategory="currentCategory"
                            :currentPlatform="currentPlatform"
                            :currentGenres="currentGenres"

                            @updateCategory="currentCategory = $event"
                            @updatePlatform="currentPlatform = $event"
                            @updateGenres="currentGenres = $event"
                        />
                    </div>

                    <div>
                        <Header />

                        <GameGrid
                            :search="search"
                            :category="currentCategory"
                            :platform="currentPlatform"
                            :genre="currentGenres"
                        />
                    </div>

                </div>

            </div>

        </div>


        <div
            v-else
            class="bg-black min-h-screen pt-5 flex gap-15 justify-center"
        >
 <div>
                        <Filters
                            :currentCategory="currentCategory"
                            :currentPlatform="currentPlatform"
                            :currentGenres="currentGenres"

                            @updateCategory="currentCategory = $event"
                            @updatePlatform="currentPlatform = $event"
                            @updateGenres="currentGenres = $event"
                        />
                    </div>
            <div class="px-5 lg:px-10">

                <h1 class="text-white text-2xl font-bold mb-6">
                    Search results for "{{ search }}"
                </h1>

                <GameGrid
                    :search="search"
                    :category="currentCategory"
                    :platform="currentPlatform"
                    :genre="currentGenres"
                />

            </div>

        </div>

    </div>
</template>

