import { StyledStatus, Circle } from "./Badge.styles"

function Badge({ status, className }) {
  return (
    <StyledStatus currStatus={status} className={className}>
      <Circle currStatus={status} />
      {status}
    </StyledStatus>
  )
}
export default Badge
