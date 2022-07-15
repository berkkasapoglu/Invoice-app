import styled, { css } from "styled-components"
import { Link as RouterLink } from "react-router-dom"

export const StyledInvoiceList = styled.ul`
  margin-top: 3rem;
`

export const Item = styled.li`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.bgSecondary};
  transition: border 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Link = styled(RouterLink)``

export const Code = styled.p`
  &:before {
    content: "#";
    color: ${({ theme }) => theme.colors.grayMedium};
    margin-right: 0.2rem;
  }
`

export const DueDate = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`
export const ClientName = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`
export const Price = styled.h3``
