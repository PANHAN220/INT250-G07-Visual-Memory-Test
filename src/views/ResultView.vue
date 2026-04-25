<script setup>
import BaseButton from '../components/shared/BaseButton.vue'
defineProps(['score'])
defineEmits(['restart'])
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen p-6 text-center relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center -z-10">
            <div class="w-[500px] h-[500px] bg-sky-100 rounded-full blur-[100px] opacity-70"></div>
        </div>

        <h2 class="text-slate-400 uppercase tracking-widest font-bold mb-2">จบการทดสอบ</h2>
        <p class="text-6xl font-black mb-2 text-slate-800">{{ score }}</p>
        <p class="text-xl font-bold mb-12 text-slate-500">Level ที่คุณทำได้</p>

        <BaseButton @click="$emit('restart')">
            เล่นใหม่อีกครั้ง
        </BaseButton>
    </div>
</template>