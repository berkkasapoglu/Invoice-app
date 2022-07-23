import { StyledModalOverlay } from "./ModalOverlay.styles"
import { useEffect, useRef } from "react"
import { modalOverlayVariants } from "../../../utilities/variants"
import { useDispatch } from "react-redux"
import { closeForm } from "../../../store/actions/invoicesActions"

function ModalOverlay() {
  const modalOverlayRef = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  })

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target === modalOverlayRef.current) {
        dispatch(closeForm())
      }
    }
    document.addEventListener("click", closeMenu, true)
    return () => {
      document.removeEventListener("click", closeMenu, true)
    }
  })
  return (
    <StyledModalOverlay
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalOverlayVariants.backdrop}
      ref={modalOverlayRef}
    />
  )
}
export default ModalOverlay
