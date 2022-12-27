import { text } from "./assets";
import { useTranslate } from "./hooks";
import { initialization } from "./utils";
import { CurrentLocale } from "./types";
import {
  selectCurrentLocale,
  reducer as i18nReducer,
  actions as i18nActions,
} from "./slice";

export {
  text,
  useTranslate,
  i18nReducer,
  i18nActions,
  selectCurrentLocale,
  initialization,
  type CurrentLocale,
};
