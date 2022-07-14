import { StyledContainer } from "./Container.styles"

function Container({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}
export default Container