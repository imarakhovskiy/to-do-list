import styled from "styled-components";

export const StyledListItem = styled.li<{ isDragging: boolean }>`
  visibility: ${(props) => (props.isDragging ? "hidden" : "visible")};
`;
