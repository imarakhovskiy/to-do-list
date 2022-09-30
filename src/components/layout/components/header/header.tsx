import { ThemeSwitchButton } from "./components/theme-switch-button";
import {
  HeaderLeftBlock,
  HeaderCenterBlock,
  HeaderRightBlock,
  StyledHeader,
} from "./styled";
import { strings } from "./strings";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderLeftBlock />
      <HeaderCenterBlock>
        <h2>{strings.name}</h2>
      </HeaderCenterBlock>
      <HeaderRightBlock>
        <ThemeSwitchButton />
      </HeaderRightBlock>
    </StyledHeader>
  );
};
