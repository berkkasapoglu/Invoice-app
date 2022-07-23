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
  ItemTotal,
  ItemQuantityPrice
} from "./Summary.styles"
import useWindowSize from "../../../hooks/useWindowSize"

function Summary({ invoice }) {
  const { windowSize } = useWindowSize()
  const isDesktop = windowSize.width > 768
  return (
    <StyledSummary>
      <Table>
        {isDesktop && (
          <Head>
            <ItemName>Item Name</ItemName>
            <ItemQuantity>QTY.</ItemQuantity>
            <ItemPrice>Price</ItemPrice>
            <ItemTotal>Total</ItemTotal>
          </Head>
        )}

        <Body>
          {invoice.items.map((item, idx) => (
            <Item key={idx}>
              <ItemName>{item.name}</ItemName>

              {isDesktop ? (
                <>
                  <ItemQuantity>{item.quantity}</ItemQuantity>
                  <ItemPrice>£ {item.price}</ItemPrice>
                </>
              ) : (
                <>
                  <ItemQuantityPrice>{item.quantity} x £ {item.price}</ItemQuantityPrice>
                </>
              )}

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
