import styled, { css } from "styled-components"
import { Link as RouterLink } from "../Invoices/InvoiceList/InvoiceList.styles"
import { motion } from "framer-motion"

export const StyledInvoiceView = styled.div`
  font-size: ${({ theme }) => theme.font.small};
`

export const Link = styled(RouterLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.3rem;
  font-size: ${({ theme }) => theme.font.small};
  margin-bottom: 2rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const MotionLink = motion(Link)

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Code = styled.h3`
  &:before {
    content: "#";
    color: ${({ theme }) => theme.colors.grayMedium};
    margin-right: 0.2rem;
  }
`

export const Title = styled.h4``

export const Ground = css`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 10px -10px ${({ theme }) => theme.colors.shadow};
  transition: background-color 0.4s ease-in-out;
  @media (max-width: 768px) {
    padding: 1.5rem 1.2rem;
  }
`
export const Header = styled(motion.div)`
  ${Ground}
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-left: auto;
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.bgSecondary};
    padding: 1.3rem 0;
    margin-top: 3.5rem;
  }
`
export const Body = styled(motion.div)`
  ${Ground}
  padding: 3rem 3rem;
`

export const Description = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 3rem;
  grid-template-columns: 1fr 1fr;
`

export const Info = styled.div`
  grid-column: 1;
  grid-row: 1;
`
export const SenderAddress = styled.div`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  grid-column: 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    grid-row: 2;
    grid-column: 1 / -1;
  }
`
export const InvoiceDate = styled.div`
  grid-row: 2;
  grid-column: span 1;
  @media (max-width: 768px) {
    grid-row: 3;
  }
`
export const PaymentDue = styled.div`
  grid-row: 3;
  grid-column: 1;
  @media (max-width: 768px) {
    grid-row: 4;
  }
`
export const BillInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2 / span 2;
  grid-column: 2 / span 1;
  @media (max-width: 768px) {
    grid-column: 2;
    grid-row: 3 / span 2;
  }
`
export const Email = styled.div`
  grid-row: 2;
  grid-column: 3 / span 1;
  @media (max-width: 768px) {
    grid-row: 5;
    grid-column: 1;
  }
`
