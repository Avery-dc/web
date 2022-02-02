import config from "@/config";
import i18n from "@/i18n";

export type State = {
  languages: typeof config.languages;
  language: keyof typeof i18n;
  data: typeof i18n;
};

export const state: State = {
  get languages() {
    return config.languages;
  },
  language: <State["language"]>config.defaultLanguage,
  data: { ...i18n },
};
