<script setup>
import { onMounted } from 'vue'
import GameGrid from '../components/game/GameGrid.vue'
import { useMemoryGame } from '../composables/useMemoryGame'

const { level, lives, bestScore, gameState, startGame } = useMemoryGame()
onMounted(() => startGame())

const emit = defineEmits(['game-over', 'quit'])

</script>

<template>
    <div class="min-h-screen w-full bg-white flex flex-col items-center justify-center p-6 font-['Manrope']">

        <div class="w-full max-w-3xl mx-auto flex justify-between items-end mb-12">
            <div class="text-left">
                <p class="text-gray-400 text-[11px] font-bold uppercase tracking-wider">Current Progress</p>
                <h2 class="text-5xl font-extrabold text-gray-900">Level {{ level }}</h2>
            </div>

            <div class="bg-[#F1F5F9] px-6 py-4 rounded-2xl flex items-center gap-8 shadow-sm">
                <div class="flex flex-col items-center border-r border-gray-200 pr-8">
                    <p class="text-gray-500 text-[10px] font-bold uppercase mb-1">Lives</p>
                    <div class="flex gap-1">
                        <svg v-for="i in 3" :key="i" class="w-5 h-5"
                            :class="i <= lives ? 'text-red-500 fill-current' : 'text-gray-300 fill-current'"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <p class="text-gray-500 text-[10px] font-bold uppercase mb-1">Best Score</p>
                    <span class="text-[#2573C1] font-bold text-xl">Level {{ bestScore }}</span>
                </div>
            </div>
        </div>

        <div class="bg-[#F8FAFC] p-10 rounded-[3rem] flex items-center justify-center">
            <Transition name="fade-slide" mode="out-in">
                <div :key="level" class="scale-110">
                    <GameGrid />
                </div>
            </Transition>
        </div>

        <div class="mt-12 text-center">
            <div class="text-gray-500 text-lg leading-relaxed mb-12">
                <p>Memorize the <span class="text-[#2573C1] font-medium">highlighted tiles</span> before they disappear.
                </p>
                <p>Click them to advance to the next level.</p>
            </div>

            <button @click="$emit('quit')"
                class="text-gray-400 hover:text-gray-700 font-medium flex items-center gap-2 mx-auto transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Quit Session
            </button>
        </div>

        <Transition name="fade">
            <div v-if="gameState === 'GAMEOVER' || gameState === 'VICTORY'"
                class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
                <div class="bg-white p-10 rounded-[2.5rem] text-center shadow-2xl max-w-sm w-full mx-4">
                    
                    <h2 class="text-3xl font-black mb-2" :class="gameState === 'VICTORY' ? 'text-green-500' : 'text-gray-900'">
                        {{ gameState === 'VICTORY' ? 'You Win!' : 'Game Over' }}
                    </h2>
                    
                    <p class="text-gray-500 mb-8">
                        {{ gameState === 'VICTORY' 
                           ? 'Congratulations! You completed all 10 levels.' 
                           : `You reached Level ${level}` 
                        }}
                    </p>
                    
                    <button @click="startGame"
                        class="w-full bg-[#2573C1] text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-all">
                        Play Again
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');

/* Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s ease;
}

.fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
}

.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* เคลียร์ Style ส่วนเกิน */
:deep(.bg-slate-800) {
    background: transparent !important;
    padding: 0 !important;
}
</style>