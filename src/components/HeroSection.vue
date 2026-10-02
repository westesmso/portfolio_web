<template>
  <section id="topo" class="mx-auto max-w-5xl px-4 pb-16 pt-32 sm:px-6">
    <div class="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:text-left">
      <img
        :src="profile.photo"
        :alt="`Foto de ${profile.name}`"
        class="h-40 w-40 shrink-0 rounded-full border-4 border-brand-600/50 object-cover shadow-lg shadow-brand-950/50 sm:h-48 sm:w-48"
      />

      <div>
        <h1 class="text-3xl font-bold text-white sm:text-4xl">{{ profile.name }}</h1>
        <p class="mt-2 text-lg text-brand-400">{{ profile.tagline }}</p>
        <p class="mt-4 max-w-xl leading-relaxed text-slate-300">{{ profile.about }}</p>

        <div class="mt-6 flex flex-wrap justify-center gap-3 sm:justify-start">
          <a
            :href="profile.github"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
          >
            GitHub
          </a>
          <a
            v-if="profile.social?.linkedin"
            :href="profile.social.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg border border-slate-700 px-4 py-2 font-medium text-slate-200 transition hover:border-brand-400 hover:text-brand-400"
          >
            LinkedIn
          </a>
          <a
            v-if="profile.social?.email"
            :href="`mailto:${profile.social.email}`"
            class="rounded-lg bg-brand-600 px-4 py-2 font-medium text-white transition hover:bg-brand-500"
          >
            Contato
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  profile: { type: Object, required: true },
})
</script>
