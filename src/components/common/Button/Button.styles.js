import styled from "styled-components"

export const StyledButton = styled.button`
  position: relative;
  padding: .8rem 1.5rem;
  background-color: ${({ theme, type }) => theme.colors[type]};
  border-radius: 2rem;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
  width: ${({full}) => full && "100%"};
  &:hover {
    background-color: ${({ theme, type }) => theme.colors[type+"Hover"]};
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font.extraSmall};
    padding: .8rem 1rem;
  }
`