import {
  StyledHeader,
  Title,
  Info,
  InvoiceLengthInfo,
  InvoiceButton,
} from "./Invoices.styles"
import InvoiceList from "./InvoiceList/InvoiceList"
import Filter from "./Filter/Filter"
import useInvoices from "../../hooks/useInvoices"
import { useDispatch } from "react-redux/es/exports"
import { openForm } from "../../store/actions/invoicesActions"

function Invoices() {
  const { invoices } = useInvoices()
  const dispatch = useDispatch()

  const handleFormOpen = () => {
    dispatch(openForm())
  }

  return (
    <>
      <StyledHeader>
        <Info>
          <Title>Invoices</Title>
          <InvoiceLengthInfo>
            There are {invoices.length} total invoices
          </InvoiceLengthInfo>
        </Info>
        <Filter />
        <InvoiceButton type="btnPrimary" onClick={handleFormOpen}>New Invoice</InvoiceButton>
      </StyledHeader>
      <InvoiceList />
    </>
  )
}
export default Invoices
