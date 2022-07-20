import { useDispatch, useSelector } from "react-redux/es/exports"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import {
  editInvoice,
  removeInvoice,
  changeStatus,
  toggleModal,
} from "../../store/actions/invoicesActions"
import {
  StyledInvoiceView,
  Description,
  MotionLink,
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
} from "./InvoiceView.styles"
import Summary from "./Summary/Summary"
import Button from "../common/Button/Button"
import Badge from "../common/Badge/Badge"
import { AiOutlineLeft } from "react-icons/ai"
import { invoiceViewVariants } from "../../utilities/variants"

function InvoiceView() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const invoice = useSelector((state) =>
    state.invoices.invoiceItems.find((invoice) => invoice.id === id)
  )

  const handleEditInvoice = () => {
    dispatch(editInvoice(id))
  }

  const handleChangeStatus = (status) => {
    dispatch(changeStatus(id, status))
  }

  return (
    invoice && (
      <StyledInvoiceView>
        <MotionLink
          to="/"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={invoiceViewVariants.header}
        >
          <AiOutlineLeft strokeWidth={40} />
          Go back
        </MotionLink>
        <Header
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={invoiceViewVariants.header}
        >
          <Text>Status</Text>
          <Badge status={invoice.status} />
          <ButtonWrapper>
            <Button type="btnDanger" onClick={() => dispatch(toggleModal(id))}>
              Delete
            </Button>
            {invoice.status !== "paid" && (
              <>
                <Button type="btnInfo" onClick={() => handleEditInvoice(id)}>
                  Edit
                </Button>
                {invoice.status !== "draft" && (
                  <Button
                    type="btnPrimary"
                    onClick={() => handleChangeStatus("paid")}
                  >
                    Mark as Paid
                  </Button>
                )}
              </>
            )}
          </ButtonWrapper>
        </Header>
        <Body
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={invoiceViewVariants.body}
        >
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
              <Title>{new Date(invoice.createdAt).toDateString()}</Title>
            </InvoiceDate>
            <BillInfo>
              <Text>Bill to</Text>
              <Title>{invoice.clientName}</Title>
              <Text>{invoice.clientAddress.street}</Text>
              <Text>{invoice.clientAddress.city}</Text>
              <Text>{invoice.clientAddress.postCode}</Text>
              <Text>{invoice.clientAddress.country}</Text>
            </BillInfo>
            <Email>
              <Text>Sent to</Text>
              <Title>{invoice.clientEmail}</Title>
            </Email>
            <PaymentDue>
              <Text>Payment Due</Text>
              <Title>{new Date(invoice.paymentDue).toDateString()}</Title>
            </PaymentDue>
          </Description>
          <Summary invoice={invoice} />
        </Body>
      </StyledInvoiceView>
    )
  )
}
export default InvoiceView
