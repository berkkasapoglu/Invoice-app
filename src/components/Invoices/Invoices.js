import {
  StyledHeader,
  Title,
  Info,
  InvoiceLengthInfo,
  InvoiceButton,
} from "./Invoices.styles"
import InvoiceList from "./InvoiceList/InvoiceList"
import Filter from "./Filter/Filter"
import { useSelector } from "react-redux/es/exports"

function Invoices() {
  const invoiceData = useSelector(state => state.invoices)
  
  return (
    <>
      <StyledHeader>
        <Info>
          <Title>Invoices</Title>
          <InvoiceLengthInfo>
            There are {invoiceData.length} total invoices
          </InvoiceLengthInfo>
        </Info>
        <Filter />
        <InvoiceButton type="btnPrimary">New Invoice</InvoiceButton>
      </StyledHeader>
      <InvoiceList invoices={invoiceData} />
    </>
  )
}
export default Invoices
