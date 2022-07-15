import { StyledStatus, Circle } from "./Badge.styles"

function Badge({ status }) {
  return (
    <StyledStatus currStatus={status}>
      <Circle currStatus={status} />
      {status}
    </StyledStatus>
  )
}
export default Badge
