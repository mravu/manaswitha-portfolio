import { reactive, provide, inject } from 'vue';

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

export const provideAppStore = {
  install(app: any) {
    const state: AppState = reactive({
      theme: localStorage.getItem('theme') || 'light',
      language: localStorage.getItem('language') || 'en',
      isAuthenticated: false,
    });

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

    app.provide('appStore', {
      state,
      setTheme,
      setLanguage,
      toggleAuthentication,
    });
  },
};

export const useAppStore = (): AppStore => {
  const store = inject<AppStore>('appStore');
  if (!store) {
    throw new Error('appStore is not provided!');
  }
  return store;
};
