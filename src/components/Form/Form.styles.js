import styled, { css } from "styled-components"
import DatePicker from "react-datepicker"

export const FormWrapper = styled.div`
  position: fixed;
  top: 0;
  left: -700px;
  padding: 50px 30px 30px 140px;
  z-index: 25;
  width: 700px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgBase};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: left 500ms ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      animation-duration: 700ms;
      animation-name: slide;
      left: 0px;
      @keyframes slide {
        from {
          left: -700px;
        }

        70% {
          left: 50px;
        }

        to {
          left: 0;
        }
      }
    `}
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
  ${({ error }) =>
    error &&
    css`
      color: ${({ theme }) => theme.colors.error};
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
  color: ${({ theme }) => theme.colors.white};
  transition: border 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

export const Input = styled.input`
  ${BaseInput}
  ${({ error }) =>
    error &&
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
export const Submit = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.colors.bgBase};
  padding: 2rem 4rem 2rem 8.75rem;
  gap: 10px;
  ${({ isEditOpen }) =>
    !isEditOpen &&
    css`
      & > :first-child {
        margin-right: auto;
      }
    `}
`
