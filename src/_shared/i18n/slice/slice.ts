import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";
import { currentLocale } from "../types/currentLocale";
import { RootState } from "../../store/index";

const initialState: { currentLocale: currentLocale } = {
  currentLocale: "en",
};

const slice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    changeLanguage(state, action: PayloadAction<currentLocale>) {
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
