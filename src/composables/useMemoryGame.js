import { computed, ref } from 'vue'

export function useMemoryGame() {

    // default value 
    const level = ref(1) 
    const lives = ref(3)
    const gridSize = ref(3)

    const gameState = ref('START')

    const pattern = ref([]) 
    const userClicks = ref([])

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

        setTimeout(() => {
            gameState.value = 'PLAYING'
        }, 1500)
    }

    // Clear value and go to next level
    const nextLevel = () => {
        userClicks.value = []
        generatePattern()
        showPattern()
    }

    //play again
    const startGame = () => {
        level.value = 1
        lives.value = 3 
        gridSize.value = 3 
        nextLevel()
    }

    //function validation
    const handleTileClick = (index) => {
        if (gameState.value !== 'PlAYING') return

        if (pattern.value.includes(index)) {
            if (!userClicks.value.includes(index)) {
                userClicks.value.push(index) // collect history to index
            }

            if (userClicks.value.length === pattern.value.length) {
                level.value++
                gameState.value = 'SHOWING'
                setTimeout(nextLevel, 1000)
            }
        }

        else {
            lives.value--
            if (lives.value <= 0) {
                gameState.value = 'GAMEOVER'
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
        startGame,
        handleTileClick
    }
}