import { useEffect, useMemo, useState } from "react";
import { ThemeProvider as LibThemeProvider } from "styled-components";

import { Header, PageContentWrapper, Wishlist } from "components";
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

    console.log(themes);

    return themes;
  }, []);

  useEffect(() => {
    if (!themeMode) {
      return;
    }

    storage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  return (
    themes && (
      <ThemeProvider theme={themeMode} changeTheme={setThemeMode}>
        <LibThemeProvider theme={themes[themeMode]}>
          <GlobalStyle />
          <Header />
          <PageContentWrapper>
            <Wishlist />
          </PageContentWrapper>
        </LibThemeProvider>
      </ThemeProvider>
    )
  );
}

export default App;
