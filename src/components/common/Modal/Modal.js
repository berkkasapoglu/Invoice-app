import { StyledModal, Title, Message, Body, ButtonGroup } from "./Modal.styles"
import ModalOverlay from "../ModalOverlay/ModalOverlay"
import Button from "../Button/Button"
import { useSelector, useDispatch } from "react-redux"
import { modalVariants } from "../../../utilities/variants"
import {
  toggleModal,
  removeInvoice,
} from "../../../store/actions/invoicesActions"
import useClickOutside from "../../../hooks/useClickOutside"
import { useNavigate } from "react-router-dom"

function Modal() {
  const { invoiceId } = useSelector((state) => state.invoices)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCloseModal = () => {
    dispatch(toggleModal())
  }

  const handleRemoveInvoice = () => {
    dispatch(removeInvoice(invoiceId))
    navigate("/")
  }
  const modalRef = useClickOutside(handleCloseModal)

  return (
    <>
      <ModalOverlay />
      <StyledModal
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants.modal}
      >
        <Body ref={modalRef}>
          <Title>Confirm Delete</Title>
          <Message>
            Are you sure you want to delete invoice #{invoiceId}? This
            action cannot be undone.
          </Message>
          <ButtonGroup>
            <Button type="btnGray" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button type="btnDanger" onClick={handleRemoveInvoice}>
              Delete
            </Button>
          </ButtonGroup>
        </Body>
      </StyledModal>
    </>
  )
}
export default Modal
