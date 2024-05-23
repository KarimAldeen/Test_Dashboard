import { useEffect } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18n from 'i18next';
import translationEN from '../translate/en.json';
import translationAR from '../translate/ar.json';


let language = localStorage.getItem('language') ?? 'en';

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation: translationAR
      }
    },
    lng: language ?? "en", 
    interpolation: {
      escapeValue: false
    }
  });

//   console.log(navigator.language,"navigator.language");

export function useLanguage() {
  useEffect(() => {
    changeLanguage(language);
  }, []);

  const changeLanguage = (newLanguage:any) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    applyLanguageStyles(newLanguage);
  };

  return { changeLanguage };
}

function applyLanguageStyles(language:any) {
  if (language === 'ar') {
    document.body.setAttribute('dir', 'rtl');
    document.body.classList.remove('de');
    document.body.classList.add('ar');
  } else if (language === 'en') {
    document.body.setAttribute('dir', 'ltr');
    document.body.classList.remove('ar', 'de');
    document.body.classList.add('en');
  } 
}

export function useLanguageMenu() {
  const { t } = useTranslation();

  const languageOptions = [
    { code: 'ar', icon: '/Language/Ar.svg', label: t('Arabic') },
    { code: 'en', icon: '/Language/En.svg', label: t('English') },
  ];

  return { languageOptions };
}
