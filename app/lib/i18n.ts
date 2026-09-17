import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    returnObjects: true,
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`, // Path to the translation files
      requestOptions: {
        cache: 'no-store',
      },
    },
  });

export default i18n;
