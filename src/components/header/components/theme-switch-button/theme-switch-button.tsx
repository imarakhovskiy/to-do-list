import { useMemo } from "react";
import styled from "styled-components";

import { ThemeMode } from "types/theme";
import { useTheme } from "providers/theme-provider";
import {
  Button,
  ButtonBorder,
  ButtonShadow,
  ButtonShape,
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
    () =>
      theme === ThemeMode.Light ? (
        <IconSun variant={IconVariant.Warning} />
      ) : (
        <IconMoon variant={IconVariant.Primary} />
      ),
    [theme]
  );

  return (
    <StyledThemeSwitchButton
      onClick={onThemeToggle}
      icon={Icon}
      title={strings.themeSwitcherTitle}
      border={ButtonBorder.Light}
      shadow={ButtonShadow.Default}
      shape={ButtonShape.Circle}
    />
  );
};
