import { createContext, useContext } from "react";

import { ThemeMode } from "types/theme";
import { DEFAULT_THEME } from "constants/theme";

interface ThemeProviderProps {
  theme: ThemeMode;
  changeTheme: (newTheme: ThemeMode) => void;
  children: React.ReactNode;
}

const ThemeContext = createContext<Omit<ThemeProviderProps, "children">>({
  theme: DEFAULT_THEME,
  changeTheme: () => {},
});

export const ThemeProvider = ({
  children,
  theme,
  changeTheme,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Inject ThemeProdiver upper in the tree!");
  }

  return themeContext;
};
