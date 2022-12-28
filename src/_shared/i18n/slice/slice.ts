import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { CurrentLocale } from "../types/CurrentLocale";
import { RootState } from "../../store";

const initialState: { currentLocale: CurrentLocale } = {
  currentLocale: "en",
};

const slice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<CurrentLocale>) {
      state.currentLocale = action.payload;
    },
  },
});

const selectI18nSlice = (state: RootState) => state.i18n;

export const selectCurrentLocale = createSelector(
  selectI18nSlice,
  (s) => s.currentLocale
);

export const reducer = slice.reducer;
export const actions = slice.actions;
