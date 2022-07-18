import { StyledModalOverlay } from "./ModalOverlay.styles"
import { useEffect, useRef } from "react"
import { useSelector } from "react-redux/es/exports"

function ModalOverlay() {
  const modalOverlayRef = useRef()
  const { isModalOpen } = useSelector((state) => state.invoices)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = "17px"
    const modalRef = modalOverlayRef.current
    if (isModalOpen) {
      modalRef.style.opacity = 1
      modalRef.style.pointerEvents = "unset"
    } else {
      modalRef.style.opacity = 0
      modalRef.style.pointerEvents = "none"
      document.body.style.overflow = "unset"
      document.body.style.paddingRight = "unset"
    }
  }, [isModalOpen])
  return <StyledModalOverlay ref={modalOverlayRef} />
}
export default ModalOverlay
