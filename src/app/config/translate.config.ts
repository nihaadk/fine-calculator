import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const defaultLanguage = 'de';

export const TRANSLATE_CONFIG = {
  loader: provideTranslateHttpLoader({
    prefix: '/assets/i18n/',
    suffix: '.json',
  }),
  fallbackLang: defaultLanguage,
  lang: defaultLanguage,
};
