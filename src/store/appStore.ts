import { reactive, provide, inject } from 'vue';

// Define the structure of your state and store
interface AppState {
  theme: string;
  language: string;
  isAuthenticated: boolean;
}

interface AppStore {
  state: AppState;
  setTheme: (theme: string) => void;
  setLanguage: (language: string) => void;
  toggleAuthentication: () => void;
}

// Create the store and provide it globally
export const provideAppStore = {
  install(app: any) {
    const state: AppState = reactive({
      theme: localStorage.getItem('theme') || 'light',
      language: localStorage.getItem('language') || 'en',
      isAuthenticated: false,
    });

    // Actions
    const setTheme = (theme: string) => {
      state.theme = theme;
      localStorage.setItem('theme', theme);
    };

    const setLanguage = (language: string) => {
      state.language = language;
      localStorage.setItem('language', language);
    };

    const toggleAuthentication = () => {
      state.isAuthenticated = !state.isAuthenticated;
    };

    // Provide the store globally
    app.provide('appStore', {
      state,
      setTheme,
      setLanguage,
      toggleAuthentication,
    });
  },
};

// Helper function to inject the store into components
export const useAppStore = (): AppStore => {
  const store = inject<AppStore>('appStore');
  if (!store) {
    throw new Error('appStore is not provided!');
  }
  return store;
};
