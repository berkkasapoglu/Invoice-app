import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { useParams } from "react-router-dom"
import { getInvoice } from "../../store/actions/invoicesActions"
import {
  StyledInvoiceView,
  Description,
  Link,
  Title,
  Text,
  Info,
  SenderAddress,
  InvoiceDate,
  PaymentDue,
  BillInfo,
  Email,
  Code,
  Header,
  Body,
  ButtonWrapper,
  Summary,
  SummaryHead,
  SummaryBody,
  SummaryItem,
  SummaryTotal,
  Total
} from "./InvoiceView.styles"
import Button from "../common/Button/Button"
import Badge from "../common/Badge/Badge"
import { AiOutlineLeft } from "react-icons/ai"

function InvoiceView() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const invoice = useSelector((state) => state.invoice)
  useEffect(() => {
    dispatch(getInvoice(id))
  }, [dispatch, id])
  console.log(invoice)
  return (
    invoice && (
      <StyledInvoiceView>
        <Link to="/">
          <AiOutlineLeft strokeWidth={40} />
          Go back
        </Link>
        <Header>
          <Text>Status</Text>
          <Badge status={invoice.status} />
          <ButtonWrapper>
            <Button type="btnPrimary">Edit</Button>
            <Button type="btnPrimary">Delete</Button>
            <Button type="btnPrimary">Mark as Paid</Button>
          </ButtonWrapper>
        </Header>
        <Body>
          <Description>
            <Info>
              <Code>{invoice.id}</Code>
              <Text>{invoice.description}</Text>
            </Info>
            <SenderAddress>
              <span>{invoice.senderAddress.street}</span>
              <span>{invoice.senderAddress.city}</span>
              <span>{invoice.senderAddress.postCode}</span>
              <span>{invoice.senderAddress.country}</span>
            </SenderAddress>
            <InvoiceDate>
              <Text>Invoice Date</Text>
              <Title>{invoice.createdAt}</Title>
            </InvoiceDate>
            <BillInfo>
              <Text>Bill to</Text>
              <Title>{invoice.clientName}</Title>
              <span>{invoice.clientAddress.street}</span>
              <span>{invoice.clientAddress.city}</span>
              <span>{invoice.clientAddress.postCode}</span>
              <span>{invoice.clientAddress.country}</span>
            </BillInfo>
            <Email>
              <Text>Sent to</Text>
              <Title>{invoice.clientEmail}</Title>
            </Email>
            <PaymentDue>
              <Text>Payment Due</Text>
              <Title>{invoice.createdAt}</Title>
            </PaymentDue>
          </Description>
          <Summary>
            <SummaryHead>
              <Text>Item Name</Text>
              <Text>QTY.</Text>
              <Text>Price</Text>
              <Text>Total</Text>
            </SummaryHead>
            <SummaryBody>
              {invoice.items.map((item) => (
                <>
                  <SummaryItem>{item.name}</SummaryItem>
                  <SummaryItem>{item.quantity}</SummaryItem>
                  <SummaryItem>£{item.price}</SummaryItem>
                  <SummaryItem>£{item.total}</SummaryItem>
                </>
              ))}
            </SummaryBody>
            <SummaryTotal>
              <Text>Amount Due</Text>
              <Total>£ {invoice.total}</Total>
            </SummaryTotal>
          </Summary>
        </Body>
      </StyledInvoiceView>
    )
  )
}
export default InvoiceView
