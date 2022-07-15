import {
  StyledInvoiceList,
  Item,
  Link,
  Code,
  DueDate,
  ClientName,
  Price,
  Status,
  Circle,
} from "./InvoiceList.styles"
import Badge from "../../common/Badge/Badge"

function InvoiceList({ invoices }) {
  return (
    <StyledInvoiceList>
      {invoices.map((invoice) => (
        <Link to={`/invoices/${invoice.id}`} key={invoice.id}>
          <Item>
            <Code>{invoice.id}</Code>
            <DueDate>Due {new Date(invoice.paymentDue).toDateString()}</DueDate>
            <ClientName>{invoice.clientName}</ClientName>
            <Price>£ {invoice.total}</Price>
            <Badge status={invoice.status} />
          </Item>
        </Link>
      ))}
    </StyledInvoiceList>
  )
}
export default InvoiceList
