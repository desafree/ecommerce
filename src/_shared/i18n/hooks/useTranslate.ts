import { useSelector } from "react-redux";
import { selectCurrentLocale } from "../slice/slice";
import { i18n } from "../utils/initialization";

export const useTranslate = () => {
  const currentLang = useSelector(selectCurrentLocale);
  return (
    key: string,
    options = { defaultValue: "This is a default message" }
  ) => {
    return i18n.t(key, {
      locale: currentLang,
      defaultValue: options,
    });
  };
};
