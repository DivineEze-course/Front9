<script>
export default {
    data(){
        return{

        }
    },
    props:['name','order','dropdownItems','boolean'],
    emits:['toggle','select']
}
</script>

<template>
    <div class="relative">
    <div @click="$emit('toggle')" class="relative flex justify-between w-[110px] lg:w-[180px] text-white bg-white/20 backdrop-blur-lg
     border border border-white/20 shadow-xl overflow-hidden transition hover:scale-102 hover:bg-white/15 p-2 rounded-md  cursor-pointer">
<p >{{order}}{{ name }}</p>
<img src="/icons/down-arrow.png" class="w-[20px]">
    </div>
    
<div>
<div v-if="boolean === true" class="flex flex-col gap-1 bg-[rgb(46,189,182)] text-white font-bold absolute w-[180px] rounded-lg rounded-t-none z-100 ">
<div v-for="item in dropdownItems" :key="item.value" @click="$emit('select',item)"  
class="hover:bg-black/70 hover:text-[rgb(46,189,182)] p-2 cursor-pointer">
    {{ item.name }}
</div>
</div>
</div>
</div>

</template>