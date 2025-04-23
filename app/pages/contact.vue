<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
</script>

<template>
  <section class="contact-section">
    <div class="contact-container">
        <div class="contact-header">
            <h1>Contact Us</h1>
        </div>
        
        <div class="contact-content">
            <p>Have questions about Exara? Want to report an issue or suggest a feature? We'd love to hear from you! Reach out to us directly using the contact information provided below.</p>
            
            <div class="contact-info">
                <h3>Contact Information</h3>
                <div class="contact-method">
                    <span>Telegram:</span>
                    <a href="https://t.me/exara_ai">t.me/exara_ai</a>
                </div>

                <div class="contact-method">
                    <span>Email:</span>
                    <a href="mailto:support@exara.ai">support@exara.ai</a>
                </div>
                
                <div class="contact-method">
                    <span>Business inquiries:</span>
                    <a href="mailto:business@exara.ai">business@exara.ai</a>
                </div>
                
                <div class="contact-method">
                    <span>Response time:</span>
                    We aim to respond to all inquiries within 24-48 hours during business days.
                </div>
            </div>
            
            <h2>Frequently Asked Questions</h2>
            <p>Before contacting us, you might want to check our <router-link to="/#faq">FAQ section</router-link> on the homepage to see if your question has already been answered.</p>
            
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