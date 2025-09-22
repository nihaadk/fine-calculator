import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

export const defaultLanguage = 'de';

export const TRANSLATE_CONFIG = {
  defaultLanguage: defaultLanguage,
  loader: {
    provide: TranslateLoader,
    useFactory: () =>
      provideTranslateHttpLoader({
        prefix: './assets/i18n/',
        suffix: '.json',
      }),
    deps: [HttpClient],
  },
};
