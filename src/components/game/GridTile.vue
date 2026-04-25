<script setup>
import { computed } from 'vue'; 

const props = defineProps({
    isPattern: Boolean,
    isRevealed: Boolean,
    isShowing: Boolean
})

const emit = defineEmits(['clickTile'])

const titleClass = computed(() => {
    if (props.isShowing && props.isPattern) return 'bg-bule-500 scale-105'

    if (props.isRevealed) return 'bg-bule-500'

    return 'bg-white hover:bg-gray-400 cursor-pointer'
})
</script>

<template>
    <div
    @click="emit('clickTile')"
    class="aspect-square rounded-lg transition-all duration-300 shadow-md"
    :class="titleClass"
    ></div>

</template>

