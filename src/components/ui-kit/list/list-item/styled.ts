import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from "styled-components";

interface StyledListItemProps {
  _isDragging: boolean;
  _customListItemStyles?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const StyledListItem = styled.li<StyledListItemProps>`
  ${(props) => props._customListItemStyles}

  visibility: ${(props) => (props._isDragging ? "hidden" : "visible")};
`;
