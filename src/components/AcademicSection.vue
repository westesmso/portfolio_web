<template>
  <section id="sobre" class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
    <h2 class="text-2xl font-bold text-white">Formação Acadêmica</h2>

    <div class="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <h3 class="text-lg font-semibold text-white">{{ course.name }}</h3>
      <p class="mt-1 text-slate-300">{{ course.institution }}</p>
      <p class="mt-3 text-sm text-slate-400">
        Início: {{ formatMonthYear(course.startDate) }} · Previsão de conclusão:
        {{ formatMonthYear(course.expectedEnd) }}
      </p>
    </div>

    <div class="mt-8">
      <h3 class="text-lg font-semibold text-white">Idiomas</h3>
      <ul class="mt-4 flex flex-wrap gap-3">
        <li
          v-for="lang in languages"
          :key="lang.language"
          class="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-200"
        >
          <span class="font-medium text-white">{{ lang.language }}</span>
          <span class="text-slate-400"> · {{ lang.level }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { formatMonthYear } from '../utils/format.js'

defineProps({
  course: { type: Object, required: true },
  languages: { type: Array, default: () => [] },
})
</script>
