import styled, { css } from "styled-components"

export const StyledSubmit = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.bgBase};
  padding: 16px 60px 30px 50px;
  gap: 10px;
  @media (min-width: 1024px) {
    padding: 16px 60px 30px 135px;
  }
  @media (max-width: 768px) {
    padding: 40px 24px 30px 45px;
  }
  ${({ isEditOpen }) =>
    !isEditOpen &&
    css`
      & > :first-child {
        margin-right: auto;
      }
    `}
`
