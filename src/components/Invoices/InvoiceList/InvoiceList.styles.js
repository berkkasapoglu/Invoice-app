import styled, { css } from "styled-components"

export const StyledInvoiceList = styled.ul`
  margin-top: 3rem;
`

export const Item = styled.li`
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.bgSecondary};
  transition: border 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.purple};
  }
`

export const Code = styled.p`
  &:before {
    content: "#";
    color: ${({ theme }) => theme.grayMedium};
    margin-right: 0.2rem;
  }
`

export const DueDate = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`
export const ClientName = styled.p`
  color: ${({ theme }) => theme.textSecondary};
`
export const Price = styled.h3``

export const Status = styled.div`
  position: relative;
  ${({ currStatus }) =>
    css`
      background-color: ${({ theme }) => theme[currStatus + "Dark"]};
      color: ${({ theme }) => theme[currStatus]};
    `}
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: capitalize;
  padding: 0.7rem 0.5rem;
  text-align: center;
`

export const Circle = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ theme, currStatus }) => theme[currStatus]};
  margin-right: 0.5rem;
`
