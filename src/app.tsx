import { useEffect, useMemo, useState } from "react";
import WebFont from "webfontloader";
import { ThemeProvider as LibThemeProvider } from "styled-components";

import { Layout, ToDoList } from "components";
import { ThemeProvider } from "providers/theme-provider";
import storage from "storage";
import { getThemes } from "utils/getThemes";
import { getInitialThemeMode } from "utils/getInitialThemeMode";
import { THEME_STORAGE_KEY } from "constants/theme";
import { GlobalStyle } from "constants/globalStyles";

function App() {
  const [themeMode, setThemeMode] = useState(getInitialThemeMode);

  const themes = useMemo(() => {
    const themes = getThemes();

    const fonts = Object.values(themes)
      .map((theme) => theme.font)
      .flat();

    WebFont.load({
      google: {
        families: Array.from(new Set(fonts)),
      },
    });

    return themes;
  }, []);

  useEffect(() => {
    if (!themeMode) {
      return;
    }

    storage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode} changeTheme={setThemeMode}>
      <LibThemeProvider theme={themes[themeMode]}>
        <GlobalStyle />
        <Layout>
          <ToDoList />
        </Layout>
      </LibThemeProvider>
    </ThemeProvider>
  );
}

export default App;
