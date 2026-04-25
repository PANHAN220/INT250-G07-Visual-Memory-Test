<script setup>
import { ref } from 'vue'
import GameGrid from '../components/game/GameGrid.vue'
import GameState from '../components/game/GameState.vue'
import GameTitle from '../components/game/GameTitle.vue'

const emit = defineEmits(['game-over'])

// จำลอง State เพื่อให้เห็นหน้าตา (เพื่อนจะเขียนตัวแปรเหล่านี้ใน composable)
const level = ref(1)
const lives = ref(3)
const gridSize = ref(3)
const isWrong = ref(false)

const handleTileClick = (index) => {
    // จำลองว่าถ้ากดผิด (เช่น สมมติช่องแรกคือผิด)
    if (index === 0) {
        isWrong.value = true
        setTimeout(() => isWrong.value = false, 500)
        lives.value--
        if (lives.value === 0) emit('game-over', level.value)
    }
}
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen p-4 relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
            <div class="w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <GameTitle />

        <GameState :level="level" :lives="lives" />

        <div :class="{ 'shake-effect': isWrong }">
            <GameGrid :grid-size="gridSize" :active-tiles="[1, 3, 4]" theme-color="#3b82f6"
                @tile-click="handleTileClick" />
        </div>

        <p class="mt-8 text-slate-400 font-medium animate-pulse">
            จดจำตำแหน่งช่องสีฟ้า...
        </p>
    </div>
</template>

<style scoped>
@keyframes shake {

    0%,
    100% {
        transform: translateX(0);
    }

    25% {
        transform: translateX(-8px);
    }

    75% {
        transform: translateX(8px);
    }
}

.shake-effect {
    animation: shake 0.2s ease-in-out 0s 2;
}
</style>