import { computed, ref } from 'vue'

const level = ref(1) 
    const lives = ref(3)
    const gridSize = ref(3)

    const gameState = ref('START')

    const pattern = ref([]) 
    const userClicks = ref([])
    const lastWrongIndex = ref(null)

    const bestScore = ref(parseInt(localStorage.getItem('visual-memory-best')) || 0)

export function useMemoryGame() {


    const totalTiles = computed(() => gridSize.value * gridSize.value)

    const patternLength = computed(() => level.value + 2)

    // Function Random Grid
    const generatePattern = () => {
        const newPattern = new Set()
        while (newPattern.size < patternLength.value) {
            const randomIndex = Math.floor(Math.random() * totalTiles.value)
            newPattern.add(randomIndex)
        }
        pattern.value = Array.from(newPattern)
    }


    const showPattern = () => {
        gameState.value = 'SHOWING'
        userClicks.value = [] // ต้องเคลียร์การคลิกทุกครั้งที่โชว์ Pattern
        lastWrongIndex.value = null

        setTimeout(() => {
            gameState.value = 'PLAYING'
        }, 1500)
    }

    // Claer value and go to next level
    const nextLevel = () => {
        level.value++

        if (level.value > bestScore.value) {
            bestScore.value = level.value
            localStorage.setItem('visual-memory-best', level.value)
        }

       if (level.value <= 2) gridSize.value = 3
        else if (level.value <= 5) gridSize.value = 4
        else gridSize.value = 5

        generatePattern()
        showPattern()
    }

    //paly agin
    const startGame = () => {
        level.value = 1
        lives.value = 3 
        gridSize.value = 3 
        generatePattern()
        showPattern()   
    }

    //function validation
    const handleTileClick = (index) => {
        if (gameState.value !== 'PLAYING') return

        if (pattern.value.includes(index)) {
            if (!userClicks.value.includes(index)) {
                userClicks.value.push(index) // collect history to index
            }

            if (userClicks.value.length === pattern.value.length) {
                gameState.value = 'SHOWING'
                setTimeout(nextLevel, 1000)
            }
        }

        else {
            lives.value--
            lastWrongIndex.value = index

            if (lives.value <= 0) {
                gameState.value = 'GAMEOVER'
            }
            else {
                gameState.value = 'SHOWING' 
                setTimeout(showPattern, 1000)
            }
        }
    }
    

    return {
        level,
        lives,
        gridSize,
        gameState,
        pattern,
        userClicks,
        lastWrongIndex,
        bestScore,
        startGame,
        handleTileClick
    }
}