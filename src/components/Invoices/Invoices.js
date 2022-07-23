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
import useWindowSize from "../../hooks/useWindowSize"
import { openForm } from "../../store/actions/invoicesActions"
import { invoicesVariants } from "../../utilities/variants"

function Invoices() {
  const { invoices } = useInvoices()
  const dispatch = useDispatch()
  const { windowSize } = useWindowSize()
  const isMobile = windowSize.width <= 768
  const handleFormOpen = () => {
    dispatch(openForm())
  }

  return (
    <>
      <StyledHeader
        initial="hidden"
        animate="visible"
        variants={invoicesVariants.header}
        exit="exit"
      >
        <Info>
          <Title>Invoices</Title>
          <InvoiceLengthInfo>
            {!isMobile && "There are "}
            {invoices.length} total invoices
          </InvoiceLengthInfo>
        </Info>
        <Filter isMobile={isMobile} />
        <InvoiceButton type="btnPrimary" onClick={handleFormOpen}>
          {isMobile ? "New" : "New Invoice"}
        </InvoiceButton>
      </StyledHeader>
      <InvoiceList />
    </>
  )
}
export default Invoices
