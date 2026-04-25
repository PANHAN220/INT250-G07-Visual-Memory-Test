<script setup>
import { computed } from 'vue'; 

const props = defineProps({
    isPattern: Boolean,
    isRevealed: Boolean,
    isShowing: Boolean,
    isWrong: Boolean
})

const emit = defineEmits(['click-tile'])

const titleClass = computed(() => {
    if ((props.isShowing && props.isPattern) || props.isRevealed) {
        return 'bg-[#2573C1] scale-95 shadow-inner'
    }

    if (props.isWrong) return 'bg-red-500'

    return 'bg-white hover:bg-gray-400 cursor-pointer'
})
</script>

<template>
    <div
    @click="emit('click-tile')"
    class="aspect-square rounded-lg transition-all duration-300 shadow-md"
    :class="titleClass"
    ></div>

</template>

