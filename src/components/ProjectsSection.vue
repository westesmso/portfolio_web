<template>
  <section id="projetos" class="mx-auto max-w-5xl px-4 py-14 sm:px-6">
    <h2 class="text-2xl font-bold text-white">Portfólio de Projetos</h2>

    <div class="mt-6 flex flex-wrap gap-2">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        class="rounded-full px-4 py-2 text-sm font-medium transition"
        :class="
          filter === tab.value
            ? 'bg-brand-600 text-white'
            : 'border border-slate-700 text-slate-300 hover:border-brand-400 hover:text-brand-400'
        "
        @click="filter = tab.value"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="project in filteredProjects"
        :key="project.id"
        type="button"
        class="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 text-left transition hover:border-brand-500/60 hover:bg-slate-900"
        @click="selected = project"
      >
        <img
          :src="project.screenshots?.[0]"
          :alt="`Screenshot de ${project.name}`"
          class="h-40 w-full object-cover"
          loading="lazy"
        />
        <div class="flex flex-1 flex-col p-5">
          <h3 class="font-semibold text-white">{{ project.name }}</h3>
          <p class="mt-2 line-clamp-2 text-sm text-slate-400">{{ project.description }}</p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <span
              v-for="tech in project.technologies.slice(0, 3)"
              :key="tech"
              class="rounded-full bg-brand-900/60 px-2 py-0.5 text-xs text-brand-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </button>
    </div>

    <ProjectModal
      :model-value="!!selected"
      :project="selected"
      @update:model-value="(value) => !value && (selected = null)"
    />
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectModal from './ProjectModal.vue'

const props = defineProps({
  projects: { type: Array, default: () => [] },
})

const tabs = [
  { value: 'todos', label: 'Todos' },
  { value: 'faculdade', label: 'Faculdade' },
  { value: 'pessoal', label: 'Pessoal' },
]

const filter = ref('todos')
const selected = ref(null)

const filteredProjects = computed(() =>
  filter.value === 'todos' ? props.projects : props.projects.filter((p) => p.category === filter.value),
)
</script>
