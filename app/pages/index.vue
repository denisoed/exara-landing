<script setup>
import { ref, onMounted } from 'vue';
import AlphaTestModal from '@/components/AlphaTestModal.vue';

const showAlphaTestModal = ref(false);

const handleGoToPro = () => {
  showAlphaTestModal.value = true;
};

onMounted(() => {
  // --- Cookie Consent --- //
  const cookieConsent = document.getElementById('cookie-consent');
  const cookieAcceptBtn = document.getElementById('cookie-accept');

  // Check if user has already accepted cookies
  const hasAcceptedCookies = localStorage.getItem('cookieConsent') === 'accepted';

  // Show the cookie consent popup if user hasn't accepted cookies yet
  if (!hasAcceptedCookies && cookieConsent) {
    cookieConsent.style.display = 'block';
  }

  // Add event listener to the accept button
  if (cookieAcceptBtn) {
    cookieAcceptBtn.addEventListener('click', () => {
      // Store consent in localStorage
      localStorage.setItem('cookieConsent', 'accepted');

      // Hide the cookie consent popup
      if (cookieConsent) {
        cookieConsent.style.display = 'none';
      }
    });
  }

  // --- Mobile menu toggle --- //
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      mainNav.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      mobileMenuToggle.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  // --- Smooth scrolling for anchor links --- //
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    });
  });

  // --- Header scroll effect --- //
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- FAQ Accordion --- //
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const currentlyActive = document.querySelector('.faq-item.active');
      if (currentlyActive && currentlyActive !== item) {
        currentlyActive.classList.remove('active');
        currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
      }

      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
});
</script>

<template>
  <main>
    <!-- Alpha Test Modal -->
    <AlphaTestModal v-model="showAlphaTestModal" />

    <!-- Hero Section -->
    <section id="hero" class="hero-section section-alt-bg">
      <div class="container">
        <h1>Understand Anything. Instantly.</h1>
        <p class="subtitle">Exara is an AI‑extension for browsers that instantly explains unfamiliar words and terms right on the page. Highlight text – get an answer.</p>
        <div class="video-placeholder">
          <video autoplay muted loop playsinline webkit-playsinline>
            <source src="@/assets/video/demo.mp4" type="video/mp4" />
            <source src="@/assets/video/demo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <InstallBtn class="accent-button">Install for free</InstallBtn>
      </div>
    </section>

    <!-- Pain Points Section -->
    <section id="pain-points" class="pain-points-section">
      <div class="container">
        <h2>Tired of interrupting your reading for simple explanations?</h2>

        <div class="pain-description">
          <p class="subtitle">Each time you encounter an unfamiliar term, you:</p>

          <ul class="pain-list">
            <li>
              <span class="pain-marker">→</span>
              Open a new tab and google
            </li>
            <li>
              <span class="pain-marker">→</span>
              Lose concentration and context
            </li>
            <li>
              <span class="pain-marker">→</span>
              Spend 30–60 seconds on each word
            </li>
            <li>
              <span class="pain-marker">→</span>
              Accumulation of interruptions kills your focus and motivation
            </li>
          </ul>
        </div>

        <div class="pain-counters">
          <h3>Imagine how many hours you have already lost…</h3>

          <div class="counters-grid">
            <div class="counter-item">
              <div class="counter-icon">
                <img src="@/assets/painIcons/search.svg" alt="Поисковые запросы" />
              </div>
              <div class="counter-number">15 000</div>
              <div class="counter-text">search requests per year — just to decipher terms</div>
            </div>

            <div class="counter-item">
              <div class="counter-icon">
                <img src="@/assets/painIcons/time.svg" alt="Отвлечения" />
              </div>
              <div class="counter-number">45 sec</div>
              <div class="counter-text">Average reader is distracted every 45 seconds</div>
            </div>

            <div class="counter-item">
              <div class="counter-icon">
                <img src="@/assets/painIcons/abandon.svg" alt="Брошенные статьи" />
              </div>
              <div class="counter-number">60%</div>
              <div class="counter-text">readers abandon articles, not reading them due to too many «google‑times»</div>
            </div>
          </div>

          <p class="pain-conclusion">The pain of distraction from the main — understanding and results.</p>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="solution-section section-alt-bg">
      <div class="container">
        <h2>Read without pauses — Exara will explain everything on the spot</h2>

        <p class="solution-intro">Exara is an AI‑extension that:</p>

        <div class="solution-grid">
          <div class="solution-item">
            <div class="solution-icon">
              <img src="@/assets/solutionIcons/tabs.svg" alt="Никаких новых вкладок" />
            </div>
            <h3>No new tabs</h3>
            <p>Highlight the word, get the answer right on the page</p>
          </div>

          <div class="solution-item">
            <div class="solution-icon">
              <img src="@/assets/solutionIcons/context.svg" alt="Без потери контекста" />
            </div>
            <h3>Without losing context</h3>
            <p>The explanation appears next to the highlighted text</p>
          </div>

          <div class="solution-item">
            <div class="solution-icon">
              <img src="@/assets/solutionIcons/everywhere.svg" alt="Всегда под рукой" />
            </div>
            <h3>Always at hand</h3>
            <p>Works on any website and PDF (through the built‑in viewer)</p>
          </div>

          <div class="solution-item">
            <div class="solution-icon">
              <img src="@/assets/solutionIcons/time-save.svg" alt="Экономит время" />
            </div>
            <h3>Saves time</h3>
            <p>Get instant explanations in seconds, right on the page</p>
          </div>
        </div>

        <div class="solution-cta">
          <InstallBtn class="accent-button">Install for free</InstallBtn>
        </div>
      </div>
    </section>

    <!-- Core Features (Checkerboard Layout) -->
    <section id="features" class="features-section">
      <div class="container">
        <h2>Key Features</h2>

        <!-- Feature 1: Visual Left, Text Right -->
        <div class="feature-item">
          <div class="feature-visual">
            <!-- Замените на реальную картинку/иллюстрацию -->
            <div class="visual-placeholder">
              <img src="@/assets/features/highlight-and-understand.png" alt="Highlight and understand" />
            </div>
          </div>
          <div class="feature-content">
            <h3>Highlight and understand</h3>
            <p>Get instant AI‑explanations for any word or phrase, just by highlighting it on the page. No more switching between tabs and googling.</p>
          </div>
        </div>

        <!-- Feature 2: Text Left, Visual Right -->
        <div class="feature-item">
          <div class="feature-visual">
            <!-- Замените на реальную картинку/иллюстрацию -->
            <div class="visual-placeholder">
              <img src="@/assets/features/ask-clarifying-questions.png" alt="Ask clarifying questions" />
            </div>
          </div>
          <div class="feature-content">
            <h3>Ask clarifying questions</h3>
            <p>Didn't understand the explanation? Ask one clarifying question directly in the Exara window to dive deeper or get an alternative interpretation.</p>
          </div>
        </div>

        <!-- Feature 3: Visual Left, Text Right -->
        <div class="feature-item">
          <div class="feature-visual">
            <!-- Замените на реальную картинку/иллюстрацию -->
            <div class="visual-placeholder">
              <img src="@/assets/features/make-it-simpler.png" alt="Make it simpler" />
            </div>
          </div>
          <div class="feature-content">
            <h3>Make it simpler</h3>
            <p>If the explanation seems too complex, click the "Explain it simply" button, and AI will rephrase the answer in a more accessible language.</p>
          </div>
        </div>

        <!-- Feature 4: Text Left, Visual Right -->
        <div class="feature-item">
          <div class="feature-visual">
            <!-- Замените на реальную картинку/иллюстрацию -->
            <div class="visual-placeholder">
              <img src="@/assets/features/multilingual-support.png" alt="Multilingual support" />
            </div>
          </div>
          <div class="feature-content">
            <h3>Multilingual support</h3>
            <p>Exara supports multiple languages, making it easy to understand content in English, Russian, French, Spanish, and other languages.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section id="use-cases" class="use-cases-section section-alt-bg">
      <div class="container">
        <h2>Where Exara will be indispensable</h2>
        <div class="use-cases-grid">
          <div class="use-case-item">
            <!-- Иконка/Иллюстрация -->
            <div class="icon-placeholder">
              <img src="@/assets/useCasesIcons/student.svg" alt="Иконка Студента" />
            </div>
            <h3>Students and Researchers</h3>
            <p>Quick understanding of terms in articles and educational materials.</p>
          </div>
          <div class="use-case-item">
            <!-- Иконка/Иллюстрация -->
            <div class="icon-placeholder">
              <img src="@/assets/useCasesIcons/professional.svg" alt="Иконка Профессионала" />
            </div>
            <h3>Professionals</h3>
            <p>Parsing complex documentation, reports, industry news.</p>
          </div>
          <div class="use-case-item">
            <!-- Иконка/Иллюстрация -->
            <div class="icon-placeholder">
              <img src="@/assets/useCasesIcons/reader.svg" alt="Иконка Читателя" />
            </div>
            <h3>News Readers</h3>
            <p>Easy understanding of unfamiliar words and concepts in articles.</p>
          </div>
          <div class="use-case-item">
            <!-- Иконка/Иллюстрация -->
            <div class="icon-placeholder">
              <img src="@/assets/useCasesIcons/language.svg" alt="Иконка Изучения" />
            </div>
            <h3>Language Learners</h3>
            <p>Instant explanation of unfamiliar vocabulary in context.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <h2>What users say</h2>
        <!-- Slider main container -->
        <TestimonialsCarousel />
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing-section">
      <!-- Сюда применить градиент через CSS -->
      <div class="container">
        <h2>Choose your plan</h2>
        <div class="pricing-grid">
          <div class="pricing-plan plan-free">
            <h3>Free</h3>
            <div class="price">
              0$
              <span>/ month</span>
            </div>
            <p class="plan-description">For initial acquaintance with Exara.</p>
            <ul class="plan-features">
              <li>
                <span class="checkmark">[✓]</span>
                25 free AI-requests
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                1 clarifying question per explanation
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                "Explain it simply" function
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                Multilingual support
              </li>
            </ul>
            <InstallBtn>Start for free</InstallBtn>
          </div>
          <div class="pricing-plan plan-pro">
            <h3>PRO</h3>
            <!-- Уточните модель: за пакет или в месяц -->
            <div class="price">
              5$
              <span>/ per 500 requests</span>
            </div>
            <p class="plan-description">For active use and complex tasks.</p>
            <ul class="plan-features">
              <li>
                <span class="checkmark">[✓]</span>
                500 AI-requests
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                All Free features
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                Access to Summarize
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                Access to Ask AI anything
              </li>
              <li>
                <span class="checkmark">[✓]</span>
                Advanced AI models for more accurate explanations
              </li>
            </ul>
            <button class="cta-button accent-button" @click="handleGoToPro">Go to PRO</button>
            <p class="pricing-note">*Requests do not expire and carry over to the next period.</p>
          </div>
        </div>
        <p class="pricing-comparison highlighted">5$ is just the cost of a few cups of coffee for hundreds of instant explanations.</p>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="faq-section">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question">How to install Exara?</button>
            <div class="faq-answer">
              <p>
                Go to the
                <a href="exara-1.0.0-chrome.zip" download target="_blank">extension store</a>
                of your browser (e.g. Chrome Web Store) and click "Install". After installation, the Exara icon will appear on the browser toolbar.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">What browsers are supported?</button>
            <div class="faq-answer">
              <p>Currently, we support Google Chrome and browsers based on it (Yandex.Browser, Edge, Brave). We are working on supporting Firefox and Safari.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Can I switch languages in Exara?</button>
            <div class="faq-answer">
              <p>Yes, you can change the language in the dropdown menu, which is available by clicking on the Exara icon in your browser's sidebar.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">How does the request counting work?</button>
            <div class="faq-answer">
              <p>
                Each time you highlight text and get an AI-explanation, this counts as one request. Asking clarifying questions or requesting additional explanations for the same
                text will count as new requests. The "Ask AI anything" and "Summarize" functions (when available) will also consume requests.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">Is it safe? Do you collect my data?</button>
            <div class="faq-answer">
              <p>
                We take data privacy seriously. Exara only processes the text you highlight to generate an explanation and does not collect your browsing history or personal data.
                For more details, please refer to our Privacy Policy.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question">How do I report bugs or request new features?</button>
            <div class="faq-answer">
              <p>
                Please visit our
                <router-link to="/contact">contact page</router-link>
                and use the provided contact information to report bugs or request new features.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section id="final-cta" class="final-cta-section">
      <div class="container">
        <h2>Ready to understand more?</h2>
        <p>Install Exara now and start using the AI-assistant for reading.</p>
        <InstallBtn class="accent-button">Install Exara for free</InstallBtn>
      </div>
    </section>

    <!-- Cookie Consent Popup -->
    <div id="cookie-consent" class="cookie-consent">
      <div class="container">
        <p>This website uses cookies to ensure you get the best experience on our website. By continuing to use this site, you consent to our use of cookies.</p>
        <div class="cookie-buttons">
          <button id="cookie-accept" class="cta-button accent-button">Accept</button>
          <router-link to="/privacy-policy" class="cta-button">Learn More</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Responsive styles for features section */
@media screen and (max-width: 768px) {
  .feature-item {
    display: flex;
    flex-direction: column;
  }

  /* Reorder feature items to always show text first */
  .feature-item .feature-content {
    order: 1;
  }

  .feature-item .feature-visual {
    order: 2;
    margin-top: 20px;
  }
}
</style>
