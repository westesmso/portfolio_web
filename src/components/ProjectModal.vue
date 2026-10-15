<template>
  <BaseModal :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
    <template v-if="project">
      <p class="text-sm font-medium uppercase tracking-wide text-brand-400">
        <template v-if="project.semester">{{ project.semester }} · </template>
        {{ project.category === 'faculdade' ? 'Projeto de Faculdade' : 'Projeto Pessoal' }}
      </p>
      <h3 class="mt-1 text-2xl font-semibold text-white">{{ project.name }}</h3>
      <p class="mt-4 leading-relaxed text-slate-300">{{ project.description }}</p>

      <div v-if="project.technologies?.length" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-full bg-brand-900/60 px-3 py-1 text-xs font-medium text-brand-300"
        >
          {{ tech }}
        </span>
      </div>

      <div v-if="project.screenshots?.length" class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <img
          v-for="(shot, index) in project.screenshots"
          :key="index"
          :src="shot"
          :alt="`Screenshot ${index + 1} de ${project.name}`"
          class="w-full rounded-lg border border-slate-700/60 object-cover"
          loading="lazy"
        />
      </div>

      <div v-if="project.partner" class="mt-5">
        <p class="text-sm font-medium text-slate-400">Parceiro</p>
        <p class="mt-1 leading-relaxed text-slate-300">{{ project.partner }}</p>
      </div>

      <a
        v-if="project.repoUrl"
        :href="project.repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 font-medium text-white transition hover:bg-brand-500"
      >
        Ver código no GitHub
      </a>
    </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from './BaseModal.vue'

defineProps({
  modelValue: Boolean,
  project: { type: Object, default: null },
})
defineEmits(['update:modelValue'])
</script>
