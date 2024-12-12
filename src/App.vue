<template>
  <div id="app" :class="theme">
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

    <main>
      <Suspense>
        <template #default>
          <router-view />
        </template>
        <template #fallback>
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
import { useAppStore } from '@/store/appStore'; 
export default defineComponent({
  name: 'App',
  setup() {
    const { state, setTheme } = useAppStore();
    const theme = computed(() => state.theme);
    const toggleTheme = () => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    };

    return {
      theme,
      toggleTheme,
    };
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#app {
  display:flex;
  flex-direction: column;
  background: linear-gradient(135deg, #f0f2f4, #c9d7e7);
  color: #fff;
  transition: background 0.3s ease, color 0.3s ease;
  height: 100vh;
}
main {
  flex: 1;
  background: linear-gradient(135deg, #f0f2f4, #c9d7e7); 
}

#app.light {
  background: linear-gradient(135deg, #7f9ebe, #84a2c4);
  color: #fff;
}

#app.dark {
  background: linear-gradient(135deg, #020a15, #01080f);
  color: #f0f0f0;
}

header {
  background-color: rgba(5, 44, 88, 0.6);
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

footer {
  background-color: rgba(5, 44, 88, 0.6);
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
