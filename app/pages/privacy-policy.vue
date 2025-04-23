<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
</script>

<template>
  <section class="privacy-section">
    <div class="privacy-container">
        <div class="privacy-header">
            <h1>Privacy Policy</h1>
            <p class="last-updated">Last Updated: April 21, 2025</p>
        </div>
        
        <div class="privacy-content">
            <p>At Exara, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our browser extension. Please read this privacy policy carefully. <b>If you do not agree with the terms of this privacy policy, please do not access the application.</b></p>
            
            <h2>Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul>
                <li><strong>Text you highlight:</strong> When you highlight text to use Exara's explanation feature, we process that text to generate an AI explanation.</li>
                <li><strong>Account information:</strong> If you create an account, we collect your email address for authentication and communication purposes.</li>
                <li><strong>Usage data:</strong> We collect anonymous data about how you use the extension, such as the number of requests made, to improve our service.</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the collected information for various purposes, including to:</p>
            <ul>
                <li>Provide and maintain our Service</li>
                <li>Process AI requests and deliver explanations</li>
                <li>Track the usage of our Service</li>
                <li>Detect, prevent and address technical issues</li>
                <li>Provide customer support</li>
                <li>Improve our extension based on user feedback and behavior</li>
            </ul>
            
            <h2>Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure and we cannot guarantee the absolute security of your data.</p>
            
            <h2>Third-Party Services</h2>
            <p>Exara uses advanced AI models to generate explanations. We may transmit the text you highlight to these AI service providers to process your requests. These third parties are bound by their own privacy policies and are not permitted to use your data for other purposes.</p>
            
            <h2>Browser Permissions</h2>
            <p>Our extension requires certain browser permissions to function properly:</p>
            <ul>
                <li><strong>activeTab:</strong> To access the content of your current tab to process the text you highlight.</li>
                <li><strong>storage:</strong> To store your preferences and settings locally.</li>
            </ul>
            <p>We do not access your browsing history, passwords, or other sensitive browser data.</p>
            
            <h2>Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13.</p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <p>Email: <a href="mailto:support@exara.ai">support@exara.ai</a></p>
            
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

.privacy-section {
      padding: 0 0 80px;
  }
  
  .privacy-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 20px;
  }
  
  .privacy-header {
      margin-bottom: 40px;
      text-align: left;
  }
  
  .privacy-header h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
  }
  
  .last-updated {
      font-style: italic;
      color: #a0a0a0;
      margin-bottom: 30px;
  }
  
  .privacy-content h2 {
      margin-top: 40px;
      margin-bottom: 20px;
      font-size: 1.8rem;
      text-align: left;
  }
  
  .privacy-content p, .privacy-content ul {
      margin-bottom: 20px;
      line-height: 1.6;
  }
  
  .privacy-content ul {
      padding-left: 20px;
      list-style-type: disc;
  }
  
  .privacy-content li {
      margin-bottom: 10px;
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