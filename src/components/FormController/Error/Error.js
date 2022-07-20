import { StyledError, Message } from "./Error.styles"

function Error({ messages }) {
  return (
    <StyledError>
      {messages.map((message) => (
        <Message>{message}</Message>
      ))}
    </StyledError>
  )
}
export default Error
