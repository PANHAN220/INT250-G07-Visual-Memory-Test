<script setup>
import { ref } from 'vue'
import Home from './views/Home.vue'
import Game from './views/Game.vue'
import ResultView from './views/ResultView.vue'

const currentView = ref('HOME')
const finalScore = ref(1)

const startGame = () => { currentView.value = 'GAME' }
const showResult = (score) => {
  finalScore.value = score
  currentView.value = 'RESULT'
}
</script>

<template>
  <div class="min-h-screen w-full bg-gray-50 flex flex-col">
    <Home v-if="currentView === 'HOME'" @start="startGame" />
    
    <Game 
      v-else-if="currentView === 'GAME'" 
      @game-over="showResult" 
      @quit="currentView = 'HOME'" 
    />
    
    <ResultView 
      v-else-if="currentView === 'RESULT'" 
      :score="finalScore" 
      @restart="currentView = 'HOME'" 
    />
  </div>
</template>