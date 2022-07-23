import styled from "styled-components"

export const StyledSummary = styled.div`
  border-radius: inherit;
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.small};
  @media (max-width: 768px) {
    font-size: ${({theme}) => theme.font.extraSmall}
  }
`

export const Table = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSummary};
  border-radius: 0.5rem;
  transition: background-color 0.4s ease-in-out;
`

export const TableOrder = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  padding: 0 2rem;
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    padding: 1rem 2em;
  }
`

export const Head = styled(TableOrder)`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 1.5rem 2rem 0.5rem;
`

export const Body = styled.div`
  gap: 1rem 0;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
`

export const Item = styled(TableOrder)`
  padding-bottom: 0.8rem;
`

export const ItemName = styled.p``

export const ItemQuantity = styled.p`
  justify-self: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const ItemPrice = styled.p`
  justify-self: end;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const ItemQuantityPrice = styled.p`
  grid-row: 2;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: bold;
`

export const ItemTotal = styled.p`
  justify-self: end;
  @media (max-width: 768px) {
    grid-row: 2;
  }
`

export const Result = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgSummaryTotal};
  border-bottom-right-radius: inherit;
  border-bottom-left-radius: inherit;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  transition: background-color 0.4s ease-in-out;
`

export const TotalPrice = styled.h1`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: ${({theme}) => theme.font.large}
  }
`
