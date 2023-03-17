import i18n from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './locales/en.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
// import other language files as well

// Set the fallback language in case the device locale is not supported
i18n.fallbacks = true;
i18n.translations = { en, fr, de };
// add other languages as well

// Set the language based on the device locale
i18n.locale = Localization.locale;

export default i18n;
