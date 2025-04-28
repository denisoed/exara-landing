<template>
  <UModal :model-value="showModal" @update:model-value="updateModelValue" :ui="modalStyle">
    <div class="alpha-test-modal">
      <button class="alpha-test-modal-close-button cta-button" @click="closeModal">
        <Icon name="heroicons:x-mark" />
      </button>
      <h2 class="alpha-test-modal-title">Alpha Testing Invitation</h2>
      <div class="alpha-test-modal-content">
        <p>
          Exara is currently in
          <strong>Alpha Testing</strong>
          stage. If you'd like to join our early testers, please leave your email below.
        </p>
        <p>
          We'll send you an activation key that will give you
          <strong>50 additional free requests</strong>
          to try out our PRO features.
        </p>
        <form v-if="!submitSuccess" @submit.prevent="submitEmail" class="email-form">
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              @input="validateEmail"
              placeholder="Your email address"
              required
              class="email-input"
              :class="{ 'input-error': hasInteracted && emailError }" />
            <div v-if="hasInteracted && emailError" class="error-message">{{ emailError }}</div>
          </div>
          <div class="form-actions">
            <button type="submit" class="submit-button cta-button accent-button" :disabled="isButtonDisabled">
              <span v-if="!isSubmitting">Send me the key</span>
              <span v-else>Sending...</span>
            </button>
          </div>
        </form>
        <div v-else class="success-message">
          <p>Thank you, we will send the activation key to your email shortly. Please wait.</p>
        </div>
      </div>
    </div>
  </UModal>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const showModal = ref(props.modelValue);
const email = ref('');
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const emailError = ref('');
const hasInteracted = ref(false); // Track if user has interacted with the field

// Email validation using regex
const isEmailValid = computed(() => {
  // Only validate if user has interacted with the field
  if (!hasInteracted.value) return true;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value) {
    emailError.value = 'Email is required';
    return false;
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address';
    return false;
  }
  emailError.value = '';
  return true;
});

// Button should be disabled if submission is in progress
// or if the email is invalid after interaction
const isButtonDisabled = computed(() => {
  if (isSubmitting.value) return true;
  if (hasInteracted.value && !isEmailValid.value) return true;
  return false;
});

// Set hasInteracted to true when user starts typing
const validateEmail = () => {
  hasInteracted.value = true;
};

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

  // Reset the form state when closing
  email.value = '';
  hasInteracted.value = false;
  emailError.value = '';
}

function updateModelValue(newVal) {
  if (!newVal) {
    closeModal();
  }
}

async function submitEmail() {
  hasInteracted.value = true;

  if (!email.value) {
    emailError.value = 'Email is required';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address';
    return;
  }

  isSubmitting.value = true;

  try {
    await $fetch('/api/email', {
      method: 'POST',
      body: { email: email.value },
      headers: {
        'Content-Type': 'application/json',
      },
    });
    isSubmitting.value = false;
    submitSuccess.value = true;

    // Close modal after success message display
    setTimeout(() => {
      closeModal();
      // Reset form after closing
      email.value = '';
      emailError.value = '';
      hasInteracted.value = false;
      submitSuccess.value = false;
    }, 4000);
  } catch (error) {
    isSubmitting.value = false;
    console.error('Error submitting email:', error);
    emailError.value = error?.data?.message || 'Failed to submit email. Please try again.';
  }
}

watch(
  () => props.modelValue,
  newVal => {
    showModal.value = newVal;
    if (newVal) {
      // Reset interaction state when modal is opened
      hasInteracted.value = false;
      emailError.value = '';
    }
  },
);
</script>

<style scoped lang="scss">
.alpha-test-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.alpha-test-modal-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: var(--color-text, inherit);
}

.alpha-test-modal-content {
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
  width: 100%;

  p {
    margin: 0;
  }
}

.alpha-test-modal-close-button {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
}

.form-group {
  width: 100%;
}

.email-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.email-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: var(--border-radius);
  font-size: 1rem;

  &.input-error {
    border-color: #ef4444;
  }
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: left;
}

.form-actions {
  display: flex;
  justify-content: center;
  width: 100%;
}

.submit-button {
  width: 100%;
  padding: 0.75rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

.success-message {
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--accent-color);
  color: var(--color-text);
  border-radius: var(--border-radius);
  text-align: center;
  width: 100%;
}

@media (max-width: 640px) {
  .alpha-test-modal-title {
    font-size: 1.25rem;
  }

  .alpha-test-modal-close-button {
    display: none;
  }
}
</style>
