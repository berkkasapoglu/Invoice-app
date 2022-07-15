import { StyledButton } from "./Button.styles"

function Button({children, ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}
export default Button