import styled, { css } from "styled-components"
import { AiOutlineDown } from "react-icons/ai"
import checkIcon from "../../../assets/icon-check.svg"

export const StyledFilter = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: 2rem;
`
export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    svg {
      transform: rotate(180deg);
    }
  }
`
export const ArrowDown = styled(AiOutlineDown)`
  fill: ${({ theme }) => theme.purple};
  transition: 0.3s ease-in-out;
  margin-left: 1rem;
`

export const OptionList = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.bgSecondary};
  box-shadow: 0 10px 20px 0 rgb(0 0 0 / 25%);
  border-radius: 0.5rem;
  margin-top: 1rem;
`

export const Option = styled.button`
  position: relative;
  cursor: pointer;
  padding-left: 1.8rem;
  margin-bottom: 1rem;
  &:hover::before {
    border: 1px solid ${({ theme }) => theme.purple};
  }
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.bgBase};
    padding: 8px;
    border-radius: 0.2rem;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid transparent;
    transition: border 300ms ease-in-out;
    ${({ selected }) =>
      selected &&
      css`
        background-image: url(${checkIcon});
        background-size: 12px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: ${({ theme }) => theme.purple};
      `}
  }
`
