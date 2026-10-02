<template>
  <section id="experiencia" class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
    <h2 class="text-2xl font-bold text-white">Experiência Profissional</h2>

    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <button
        v-for="job in jobs"
        :key="job.id"
        type="button"
        class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:border-brand-500/60 hover:bg-slate-900"
        @click="selected = job"
      >
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-semibold text-white">{{ job.role }}</h3>
          <span v-if="job.current" class="shrink-0 rounded-full bg-accent-500/20 px-2 py-0.5 text-xs font-medium text-accent-400">
            Atual
          </span>
        </div>
        <p class="mt-1 text-sm text-brand-400">{{ job.company }}</p>
        <p class="mt-2 text-sm text-slate-400">{{ formatPeriod(job.startDate, job.endDate) }}</p>
      </button>
    </div>

    <JobModal
      :model-value="!!selected"
      :job="selected"
      @update:model-value="(value) => !value && (selected = null)"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import JobModal from './JobModal.vue'
import { formatPeriod } from '../utils/format.js'

defineProps({
  jobs: { type: Array, default: () => [] },
})

const selected = ref(null)
</script>
