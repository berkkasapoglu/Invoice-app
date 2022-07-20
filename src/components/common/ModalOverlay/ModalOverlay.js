import { StyledModalOverlay } from "./ModalOverlay.styles"
import { useEffect } from "react"
import { modalOverlayVariants } from "../../../utilities/variants"

function ModalOverlay() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  })
  return (
    <StyledModalOverlay
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalOverlayVariants.backdrop}
    />
  )
}
export default ModalOverlay
