import {
  StyledInvoiceList,
  Item,
  Code,
  DueDate,
  ClientName,
  Price,
  Status,
  Circle,
} from "./InvoiceList.styles"
function InvoiceList({ invoices }) {
  return (
    <StyledInvoiceList>
      {invoices.map((invoice) => (
        <Item key={invoice.id}>
          <Code>{invoice.id}</Code>
          <DueDate>Due {new Date(invoice.paymentDue).toDateString()}</DueDate>
          <ClientName>{invoice.clientName}</ClientName>
          <Price>£ {invoice.total}</Price>
          <Status currStatus={invoice.status}>
            <Circle currStatus={invoice.status} />
            {invoice.status}
          </Status>
        </Item>
      ))}
    </StyledInvoiceList>
  )
}
export default InvoiceList
