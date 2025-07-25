import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enLanguage from '../../Language/en.json'
import ruLanguage from '../../Language/ru.json'
import uzLanguage from '../../Language/uz.json'
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "uz",
    fallbackLng: 'uz',
    resources: {
      uz: { translation: uzLanguage },
      ru: { translation: ruLanguage },
      en: { translation: enLanguage }
    }
  });

export default i18n;