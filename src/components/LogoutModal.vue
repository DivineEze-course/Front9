<script>
export default {
    props: {
        show:false 
    },

    emits: ['close', 'confirm']
}
</script>

<template>
    <div
        v-if="show"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
        @click="$emit('close')"
    >
        <div
            class="flex flex-col justify-center  gap-5 lg:gap-8 w-[90%] max-w-[400px] lg:h-[300px] rounded-2xl bg-black/20 border border-[rgb(46,189,182)]/20 p-6 text-center shadow-2xl"
            @click.stop
        >
        <div>
            <h2 class="text-2xl  lg:text-3xl font-bold text-[rgb(46,189,182)] ">
                Logout?
            </h2>

            <p class="mt-2 text-gray-400">
                Are you sure you want to logout?
            </p>
</div>
            <div class="mt-6 flex justify-center gap-4 lg:gap-10">

                <button
                    @click="$emit('close')"
                    class="rounded-lg border border-black bg-[rgb(46,189,182)]/10 px-6 py-2 text-white hover:bg-black/20 cursor-pointer hover:border-[rgb(46,189,182)]/20" 
                >
                    Cancel
                </button>

                
                <button
                    @click="$emit('confirm')"
                    class="rounded-lg bg-[rgb(46,189,182)] px-6 py-2 text-white hover:bg-[rgb(46,189,182)]/20 cursor-pointer"
                >
                    Logout
                </button>

            </div>
        </div>
    </div>
</template>