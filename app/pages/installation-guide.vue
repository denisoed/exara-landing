<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
</script>

<template>
  <section class="installation-section">
    <div class="installation-container">
      <div class="installation-header">
        <h1>Installation Guide</h1>
      </div>

      <div class="installation-content">
        <p>Follow these steps to install the Exara Chrome extension after downloading:</p>

        <div class="installation-steps">
          <h3>To load an unpacked extension in developer mode:</h3>

          <ol class="steps-list">
            <li>
              <strong>Extract the downloaded ZIP file</strong>
              <p>After downloading, locate the ZIP file (exara-1.0.0-chrome.zip) and extract its contents to a folder on your computer.</p>
            </li>

            <li>
              <strong>Go to the Extensions page</strong>
              <p>
                Enter
                <code>chrome://extensions</code>
                in a new tab. (By design chrome:// URLs are not linkable.)
              </p>
              <p>Alternatively, click the Extensions menu puzzle button and select Manage Extensions at the bottom of the menu.</p>
              <p>Or, click the Chrome menu, hover over More Tools, then select Extensions.</p>
            </li>

            <li>
              <strong>Enable Developer Mode</strong>
              <p>Enable Developer Mode by clicking the toggle switch next to Developer mode in the top right corner.</p>
            </li>

            <li>
              <strong>Load the extension</strong>
              <p>Click the "Load unpacked" button and select the extension directory you extracted in step 1.</p>
            </li>
          </ol>

          <div class="installation-image">
            <p class="image-caption">Chrome extension installation process:</p>
            <!-- Image placeholder - replace src with actual image -->
            <img src="@/assets/installation-guide.png" alt="Chrome extension installation guide" class="guide-image" />
          </div>
        </div>

        <div class="additional-info">
          <h3>After Installation</h3>
          <p>Once installed, you'll see the Exara icon in your browser toolbar. Click on it to start using the extension!</p>
        </div>

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

.installation-section {
  padding: 0 0 80px;
}

.installation-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.installation-header {
  margin-bottom: 40px;
  text-align: left;
}

.installation-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.installation-content h2 {
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 1.8rem;
  text-align: left;
}

.installation-content p {
  margin-bottom: 20px;
  line-height: 1.6;
}

.installation-steps {
  margin-top: 30px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
}

.installation-steps h3 {
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.steps-list {
  padding-left: 20px;
  margin-bottom: 30px;
  list-style-type: decimal;
}

.steps-list li {
  margin-bottom: 20px;
}

.steps-list li strong {
  display: block;
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.steps-list li p {
  margin-bottom: 10px;
}

.steps-list li p:last-child {
  margin-bottom: 0;
}

code {
  font-family: monospace;
  background-color: #2a2a2a;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9em;
}

.installation-image {
  margin-top: 30px;
  text-align: center;
}

.image-caption {
  margin-bottom: 10px;
  font-style: italic;
}

.guide-image {
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid #333;
}

.additional-info {
  margin-top: 40px;
}

.additional-info h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
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

a {
  color: #4a90e2;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
