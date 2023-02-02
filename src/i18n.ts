import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import {myAddonMessages} from "./addon/myAddonMessages";

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "de"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    defaultNS: "common",
    fallbackLng: ["en", "de"],
  });

i18n.addResourceBundle('en', 'common', myAddonMessages.en)
i18n.addResourceBundle('de', 'common', myAddonMessages.de)

export default i18n;
