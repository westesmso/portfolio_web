<template>
  <BaseModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <template v-if="course">
      <p class="text-sm font-medium uppercase tracking-wide text-brand-400">Curso de Extensão</p>
      <h3 class="mt-1 text-2xl font-semibold text-white">{{ course.name }}</h3>
      <p class="mt-1 text-slate-300">{{ course.institution }} · {{ course.location }}</p>

      <div class="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-300">
        <span class="rounded-full bg-slate-800 px-3 py-1">{{ formatPeriod(course.startDate, course.endDate) }}</span>
        <span class="rounded-full bg-slate-800 px-3 py-1">{{ course.hours }}h de duração</span>
      </div>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'
import { formatPeriod } from '../utils/format.js'

defineProps({
  modelValue: Boolean,
  course: { type: Object, default: null },
})
defineEmits(['update:modelValue'])
</script>
