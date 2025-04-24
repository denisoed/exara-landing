<template>
  <UModal :model-value="showModal" @update:model-value="updateModelValue" :ui="modalStyle">
    <div class="chrome-modal">
      <button class="chrome-modal-close-button cta-button" @click="closeModal">
        <Icon name="heroicons:x-mark" />
      </button>
      <h2 class="chrome-modal-title">Browser Compatibility Notice</h2>
      <div class="chrome-modal-content">
        <p>
          To download and use the Exara extension, please open this website in
          <strong>Google Chrome</strong>
          on a desktop device.
        </p>
      </div>
      <div class="chrome-modal-actions">
        <button class="chrome-modal-button cta-button" @click="closeModal">Got it</button>
      </div>
    </div>
  </UModal>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const showModal = ref<boolean>(props.modelValue);

// Custom styling for the modal to match site design
const modalStyle = {
  base: 'relative flex flex-col overflow-hidden p-6 sm:p-8 md:p-10',
  background: 'bg-white dark:bg-gray-900',
  width: 'sm:max-w-md md:max-w-lg max-w-sm w-full',
  rounded: 'rounded-xl',
  shadow: 'shadow-xl dark:shadow-gray-800/10',
  overlay: {
    background: 'bg-gray-950/75',
  },
};

// Close modal and save preference
function closeModal() {
  showModal.value = false;
  emit('update:modelValue', false);
}

function updateModelValue(newVal: boolean) {
  if (!newVal) {
    closeModal();
  }
}

watch(
  () => props.modelValue,
  (newVal: boolean) => {
    showModal.value = newVal;
  },
);
</script>

<style scoped lang="scss">
.chrome-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chrome-modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--color-text, inherit);
}

.chrome-modal-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: var(--border-radius);
  background-color: var(--card-bg);
  padding: var(--spacing-md);
  margin-top: var(--spacing-md);

  p {
    margin: 0;
  }
}

.chrome-modal-actions {
  margin-top: var(--spacing-md);
  display: flex;
  justify-content: center;
  width: 100%;
}

.chrome-modal-button {
  width: 100%;
  font-weight: 500;
}

.chrome-modal-close-button {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
}

@media (max-width: 640px) {
  .chrome-modal-title {
    font-size: 1.25rem;
  }

  .chrome-modal-close-button {
    display: none;
  }
}
</style>
