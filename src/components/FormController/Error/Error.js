import { StyledError, Message } from "./Error.styles"

function Error({ messages }) {
  return (
    <StyledError>
      {messages.map((message, idx) => (
        <Message key={idx}>{message}</Message>
      ))}
    </StyledError>
  )
}
export default Error
