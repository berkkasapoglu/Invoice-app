import styled from "styled-components"
import { motion } from "framer-motion"

export const StyledModal = styled(motion.div)`
  position: fixed;
  inset: 0 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
`

export const Body = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 0.5rem;
  padding: 2rem;
  width: min(80%, 500px);
`
export const Title = styled.h2``
export const Message = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.font.small};
  padding: 0.5rem 0 2rem;
`
export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`
