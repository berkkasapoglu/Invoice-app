import styled, { css } from "styled-components"
import { Label } from "../Form.styles"
import { FaTrash } from "react-icons/fa"

export const StyledItemList = styled.div``

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.grayLight};
  margin-bottom: 0.6rem;
  font-size: ${({ theme }) => theme.font.extraLarge};
`

const RowOrder = css`
  display: grid;
  grid-template-columns: 180px 100px 100px 60px 1fr;
  align-items: center;
  gap: 10px;
`

export const Head = styled.div`
  ${RowOrder}
  & ${Label}:nth-child(4) {
    justify-self: center;
  }
`

export const List = styled.ul`
  margin-bottom: 1.5rem;
`

export const Row = styled.li`
  ${RowOrder}
  margin-bottom: 1rem;
`

export const Number = styled.h3`
  font-size: ${({ theme }) => theme.font.medium};
  justify-self: center;
`

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
  fill: ${({theme}) => theme.colors.grayLight};
  transition: fill .2s ease-in-out;
  &:hover {
    fill: ${({theme}) => theme.colors.purple};
  }
`