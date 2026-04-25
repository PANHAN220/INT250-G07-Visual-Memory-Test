<script setup>
import BaseButton from '../components/shared/BaseButton.vue'

defineEmits(['start'])

const defaultColor = '#E1E3E4'

const gridColors = [
    defaultColor, '#2573C1', defaultColor, 
    '#CB30E0', defaultColor, '#FF8D28', 
    defaultColor, defaultColor, '#23E200'
]
</script>

<template>
    <div
        class="flex-1 w-full flex flex-col items-center justify-center p-6 m-0 font-['Manrope',_sans-serif] bg-[#F8F9FA]">

        <div class="flex flex-col items-center text-center scale-90 md:scale-95 transition-transform">

            <div class="bg-[#e9ecef] p-3.5 rounded-xl mb-6 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36" fill="none">
                    <path d="M0 16V0H16V16H0ZM0 36V20H16V36H0ZM20 16V0H36V16H20ZM20 36V20H36V36H20Z" fill="#005AA1" />
                </svg>
            </div>

            <h1 class="text-5xl md:text-6xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
                Visual Memory Test
            </h1>

            <p class="text-gray-500 text-lg md:text-xl max-w-sm leading-relaxed mb-10">
                Memorize the square pattern. Each level adds more tiles to the grid.
            </p>

            <div class="relative mb-10">
                <div
                    class="w-[280px] h-[280px] md:w-[310px] md:h-[310px] bg-[#edf2f9] rounded-full flex items-center justify-center">

                    <div
                        class="bg-white p-5 rounded-[2rem] shadow-2xl shadow-blue-100/50 grid grid-cols-3 gap-3 border border-gray-50">
                        <div v-for="(color, index) in gridColors" :key="index"
                            class="w-14 h-14 md:w-16 md:h-16 rounded-lg transition-all duration-300 shadow-inner"
                            :style="{ backgroundColor: color }"></div>
                    </div>

                </div>
            </div>

            <BaseButton @click="$emit('start')"
                class="bg-[#005AA1] hover:bg-[#004a85] text-white px-10 py-3 rounded-full text-lg font-bold transition-all active:scale-95 shadow-lg shadow-blue-100 tracking-wide">
                Start Test
            </BaseButton>

        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');
</style>