<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div
          class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          @click="close"
        ></div>

        <Transition name="pop" appear>
          <div
            v-if="modelValue"
            class="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-slate-700/60 bg-slate-900 p-6 shadow-2xl shadow-black/50 sm:p-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              class="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition hover:border-brand-400 hover:text-brand-400"
              aria-label="Fechar"
              @click="close"
            >
              ✕
            </button>
            <slot />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, watch } from 'vue'

const props = defineProps({ modelValue: Boolean })
const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}

function onKeydown(event) {
  if (event.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (isOpen) => {
    document.documentElement.classList.toggle('overflow-hidden', isOpen)
    if (isOpen) window.addEventListener('keydown', onKeydown)
    else window.removeEventListener('keydown', onKeydown)
  },
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.documentElement.classList.remove('overflow-hidden')
})
</script>
