import { I18n } from "i18n-js";
import { text } from "../assets/text";

export const i18n = new I18n(text);

export function initialization() {
  const defaultLocale = "en";
  i18n.defaultLocale = defaultLocale;
  i18n.locale = defaultLocale;
}
