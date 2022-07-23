import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import { motion } from "framer-motion"
import Badge from "../../common/Badge/Badge"

export const StyledInvoiceList = styled(motion.ul)`
  margin-top: 3rem;
`

export const Item = styled(motion.li)`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr 1fr 1fr 0.5fr;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 1.3rem;
  border: 1px solid transparent;
  transition: border 0.3s ease-in-out, background-color 0.4s ease-in-out;
  font-size: ${({ theme }) => theme.font.small};
  box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Link = styled(RouterLink)``

export const Code = styled.p`
  font-weight: bold;
  &:before {
    content: "#";
    color: ${({ theme }) => theme.colors.grayMedium};
    margin-right: 0.2rem;
  }
  @media (max-width: 768px) {
    grid-column: 1 / 3;
  }
`

export const DueDate = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1 / 4;
  }
`
export const ClientName = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  @media (max-width: 768px) {
    grid-column: 4 / -1;
    justify-self: flex-end;
  }
`
export const Price = styled.h3`
  font-size: ${({ theme }) => theme.font.large};
  @media (max-width: 768px) {
    grid-row: 3;
    grid-column: 1 / 4;
    font-size: ${({ theme }) => theme.font.medium};
  }
`

export const Status = styled(Badge)`
  @media (max-width: 768px) {
    grid-row: 3;
    grid-column: 5;
  }
`
