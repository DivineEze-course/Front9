<script>
import { RouterView } from "vue-router";
import {useAuthStore} from "./stores/auth.js";
export default {
    data(){
        return {
            user:null
        }
    },
    async mounted(){
      const authStore = useAuthStore();

        await authStore.getCurrentUser();
        authStore.listenToAuthChanges();
        console.log(authStore.user);
    }
 
}
</script>

<template>
    <RouterView />
</template>

<style >

</style>
