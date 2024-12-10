<template>
  <div id="app" :class="theme">
    <!-- Header Section with Navigation Links and Theme Toggle -->
    <header>
      <nav>
        <div class="logo">
          <!-- <h1>Manaswitha</h1> -->
        </div>
        <ul class="nav-list">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
          <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
        </ul>
        <button class="theme-toggle" @click="toggleTheme">
          {{ theme === 'light' ? '🌙' : '☀️' }} Toggle Theme
        </button>
      </nav>
    </header>

    <!-- Main Content Section -->
    <main>
      <!-- Suspense to handle lazy-loaded routes -->
      <Suspense>
        <template #default>
          <!-- Dynamic route rendering -->
          <router-view />
        </template>
        <template #fallback>
          <!-- Fallback content when lazy-loaded components are being fetched -->
          <div>Loading...</div>
        </template>
      </Suspense>
    </main>

    <!-- Footer Section -->
    <footer>
      <p>© 2024 Your Name. All Rights Reserved.</p>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/manaswitha-ravu/" target="_blank" rel="noopener noreferrer">  <i class="fa fa-linkedin-square"></i>   LinkedIn</a>
        <a href="https://github.com/mravu" target="_blank">GitHub</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent ,computed} from 'vue';
import { useAppStore } from '@/store/appStore'; // Import the global store

export default defineComponent({
  name: 'App',
  setup() {
    // Access the global store's state and methods
    const { state, setTheme } = useAppStore();
    const theme = computed(() => state.theme);
    // Toggle the theme between 'light' and 'dark'
    const toggleTheme = () => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };

    // Return the theme and toggle function to be used in the template
    return {
      theme, // Bind the theme to the root div
      toggleTheme,
    };
  },
});
</script>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Background for light and dark themes */
#app {
  display:flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f0f2f4, #c9d7e7); /* Light blue gradient */
  color: #fff;
  transition: background 0.3s ease, color 0.3s ease;
  height: 100vh;
}
main {
  flex: 1; /* This will make the main content grow to take available space */
  background: linear-gradient(135deg, #f0f2f4, #c9d7e7); 
}

/* Light theme specific styles */
#app.light {
  background: linear-gradient(135deg, #7f9ebe, #84a2c4); /* Light blue gradient */
  color: #fff;
}

/* Dark theme specific styles */
#app.dark {
  background: linear-gradient(135deg, #020a15, #01080f); /* Dark blue gradient */
  color: #f0f0f0;
}

/* Header Styles */
header {
  background-color: rgba(5, 44, 88, 0.6); /* Semi-transparent black */
  padding: 20px 0;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-left: 100px;
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.nav-link:hover {
  color: #f9a825;
  text-decoration: underline;
}

.theme-toggle {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 6px 3px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}

.theme-toggle:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: #f9a825;
}

/* Footer Styles */
footer {
  background-color: rgba(5, 44, 88, 0.6); /* Dark footer background */
  color: #fff;
  text-align: center;
  padding: 20px;
}

footer p {
  font-size: 1rem;
}

.footer-links {
  margin-top: 10px;
}

.footer-links a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 1.2rem;
}

.footer-links a:hover {
  color: #f9a825;
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .nav-list {
    flex-direction: column;
    gap: 10px;
  }

  .theme-toggle {
    margin-top: 15px;
  }
}
</style>
