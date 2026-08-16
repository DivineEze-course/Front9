<script>
import { getGames } from "../../api/games";
import GameSkeleton from "./GameSkeleton.vue";

export default {
  data() {
    return { games: [],
         currentIndex: 0,
         loading:true,
          timer: null,
          touchStart: 0,
          touchEnd: 0 
        };
  },
  async mounted() {
    this.games = await getGames();
    this.loading = false;
    this.games = this.games.slice(4, 9);
    this.startSlideshow();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    nextGame() {
      this.currentIndex = (this.currentIndex + 1) % this.games.length;
    },
    previousGame() {
      this.currentIndex =
        (this.currentIndex - 1 + this.games.length) % this.games.length;
    },
    goToGame(index) {
      this.currentIndex = index;
    },
    startSlideshow() {
      this.timer = setInterval(() => {
        this.nextGame();
      }, 5000);
    },
    resetSlideshow() {
    clearInterval(this.timer);
    this.startSlideshow();
},
    handleTouchStart(event) {
        this.touchStart = event.changedTouches[0].screenX;
    },

    handleTouchEnd(event) {
        this.touchEnd = event.changedTouches[0].screenX;

        const distance = this.touchStart - this.touchEnd;

        // Swiped left
        if (distance > 50) {
            this.nextGame();
            this.resetSlideshow();
        }

        // Swiped right
        if (distance < -50) {
            this.previousGame();
            this.resetSlideshow();
        }
    },
    
  },
  components: {
    GameSkeleton
  }
};
</script>

<template>
    <div v-if="loading" class="w-full lg:w-[80%] h-full">
        <GameSkeleton/>
    </div>
  <section
    v-if="games.length"
    class="relative lg:w-[80%] h-[300px] md:h-[450px] lg:h-[600px] overflow-hidden rounded-2xl shadow-md shadow-[rgb(46,189,182)] :hover:scale-105 transition cursor-pointer"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
 
    >

    <RouterLink :to="`/game/${games[currentIndex].id}`">
    <img
      :src="games[currentIndex].thumbnail"
      :alt="games[currentIndex].title"
      class="absolute inset-0 w-full h-full lg:object-cover"
    />
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="absolute inset-0 flex flex-col justify-end p-3 lg:p-8">
      <h2 class="text-xl lg:text-4xl font-bold text-white w-[150px] lg:w-[350px] ">
        {{ games[currentIndex].title }}
      </h2>
      <RouterLink
        :to="`/game/${games[currentIndex].id}`"
        class="hidden lg:block mt-4 w-fit rounded-lg bg-[rgb(46,189,182)] px-5 py-2 font-bold text-white hover:scale-105 transition"
      >
        View Game
      </RouterLink>
    </div>
    </RouterLink>
    <button
      @click="previousGame"
      class="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 cursor-pointer"
    >
      ←
    </button>
    <button
      @click="nextGame"
      class=" hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white hover:bg-black/70 cursor-pointer"
    >
      →
    </button>
    
    <div class="absolute bottom-5 right-8 flex gap-2">
      <button
        v-for="(game, index) in games"
        :key="game.id"
        @click="goToGame(index)"
        class="h-2 rounded-full transition-all"
        :class="
          index === currentIndex
            ? 'w-8 bg-[rgb(46,189,182)]'
            : 'w-2 bg-white/60'
        "
      ></button>
    </div>
    
  </section>
</template>
