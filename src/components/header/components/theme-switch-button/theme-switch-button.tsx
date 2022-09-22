import { useMemo } from "react";
import styled from "styled-components";

import { ThemeMode } from "types/theme";
import { useTheme } from "providers/theme-provider";
import {
  Button,
  ButtonBorder,
  ButtonShadow,
  IconMoon,
  IconSun,
  IconVariant,
} from "components/ui-kit";
import { strings } from "./strings";

const StyledThemeSwitchButton = styled(Button)`
  padding: 4px;
`;

export const ThemeSwitchButton = () => {
  const { theme, changeTheme } = useTheme();

  const onThemeToggle = () => {
    if (!changeTheme) {
      return;
    }

    changeTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark);
  };

  const Icon = useMemo(
    () => (theme === ThemeMode.Light ? IconSun : IconMoon),
    [theme]
  );

  return (
    <StyledThemeSwitchButton
      onClick={onThemeToggle}
      title={strings.themeSwitcherTitle}
      border={ButtonBorder.Primary}
      shadow={ButtonShadow.Primary}
    >
      <Icon variant={IconVariant.Primary} />
    </StyledThemeSwitchButton>
  );
};
