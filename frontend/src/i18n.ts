import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// risorse locali
import itCommon from "./locales/it.json";
import enCommon from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "it",
    supportedLngs: ["it", "en"],
    ns: ["common"],
    defaultNS: "common",
    resources: {
      it: { common: itCommon },
      en: { common: enCommon },
    },
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
      lookupCookie: "i18next",
      excludeCacheFor: ["querystring", "path"],
    },
    react: { useSuspense: false },
  });

export default i18n;
