import { useEffect, useMemo, useState } from "react";
import WebFont from "webfontloader";
import styled, { ThemeProvider as LibThemeProvider } from "styled-components";

import { Header, PageContentWrapper, ToDoList } from "components";
import { ThemeProvider } from "providers/theme-provider";
import storage from "storage";
import { getThemes } from "utils/getThemes";
import { getInitialThemeMode } from "utils/getInitialThemeMode";
import { THEME_STORAGE_KEY } from "constants/theme";
import { GlobalStyle } from "constants/globalStyles";

export const FRIENDS = [
  { done: true, name: "Add Roboto font" },
  { done: false, name: "Set up typography" },
  { done: false, name: "Play with Layout" },
  { done: true, name: "As a user, I can create a new todo item" },
  { done: true, name: "As a user, I can delete todo items" },
  { done: true, name: "As a user, I can mark todo items as done or undone" },
  { done: false, name: "As a user, I can view all/done list items (filter)" },
  {
    done: true,
    name: "As a user, I can view count of the list items (all/done)",
  },
  { done: false, name: "As a user, I can search todo items by title" },
  {
    done: false,
    name: "As a user, I can select todo items and do a batch delete/done/undone actions",
  },
];

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
        <Header />
        <PageContentWrapper>
          <StyledToDoList data={FRIENDS} />
        </PageContentWrapper>
      </LibThemeProvider>
    </ThemeProvider>
  );
}

export default App;

const StyledToDoList = styled(ToDoList)`
  margin-top: 130px;
`;
