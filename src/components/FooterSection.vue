<template>
  <footer class="border-t border-slate-800/80 py-8 text-center text-sm text-slate-500">
    <p>© {{ year }} {{ name }}. Desenvolvido com Vue.js e Tailwind CSS.</p>
  </footer>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
})

const year = new Date().getFullYear()
</script>
