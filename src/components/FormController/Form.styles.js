import styled, { css } from "styled-components"
import DatePicker from "react-datepicker"
import { motion } from "framer-motion"

export const FormWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px 30px 30px 140px;
  bottom: 0;
  z-index: 25;
  background-color: ${({ theme }) => theme.colors.bgBase};
  border-top-right-radius: 20px;
  max-width: 700px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  @media (max-width: 1024px) {
    left: -20px;
    top: 80px;
    padding: 40px 30px 30px 50px;
  }
  @media (max-width: 768px) {
    padding: 40px 10px 30px 45px;
    border-radius: 0;
  }
`

export const StyledForm = styled.form`
  position: relative;
  height: 80%;
  padding-right: 1.5rem;
  padding-bottom: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.bgFormScroll};
    border-radius: 0.5rem;
  }
`
export const Header = styled.h2`
  margin-bottom: 1rem;
`
export const SubHeader = styled.h4`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.purple};
  margin-bottom: 1rem;
`
export const InputSection = styled.div`
  margin-bottom: 2.5rem;
`
export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`
export const InputWrapper = styled.div`
  flex: 1;
  margin-bottom: 0.5rem;
`
export const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 0.5rem 0;
  ${({ error, isValidated }) =>
    error &&
    isValidated &&
    css`
      color: 1px solid ${({ theme }) => theme.colors.error};
    `}
`

export const BaseInput = css`
  display: block;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: 0.4rem;
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: border 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Input = styled.input`
  ${BaseInput}
  ${({ error, isValidated }) =>
    error &&
    isValidated &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.error};
    `}
`

export const Select = styled.select`
  ${BaseInput}
  cursor: pointer;
`
export const Option = styled.option`
  height: 20px;
`

export const StyledDatePicker = styled(DatePicker)`
  ${BaseInput}
  cursor: pointer;
`
