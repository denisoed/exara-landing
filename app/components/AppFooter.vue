<script setup lang="ts">
import { format } from 'date-fns';
const currentYear = format(new Date(), 'yyyy');
</script>

<template>
  <footer class="footer-section">
      <div class="container">
          <div class="footer-content">
              <div class="footer-logo">
                  <img src="@/assets/logo.svg" alt="Exara Logo">
                  <span>Exara</span>
              </div>
              <nav class="footer-links">
                  <router-link to="/privacy-policy">Privacy Policy</router-link>
                  <router-link to="/terms-of-service">Terms of Service</router-link>
                  <router-link to="/contact">Contact</router-link>
              </nav>
              <p class="copyright">© <span id="current-year">{{ currentYear }}</span> Exara. All rights reserved.</p>
          </div>
      </div>
  </footer>
</template>
