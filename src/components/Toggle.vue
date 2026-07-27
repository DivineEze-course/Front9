<script>

export default {
    props: [ 'boolean',],
    emits:['toggle']
}

</script>

<template>
    <div class="flex items-center gap-2">
            <div class="p-2 bg-gray-200 rounded-sm " @click="$emit('toggle')">
        <div v-if="boolean === true">
            <img src="/icons/up-arrows.png" class="w-[20px]">
        </div>
            <div v-else>
                <img src="/icons/down-arrow.png" class="w-[20px]">
            </div>
            </div>
            <button >{{boolean ? "Hide" : "Show all"}}</button>
        </div>
</template>