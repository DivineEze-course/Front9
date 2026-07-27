<script>
export default {
    props: ['icon', 'text'],
    data (){
        return {

        }
    }
}

</script>

<template>
    <div class="flex items-center gap-2">
            <div class="p-2 bg-gray-200 rounded-sm">
            <img :src="`icons/${icon}`" class="w-[20px]">
            </div>
            <p>{{text}}</p>
        </div>
</template>