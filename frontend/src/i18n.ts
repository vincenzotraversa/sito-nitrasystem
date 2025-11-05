// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// se carichi le risorse inline:
import itCommon from "./locales/it.json";
import enCommon from "./locales/en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "it",
    supportedLngs: ["en", "it"],
    resources: {
      it: { common: itCommon },
      en: { common: enCommon },
    },
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      lookupQuerystring: "lng",
      lookupCookie: "i18next",
      excludeCacheFor: ["querystring", "path"],
    },
  });

export default i18n;
