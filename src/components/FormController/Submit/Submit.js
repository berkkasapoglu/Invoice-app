import { StyledSubmit } from "./Submit.styles"
import Button from "../../common/Button/Button"

function Submit({
  handleEditSubmit,
  discard,
  handleAddInvoice,
  isEditModeOpen,
}) {
  return (
    <StyledSubmit>
      <Button type="btnGray" onClick={discard}>
        Discard
      </Button>
      {isEditModeOpen ? (
        <>
          <Button type="btnPrimary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <Button type="btnInfo" value="draft" onClick={handleAddInvoice}>
            Save as Draft
          </Button>
          <Button type="btnPrimary" onClick={handleAddInvoice}>
            Save & Send
          </Button>
        </>
      )}
    </StyledSubmit>
  )
}
export default Submit
