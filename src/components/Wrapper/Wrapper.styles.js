import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgBase};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: background-color 400ms ease-in-out;
`
