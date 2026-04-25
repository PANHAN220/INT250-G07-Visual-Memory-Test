<!-- <script setup>
defineProps(['level', 'lives'])
</script>

<template>
    <div class="w-full max-w-[320px] flex justify-between items-center mb-10">
        <div class="group">
            <h3 class="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Level</h3>
            <p class="text-4xl font-black text-slate-700 transition-all group-hover:scale-110">{{ level }}</p>
        </div>

        <div class="flex gap-2">
            <TransitionGroup name="heart">
                <div v-for="i in lives" :key="i" class="text-red-500">
                    <svg class="w-8 h-8 fill-current drop-shadow-sm" viewBox="0 0 24 24">
                        <path
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<style scoped>
.heart-enter-active,
.heart-leave-active {
    transition: all 0.3s ease;
}

.heart-leave-to {
    transform: scale(1.5);
    opacity: 0;
}
</style> -->


<script setup></script>

<template></template>

<style scoped></style>