import { defineStore } from "pinia";
import { supabase } from "../lib/supabase";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: null,
        isLoggedOut:null
    }),

    actions: {
        async getCurrentUser() {
            const { data, error } = await supabase.auth.getUser();

            if (error) {
                console.log(error.message);
                return;
            }

            this.user = data.user;
        },

        listenToAuthChanges() {
            supabase.auth.onAuthStateChange((event, session) => {
                this.user = session?.user ?? null;
            });
        },

        async logout(){
            const {error} = await supabase.auth.signOut();

            if(error){
                console.log(error.message);
                return;
            }
            this.user = null;
            this.isLoggedOut = true;


        }
    }
});