import {
  StyledInvoiceList,
  Item,
  Link,
  Code,
  DueDate,
  ClientName,
  Price,
  Status
} from "./InvoiceList.styles"
import useInvoices from "../../../hooks/useInvoices"
import { invoicesVariants } from "../../../utilities/variants"

function InvoiceList() {
  const { invoices } = useInvoices()

  return (
    <StyledInvoiceList>
      {invoices.map((invoice, idx) => (
        <Link to={`/invoices/${invoice.id}`} key={invoice.id}>
          <Item
            custom={idx}
            layout
            initial="hidden"
            animate="visible"
            variants={invoicesVariants.item}
            exit="exit"
          >
            <Code>{invoice.id}</Code>
            <DueDate>Due {new Date(invoice.paymentDue).toDateString()}</DueDate>
            <ClientName>{invoice.clientName}</ClientName>
            <Price>£ {invoice.total}</Price>
            <Status status={invoice.status} />
          </Item>
        </Link>
      ))}
    </StyledInvoiceList>
  )
}
export default InvoiceList
