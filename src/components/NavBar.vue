<template>
  <header
    class="fixed inset-x-0 top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#topo" class="font-semibold text-white">
        <span class="text-brand-400">&lt;</span>Portfólio<span class="text-brand-400">/&gt;</span>
      </a>

      <button
        type="button"
        class="text-slate-300 sm:hidden"
        aria-label="Abrir menu"
        @click="open = !open"
      >
        ☰
      </button>

      <ul class="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="transition hover:text-brand-400">{{ link.label }}</a>
        </li>
      </ul>
    </nav>

    <ul v-if="open" class="flex flex-col gap-1 border-t border-slate-800 bg-slate-950 px-4 py-3 sm:hidden">
      <li v-for="link in links" :key="link.href">
        <a :href="link.href" class="block rounded-lg px-2 py-2 text-slate-300 hover:bg-slate-900" @click="open = false">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#projetos', label: 'Projetos' },
]
</script>
