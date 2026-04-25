<script setup>
import GridTile from './GridTile.vue'
import { useMemoryGame } from '../../composables/useMemoryGame'

const {
  gridSize,
  gameState,
  pattern,
  userClicks,
  level,
  lastWrongIndex,
  handleTileClick
} = useMemoryGame()
</script>

<template>
    <div class="w-[320px] sm:w-[400px] aspect-square flex items-center justify-center mx-auto">
        <div 
            class="grid gap-3 w-full"
            :style="{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }"
        >
            <GridTile
                v-for="n in (gridSize * gridSize)"
                :key="n"
                :is-pattern="pattern.includes(n - 1)"
                :is-revealed="userClicks.includes(n - 1)"
                :is-showing="gameState === 'SHOWING'"
                :is-wrong="lastWrongIndex === (n - 1)"
                :level= "level"   
                @click-tile="handleTileClick(n - 1)"
            />
        </div>
    </div>
</template>