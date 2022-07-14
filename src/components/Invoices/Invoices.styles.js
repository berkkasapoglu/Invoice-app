import styled from "styled-components"
import plusIcon from "../../assets/icon-plus.svg"

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 1rem;
`

export const Info = styled.div``

export const Title = styled.h1``

export const InvoiceLengthInfo = styled.p`
  font-weight: bold;
  color: ${({theme}) => theme.textSecondary};
  font-size: 0.8rem;
`

export const InvoiceButton = styled.button`
  position: relative;
  padding: 1rem 1rem 1rem 3rem;
  background-color: ${({theme}) => theme.btnPrimary};
  border-radius: 2rem;
  font-size: .9rem;
  color: ${({theme}) => theme.white};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({theme}) => theme.btnPrimaryHover};
  }
  &:before {
    content: "";
    position: absolute;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    background-color: ${({theme}) => theme.white};
    left: .5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
  }
`
