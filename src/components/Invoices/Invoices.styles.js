import styled from "styled-components"
import plusIcon from "../../assets/icon-plus.svg"
import { StyledButton } from "../common/Button/Button.styles"
import { motion } from "framer-motion"

export const StyledHeader = styled(motion.header)`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
`

export const Info = styled.div``

export const Title = styled.h1`
  font-size: clamp(1.5rem, 2.5vw, 2rem)
`

export const InvoiceLengthInfo = styled.p`
  font-weight: bold;
  color: ${({theme}) => theme.colors.textSecondary};
  font-size: ${({theme}) => theme.font.small};
`

export const InvoiceButton = styled(StyledButton)`
  padding: 1rem 1rem 1rem 3rem;
  &:before {
    content: "";
    position: absolute;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    background-color: ${({theme}) => theme.colors.white};
    left: .5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
  }
`
