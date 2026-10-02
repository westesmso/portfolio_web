<template>
  <BaseModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <template v-if="job">
      <p class="text-sm font-medium uppercase tracking-wide text-brand-400">Experiência Profissional</p>
      <h3 class="mt-1 text-2xl font-semibold text-white">{{ job.role }}</h3>
      <p class="mt-1 text-slate-300">{{ job.company }}</p>

      <div class="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
        <span>{{ formatPeriod(job.startDate, job.endDate) }}</span>
        <span v-if="job.current" class="rounded-full bg-accent-500/20 px-2 py-0.5 text-xs font-medium text-accent-400">
          Atual
        </span>
      </div>

      <p class="mt-5 leading-relaxed text-slate-300">{{ job.description }}</p>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import { formatPeriod } from '../utils/format.js'

defineProps({
  modelValue: Boolean,
  job: { type: Object, default: null },
})
defineEmits(['update:modelValue'])
</script>
