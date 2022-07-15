import styled from "styled-components"
import { Link as RouterLink } from "../Invoices/InvoiceList/InvoiceList.styles"

export const StyledInvoiceView = styled.div``

export const Link = styled(RouterLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.3rem;
  font-size: ${({ theme }) => theme.font.small};
  margin-bottom: 2rem;
  font-weight: bold;
  transition: 0.3s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.purple};
  }
`

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

export const Title = styled.h3``

export const Ground = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
`
export const Header = styled(Ground)`
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
`
export const Body = styled(Ground)`
  padding: 3rem 3rem;
`

export const Description = styled.div`
  display: grid;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 3rem;
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
`
export const InvoiceDate = styled.div`
  grid-row: 2;
  grid-column: span 1;
`
export const PaymentDue = styled.div`
  grid-row: 3;
  grid-column: 1;
`
export const BillInfo = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 2 / span 2;
  grid-column: 2 / span 1;
`
export const Email = styled.div`
  grid-row: 2;
  grid-column: 3 / span 1;
`
export const Summary = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSummary};
  border-radius: inherit;
`

export const SummaryTable = styled.div`
  display: grid;
  padding: 1rem 2rem;
  grid-template-columns: 2fr 1fr 1fr auto;
`

export const SummaryHead = styled(SummaryTable)``

export const SummaryBody = styled(SummaryTable)`
  gap: 1rem 0;
`
export const SummaryItem = styled.p`
  font-size: ${({theme}) => theme.font.small};
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgSummaryTotal};
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  align-items: center;
  padding: 1rem 2rem;
`

export const Total = styled.h1``
