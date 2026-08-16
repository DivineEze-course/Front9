<script>
import { supabase } from '../lib/supabase.js'
export default {
data(){
    return {
        email: "",
        password: "",
        loading: false,
        loggedIn: false,
        error: "",
        showPassword:false,
        
        showSuccessModal:false,
    }

},
methods: {  
isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        },


async login() {
    this.error=""
if(!this.email || !this.password){
    this.error="Please fill in all fields.";
    return;
}

if (!this.isValidEmail(this.email)) {
                this.error = "Invalid email"
                return
            }


this.loading = true;

 try{  const {data,error} = await supabase.auth.signInWithPassword({
    email:this.email,
    password:this.password
   });

    if (error) {
        if(error.message == "Invalid login credentials"){
            this.error = "Invalid email or password.";
        }
         else {
            this.error = error.message;
        }   

            return;
        }
      this.loggedIn = true;
      this.showSuccessModal = true
      setTimeout(() => {
                    this.$router.push('/')
                }, 1500)

 }

 catch (err){
    
    console.error(err)
                this.error = "Something went wrong. Please try again."

 }
 finally{
    this.loading = false;
    
 }
   
}
}

}
</script>
<template>
    <div class="bg-black text-white h-screen flex justify-center lg:justify-normal items-center">
        <div class="lg:ms-40 lg:flex gap-20 items-center">
        <div>
            <img src="../assets/images/Zombie.png" class="w-[300px] hidden lg:block  lg:w-[500px] m-auto" alt="Zombie Image">
        </div>
    <div class="bg-black p-4 flex flex-col gap-10  lg:mt-0 rounded-xl backdrop-blur-lg shadow-xl  w-[300px] lg:w-[400px]">
        <div class="flex flex-col justify-center items-center">
        <img src="../assets/images/logo/Front9-dark.png" class="w-[200px] items-center justify-center m-auto" alt="Front9 Logo">
        <p>Login to access the catlogue</p>
    </div>
        <div class="">
       
        <div class="flex flex-col gap-6 ">
            <div>
                <p>Email</p>
            <input v-model="email" type="email" placeholder="Email" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
            <div>
                <p>Password</p>
                <div class=" flex items-center ">
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder="Password" class="relative w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
                                         <button
                                    type="button"
                                    @click="showPassword = !showPassword"
                                    class="absolute right-5 text-gray-600 hover:text-gray-900 cursor-pointer"
                                >
                                   <img :src="showPassword ? '/icons/eye-slash.svg' : '/icons/eye.svg'" class="w-[30px]"> 
                                </button>  
        </div>
             </div>
           <p v-if="error" class="text-red-500">{{ error }}</p>
           </div>
            <div class="flex justify-between items-center">
                <p>Dont have an account? <RouterLink to="/signup" class="text-[rgb(46,189,182)]">Sign Up</RouterLink></p>
                </div>
          <button type="submit" @click="login" class="p-2 bg-[rgb(46,189,182)] text-center rounded-md cursor-pointer transition hover:bg-[rgb(46,189,182)]/80">
            Login
        </button>
        </div>
        </div>
        </div>
        </div>
    </div>
</template>