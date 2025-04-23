
<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
</script>

<template>
  <section class="terms-section">
    <div class="terms-container">
        <div class="terms-header">
            <h1>Terms of Service</h1>
            <p class="last-updated">Last Updated: April 21, 2025</p>
        </div>
        
        <div class="terms-content">
            <p>Welcome to Exara. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Exara browser extension ("the Service") operated by Exara ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. <b>These Terms apply to all visitors, users, and others who access or use the Service.</b></p>
            
            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</p>
            
            <h2>Use of Service</h2>
            <p>Exara provides a browser extension that uses AI to explain text highlighted by users. Users are granted a limited, non-exclusive, non-transferable license to use the Service for personal or commercial purposes in accordance with these Terms.</p>
            
            <h2>User Accounts</h2>
            <p>When you create an account with us, you must provide accurate, complete, and up-to-date information. You are responsible for safeguarding the password you use to access the Service and for any activities or actions under your password. We encourage you to use a strong password (containing a combination of upper and lower case letters, numbers, and special characters) for your account.</p>
            
            <h2>Subscription and Billing</h2>
            <p>Certain features of the Service may require a subscription. By subscribing to the PRO plan, you agree to pay all fees associated with the plan you select. Payments are non-refundable except as required by law or as explicitly stated in these Terms.</p>
            <ul>
                <li>Subscription fees are billed at the beginning of your subscription period.</li>
                <li>Request packages do not expire as long as your account remains active.</li>
                <li>We reserve the right to change subscription fees upon reasonable notice.</li>
            </ul>
            
            <h2>Free Trial</h2>
            <p>The Free plan includes a limited number of requests (25) to help you evaluate the Service. We reserve the right to modify the terms and conditions of our Free plan at any time.</p>
            
            <h2>Content Restrictions</h2>
            <p>You agree not to use the Service for any purpose that is unlawful or prohibited by these Terms. You may not use the Service:</p>
            <ul>
                <li>To transmit or generate content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                <li>To impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity</li>
                <li>To engage in any activity that could damage, disable, overburden, or impair the Service</li>
                <li>To harvest, collect, or gather data about other users without their consent</li>
                <li>To use the Service to generate content that infringes on intellectual property rights</li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Exara and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Exara.</p>
            
            <h2>User-Generated Content</h2>
            <p>When you use our Service to highlight text and receive explanations, you maintain ownership of your original content. However, you grant us a license to use the highlighted text and any follow-up questions to improve our Service and AI models.</p>
            
            <h2>Limitation of Liability</h2>
            <p>In no event shall Exara, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
            
            <h2>Disclaimer</h2>
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
            <p>While we strive to provide accurate and helpful explanations through our AI technology, we do not guarantee that all explanations will be error-free, complete, or suitable for any specific purpose.</p>
            
            <h2>Termination</h2>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.</p>
            
            <h2>Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            
            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
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

.terms-section {
    padding: 0 0 80px;
}

.terms-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
}

.terms-header {
    margin-bottom: 40px;
    text-align: left;
}

.terms-header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.last-updated {
    font-style: italic;
    color: #a0a0a0;
    margin-bottom: 30px;
}

.terms-content h2 {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: left;
}

.terms-content p, .terms-content ul {
    margin-bottom: 20px;
    line-height: 1.6;
}

.terms-content ul {
    padding-left: 20px;
    list-style-type: disc;
}

.terms-content li {
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