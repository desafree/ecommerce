import { text } from "./assets/text";
import { useTranslate } from "./hooks/useTranslate";
import { reducer as i18nReducer, actions as i18nActions } from "./slice/slice";
import { initialization } from "./utils/initialization";
import { currentLocale } from "./types/currentLocale";

export {
  text,
  useTranslate,
  i18nReducer,
  i18nActions,
  initialization,
  type currentLocale,
};
