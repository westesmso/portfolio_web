<template>
  <section id="cursos" class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
    <h2 class="text-2xl font-bold text-white">Cursos de Extensão</h2>

    <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="course in courses"
        :key="course.id"
        type="button"
        class="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-left transition hover:border-brand-500/60 hover:bg-slate-900"
        @click="selected = course"
      >
        <h3 class="font-semibold text-white">{{ course.name }}</h3>
        <p class="mt-1 text-sm text-brand-400">{{ course.institution }}</p>
        <p class="mt-2 text-sm text-slate-400">{{ course.hours }}h · {{ formatMonthYear(course.startDate) }}</p>
      </button>
    </div>

    <CourseModal
      :model-value="!!selected"
      :course="selected"
      @update:model-value="(value) => !value && (selected = null)"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import CourseModal from './CourseModal.vue'
import { formatMonthYear } from '../utils/format.js'

defineProps({
  courses: { type: Array, default: () => [] },
})

const selected = ref(null)
</script>
