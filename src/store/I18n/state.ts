import config from "@/config";

export type State = {
  languages: typeof config.languages;
  language: typeof config.languages[number]["name"];
};

export const state: State = {
  get languages() {
    return config.languages;
  },
  language: config.defaultLanguage,
};
