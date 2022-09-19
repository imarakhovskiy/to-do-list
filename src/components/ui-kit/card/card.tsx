import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  position: relative;
  border-radius: 10px;
  color: ${({ theme }) => theme.textColor.primary};
  background-color: ${({ theme }) => theme.backgroundColor.primary};
  padding: 10px;
  border-color: ${({ theme }) => theme.borderColor.primary};
  border-width: 1px;
  border-style: solid;
  box-shadow: ${({ theme }) => theme.shadowColor.primary};
`;
