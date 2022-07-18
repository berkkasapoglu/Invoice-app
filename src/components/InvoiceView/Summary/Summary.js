import {
  StyledSummary,
  Table,
  Head,
  Body,
  TotalPrice,
  Result,
  Text,
  Item,
  ItemName,
  ItemQuantity,
  ItemPrice,
  ItemTotal
} from "./Summary.styles"

function Summary({ invoice }) {
  return (
    <StyledSummary>
      <Table>
        <Head>
          <ItemName>Item Name</ItemName>
          <ItemQuantity>QTY.</ItemQuantity>
          <ItemPrice>Price</ItemPrice>
          <ItemTotal>Total</ItemTotal>
        </Head>
        <Body>
          {invoice.items.map((item, idx) => (
            <Item key={idx}>
              <ItemName>{item.name}</ItemName>
              <ItemQuantity>{item.quantity}</ItemQuantity>
              <ItemPrice>£{item.price}</ItemPrice>
              <ItemTotal>£{item.total}</ItemTotal>
            </Item>
          ))}
        </Body>
      </Table>
      <Result>
        <Text>Amount Due</Text>
        <TotalPrice>£ {invoice.total}</TotalPrice>
      </Result>
    </StyledSummary>
  )
}
export default Summary
