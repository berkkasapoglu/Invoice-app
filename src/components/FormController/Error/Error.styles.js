import styled from "styled-components"

export const StyledError = styled.div`
  margin: 2rem 0 0;
`
export const Message = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.error};
`
