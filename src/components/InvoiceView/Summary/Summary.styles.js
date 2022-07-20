import styled from "styled-components"

export const StyledSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: inherit;
`

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.small};
`

export const Table = styled.div`
  background-color: ${({ theme }) => theme.colors.bgSummary};
  border-radius: 0.5rem;
  transition: background-color .4s ease-in-out;
`

export const TableOrder = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  padding: 1rem 2rem;
`

export const Head = styled(TableOrder)`
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const Body = styled.div`
  gap: 1rem 0;
  font-size: ${({ theme }) => theme.font.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: bold;
  padding-top: .5rem;
  padding-bottom: 1.5rem;
`

export const Item = styled(TableOrder)``

export const ItemName = styled.p``

export const ItemQuantity = styled.p`
  justify-self: center;
`

export const ItemPrice = styled.p`
  justify-self: end;
`
export const ItemTotal = styled.p`
  justify-self: end;
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
  transition: background-color .4s ease-in-out;
`

export const TotalPrice = styled.h1`
  font-weight: bold;
`
