<script setup>
import GridTile from './GridTile.vue'
import { useMomeryGame } from '../../composables/useMemoryGame'

const {
  gridSize,
  gameState,
  pattern,
  userClicks,
  handleTileClick
} = useMemoryGame()

</script>

<template>
    <div class="bg-slate-800 p-4 rounded-xl max-w-md mx-auto">
        <div 
        class="grid gap-3"
        :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }"
        >
            <GridTile
                v-for="n in (gridSize * gridSize)"
                :key="n"
                :is-pattern="pattern.includes(n - 1)"
                :is-revealed="userClicks.includes(n - 1)"
                :is-showing="gameState === 'SHOWING'"
                @click-tile="handleTileClick(n - 1)"
            />
        </div>
    </div>
</template>