import {
  StyledHeader,
  Title,
  Info,
  InvoiceLengthInfo,
  InvoiceButton,
} from "./Invoices.styles"
import InvoiceList from "./InvoiceList/InvoiceList"
import Filter from "./Filter/Filter"
import data from "../../data/invoice"
import { useState } from "react"

function Invoices() {
  const [invoiceData, setInvoiceData] = useState(data)

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
        <InvoiceButton>New Invoice</InvoiceButton>
      </StyledHeader>
      <InvoiceList invoices={invoiceData} />
    </>
  )
}
export default Invoices
