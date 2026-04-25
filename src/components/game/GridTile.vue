<script setup>
import { computed } from 'vue'; 

const props = defineProps({
    isPattern: Boolean,
    isRevealed: Boolean,
    isShowing: Boolean,
    isWrong: Boolean,
    level: Number
})

const emit = defineEmits(['click-tile'])

const activeColorClass = computed(() => {
  if (props.level >= 9) return 'bg-[#22c55e]' 
  if (props.level >= 6) return 'bg-[#f97316]' 
  if (props.level >= 3) return 'bg-[#c026d3]' 
  return 'bg-blue-500' 
})

const titleClass = computed(() => {
    if ((props.isShowing && props.isPattern) || props.isRevealed) {
        return `${activeColorClass.value} scale-105 shadow-inner`
    }

    if (props.isWrong) return 'bg-red-500'

    return 'bg-white hover:bg-gray-200 cursor-pointer'
})
</script>

<template>
    <div
    @click="emit('click-tile')"
    class="aspect-square rounded-lg transition-all duration-300 shadow-md"
    :class="titleClass"
    ></div>

</template>

