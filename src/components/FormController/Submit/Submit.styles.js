import styled, { css } from "styled-components"

export const StyledSubmit = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.bgBase};
  padding: 2rem 4rem 2rem 8.75rem;
  gap: 10px;
  ${({ isEditOpen }) =>
    !isEditOpen &&
    css`
      & > :first-child {
        margin-right: auto;
      }
    `}
`
