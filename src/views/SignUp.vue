
<template>
    <div class="flex bg-black bg-cover bg-center text-white h-screen justify-center lg:justify-normal items-center">
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
            <input type="text" placeholder="Username" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
                <p class="text-[rgb(46,189,182)] font-bold">Email</p>
            <input type="email" placeholder="Email" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
                <p class="text-[rgb(46,189,182)] font-bold">Password</p>
            <input type="password" placeholder="Password" class=" w-full h-10 bg-gray-200  p-2 text-gray-700 placeholder:text-gray-500 border  rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-[rgb(46,189,182)]"/>
            </div>
            <div>
                <input type="checkbox" id="terms" class="mr-2 accent-[rgb(46,189,182)]"/>
                <label for="terms">I agree to the <RouterLink to="/terms" class="text-[rgb(46,189,182)]">Terms and Conditions</RouterLink></label>
            </div>

            
            <button type="submit" class="p-2 bg-[rgb(46,189,182)] rounded-md cursor-pointer transition hover:bg-[rgb(46,189,182)]/80">Sign Up</button>
        <div class="flex justify-center items-center ">
                <p>Already have an account? <RouterLink to="/login" class="text-[rgb(46,189,182)]">Login</RouterLink></p>
                </div>
        </div>
</div>        

</div>
</div>

   </div>
       
</template>
