import { Button, Input } from "components/ui-kit";
import styled from "styled-components";

const wrapperBorderRadius = "10px";

export const AddToDoItemWrapper = styled.div`
  display: flex;
  border: ${({ theme }) => `2px solid ${theme.borderColor.primary}`};
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  border-radius: ${wrapperBorderRadius};
`;

export const NewToDoItemNameInput = styled(Input)`
  flex-grow: 2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const AddToDoItemButton = styled(Button)`
  border-left: ${({ theme }) => `2px solid ${theme.borderColor.primary}`};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: ${wrapperBorderRadius};
  border-bottom-right-radius: ${wrapperBorderRadius};
`;
