import i18n, { ModuleType } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import english from './translations/en.json';
import spanish from './translations/es.json';

type LocalizationType = typeof spanish;
type TranslationData = {
  [key: string]: string | TranslationData;
};

const localizationKeys = (data: TranslationData, prefix = '') =>
  Object.keys(data).reduce<Record<string, string | TranslationData>>(
    (result, key) => {
      const value = data[key];
      const newPrefix = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object') {
        result[key] = localizationKeys(value, newPrefix);
      } else {
        result[key] = newPrefix;
      }
      return result;
    },
    {},
  );

const localization = localizationKeys(spanish) as LocalizationType;

export { localization };

/**
 * Constants
 */
const USER_PREFERRED_LANGUAGE = RNLocalize.getLocales()[0].languageCode;

const MODULE_TYPE: ModuleType = 'languageDetector';

const LANGUAGE_DETECTOR = {
  type: MODULE_TYPE,
  async: true,
  detect: (cb: (code: string) => void) => cb(USER_PREFERRED_LANGUAGE),
  init: () => {},
  cacheUserLanguage: () => {},
};

/**
 * i18next
 */
i18n
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: english },
      es: { translation: spanish },
    },
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
