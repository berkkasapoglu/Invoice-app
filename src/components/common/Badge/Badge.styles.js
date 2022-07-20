import styled, { css } from "styled-components"

export const StyledStatus = styled.div`
  position: relative;
  ${({ currStatus }) =>
    css`
      background-color: ${({ theme }) => theme.colors[currStatus + "Dark"]};
      color: ${({ theme }) => theme.colors[currStatus]};
    `}
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.font.small};
  font-weight: bold;
  width: 100px;
  text-transform: capitalize;
  padding: 0.7rem 0.5rem;
  text-align: center;
`

export const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ theme, currStatus }) => theme.colors[currStatus]};
  margin-right: 0.5rem;
`