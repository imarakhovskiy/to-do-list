import styled from "styled-components";

import { ListItemProps } from "../types";
import { StyledListItem } from "./styled";

const ListItem = ({ children, className, id }: ListItemProps) => {
  return (
    <StyledListItem
      className={className}
      _isDragging={false}
      data-handler-id={id}
    >
      {children}
    </StyledListItem>
  );
};

const MemoizedComp = styled(ListItem)``;

export { MemoizedComp as ListItem };
