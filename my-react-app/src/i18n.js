// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: "Welcome to My App",
      welcome: "Welcome, {{name}}!",
      description: "This is an internationalized app.",
      item_count: "You have {{count}} item",
      item_count_plural: "You have {{count}} items",
      change_language: "Change language",
      helloName: "Hello, {{name}}!",
      formTitle: "User Form",
      apiResponse: "API Response"
    }
  },
  es: {
    translation: {
      title: "Bienvenido a mi aplicación",
      welcome: "¡Bienvenido, {{name}}!",
      description: "Esta es una aplicación internacionalizada.",
      item_count: "Tienes {{count}} artículo",
      item_count_plural: "Tienes {{count}} artículos",
      change_language: "Cambiar idioma",
      helloName: "¡Hola, {{name}}!",
      formTitle: "Formulario de usuario",
      apiResponse: "Respuesta de la API"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    react: { useSuspense: false }
  });

export default i18n;
