import storage from "storage";

import { DEFAULT_THEME, THEME_STORAGE_KEY } from "constants/theme";
import { ThemeMode } from "types/theme";

export const getInitialThemeMode = () => {
  const themeMode = storage.getItem(THEME_STORAGE_KEY);

  if (themeMode) {
    return themeMode as ThemeMode;
  }

  storage.setItem(THEME_STORAGE_KEY, DEFAULT_THEME);

  return DEFAULT_THEME;
};
