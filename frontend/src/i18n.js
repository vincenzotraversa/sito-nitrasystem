import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  it: {
    common: {
      brand: "Nitra System",
      nav: {
        home: "Home",
        azienda: "Azienda",
        cosa: "Cosa facciamo",
        cold: "Coldsharing",
        partner: "Partner & Collaborazioni",
        contatti: "Contatti",
      },
      cta_sopralluogo: "Richiedi sopralluogo",
    },
  },
  en: {
    common: {
      brand: "Nitra System",
      nav: {
        home: "Home",
        azienda: "About",
        cosa: "What we do",
        cold: "Coldsharing",
        partner: "Partners",
        contatti: "Contacts",
      },
      cta_sopralluogo: "Request a site survey",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "it",
    supportedLngs: ["it", "en"],
    ns: ["common"],
    defaultNS: "common",
    detection: {
      // rileva lingua da URL: /it/... /en/...
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
