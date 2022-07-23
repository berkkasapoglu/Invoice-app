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
  gap: 10px;
  grid-template-columns: 150px 120px 120px 50px min-content;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr) 100px min-content;
    & > :nth-child(1) {
      grid-column: 1 / -1;
    }
  }
`

export const Head = styled.div`
  ${RowOrder}
  & ${Label}:nth-child(4) {
    justify-self: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  ${({ hideLabels }) =>
    hideLabels &&
    css`
      & > :nth-child(1) {
        display: none;
      }
    `}
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
  padding: 0.8rem 0;
`

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.grayLight};
  transition: fill 0.2s ease-in-out;
  height: 3.2rem;
  align-self: flex-end;
  &:hover {
    fill: ${({ theme }) => theme.colors.purple};
  }
`
