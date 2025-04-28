<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});

const feedbackMessage = ref('');
const isSubmitting = ref(false);
const feedbackStatus = ref<null | { success: boolean; message: string }>(null);

async function submitFeedback() {
  if (!feedbackMessage.value.trim()) {
    feedbackStatus.value = {
      success: false,
      message: 'Please enter your feedback before submitting',
    };
    return;
  }

  try {
    isSubmitting.value = true;
    await $fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: feedbackMessage.value,
      }),
    });

    feedbackStatus.value = {
      success: true,
      message: 'Thank you for your feedback!',
    };
    feedbackMessage.value = '';
  } catch (error: any) {
    feedbackStatus.value = {
      success: false,
      message: error.message || 'An error occurred. Please try again later.',
    };
  } finally {
    isSubmitting.value = false;

    // Clear status message after 5 seconds
    setTimeout(() => {
      feedbackStatus.value = null;
    }, 5000);
  }
}
</script>

<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-header">
        <h1>Contact Us</h1>
      </div>

      <div class="contact-content">
        <p>
          Have questions about Exara? Want to report an issue or suggest a feature? We'd love to hear from you! Reach out to us directly using the contact information provided
          below.
        </p>

        <div class="contact-info">
          <h3>Contact Information</h3>

          <div class="contact-method">
            <span>Email:</span>
            <a href="mailto:exara.pro@gmail.com">exara.pro@gmail.com</a>
          </div>

          <div class="contact-method">
            <span>Response time:</span>
            We aim to respond to all inquiries within 24-48 hours during business days.
          </div>
        </div>

        <div class="feedback-section">
          <h2>Feedback</h2>
          <p>We value your input! Share your thoughts, suggestions, or ideas for new features. Your feedback helps us improve Exara and build a better product for everyone.</p>
          <div class="feedback-form">
            <textarea v-model="feedbackMessage" placeholder="Type your feedback or feature request here..." rows="5" class="feedback-textarea"></textarea>
            <div class="feedback-form-actions">
              <button @click="submitFeedback" class="feedback-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Feedback' }}
              </button>
              <div v-if="feedbackStatus" class="feedback-status" :class="{ success: feedbackStatus.success }">
                {{ feedbackStatus.message }}
              </div>
            </div>
          </div>
        </div>

        <h2>Frequently Asked Questions</h2>
        <p>
          Before contacting us, you might want to check our
          <router-link to="/#faq">FAQ section</router-link>
          on the homepage to see if your question has already been answered.
        </p>

        <router-link to="/" class="back-link">← Back to Home</router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
body {
  background-color: #121212;
  color: #e0e0e0;
}

.contact-section {
  padding: 0 0 80px;
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.contact-header {
  margin-bottom: 40px;
  text-align: left;
}

.contact-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.contact-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: left;
}

.contact-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.contact-info {
  margin-top: 40px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
}

.contact-info h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.contact-method {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.contact-method span {
  margin-right: 10px;
  font-weight: bold;
}

.contact-method a {
  color: #4a90e2;
  text-decoration: none;
}

.contact-method a:hover {
  text-decoration: underline;
}

.feedback-section {
  margin-top: 40px;
}

.feedback-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.feedback-textarea {
  width: 100%;
  padding: 15px;
  border-radius: 6px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  color: #e0e0e0;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 15px;
}

.feedback-textarea:focus {
  outline: none;
  border-color: #4a90e2;
}

.feedback-form-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.feedback-status {
  padding: 8px 12px;
  border-radius: 4px;
  background-color: rgba(255, 0, 0, 0.1);
  color: #ff5555;
  font-size: 0.9rem;
}

.feedback-status.success {
  background-color: rgba(0, 255, 0, 0.1);
  color: #55ff55;
}

.feedback-submit {
  align-self: flex-start;
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.feedback-submit:disabled {
  background-color: #2c5380;
  cursor: not-allowed;
  opacity: 0.7;
}

.feedback-submit:hover:not(:disabled) {
  background-color: #3a80d2;
}

.back-link {
  display: inline-block;
  margin-top: 40px;
  color: #4a90e2;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
