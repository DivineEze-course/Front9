<script>
import { supabase } from '../lib/supabase.js'

export default {
data(){
    return {
        username: "",
        email: "",
        password: "",
        acceptedTerms: false,
        signedUp: false,
        loading: false
    }
},

methods: {
    async signUp() {
    if (!this.username || !this.email || !this.password || !this.acceptedTerms) {
        alert("Please fill in all fields.");
        return;
    }

    this.loading = true;

    try {
        const { data, error } = await supabase.auth.signUp({
            email: this.email,
            password: this.password,
            options: {
                data: {
                    username: this.username
                }
            }
        });

        if (error) {
            alert(error.message);
            return;
        }

        console.log(data);

        this.signedUp = true;

    } catch (err) {
        console.error(err);
    } finally {
        this.loading = false;
    }
}
}
}
</script>
<template>
    <div class="flex relative bg-black bg-cover bg-center text-white h-screen justify-center lg:justify-normal items-center">
        <div v-if="signedUp" class="fixed inset-0 bg-black/80 z-50">

        </div>
        <div v-if="signedUp" class="absolute bg-[rgb(46,189,182)]/40 border border-1 border-white/10 z-100 top-10 right-135 backdrop-blur-lg shadow-xl p-5 flex flex-col  justify-center items-center gap-10 rounded-md lg:rounded-xl w-[300px] lg:w-[400px] text-center">
            <p class="text-xl font-bold">Account created successfully!</p>
            <div>
                <img src="/icons/checked.png" class="w-[40px]" alt="">
            </div>
            <RouterLink to="/login" class="text-[rgb(46,189,182)] p-2 bg-black/70 rounded-md font-bold"><p>Go to Login</p></RouterLink>

        </div>
        <div class="lg:ms-40 flex lg:gap-20 gap-0 lg:items-center">
         <div class=" hidden lg:block">
            <img src="../assets/images/Zombie.png" class="w-[300px]   lg:w-[460px] m-auto" alt="Zombie Image">
        </div>
    <div class="bg-black p-4 flex flex-col gap-10  rounded-md lg:rounded-xl backdrop-blur-lg shadow-xl w-[300px] lg:w-[400px]">
        <div class="flex flex-col justify-center items-center">
        <img src="../assets/images/logo/Front9-dark.png" class="w-[200px] items-center justify-center m-auto" alt="Front9 Logo">
        <p>Sign up to access the catalogue</p>
    </div>
 
 <div>
   <p class="text-center text-xl font-bold text-[rgb(46,189,182)] mb-4">Join Us Today!</p>
        <div class="flex flex-col gap-6 ">
            <div>
                <p class="text-[rgb(46,189,182)] font-bold">Username</p>
            <input v-model="username" type="text" placeholder="Username" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            
        </div>
            <div>
                <p class="text-[rgb(46,189,182)] font-bold">Email</p>
            <input v-model="email" type="email" placeholder="Email" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
                <p class="text-[rgb(46,189,182)] font-bold">Password</p>
            <input v-model="password" type="password" placeholder="Password" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
                <input v-model="acceptedTerms" type="checkbox" id="terms" class="mr-2 accent-[rgb(46,189,182)]"/>
                <label for="terms">I agree to the <RouterLink to="/terms" class="text-[rgb(46,189,182)]">Terms and Conditions</RouterLink></label>
            </div>

            
            <button @click="signUp" :disabled="loading" type="button" class="p-2 bg-[rgb(46,189,182)] rounded-md cursor-pointer transition hover:bg-[rgb(46,189,182)]/80">{{ loading ? "Creating Account..." : "Sign Up" }}</button>
        <div class="flex justify-center items-center ">
                <p>Already have an account? <RouterLink to="/login" class="text-[rgb(46,189,182)]">Login</RouterLink></p>
                </div>
        </div>
</div>        

</div>
</div>

   </div>
       
</template>
