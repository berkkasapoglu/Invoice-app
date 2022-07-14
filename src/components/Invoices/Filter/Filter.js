import { useState } from "react"
import {
  StyledFilter,
  Button,
  OptionList,
  Option,
  ArrowDown,
} from "./Filter.styles"

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    paid: false,
    pending: true,
    draft: false,
  })
  const toggleFilterList = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const handleOptionSelect = (e) => {
    console.log(e.target.value)
    setSelectedFilters({
      ...selectedFilters,
      [e.target.value]: !selectedFilters[e.target.value],
    })
  }

  return (
    <StyledFilter>
      <Button onClick={toggleFilterList}>
        Filter By Status
        <ArrowDown />
      </Button>
      {isFilterOpen && (
        <OptionList>
          <Option
            selected={selectedFilters.paid}
            onClick={handleOptionSelect}
            value="paid"
          >
            Paid
          </Option>
          <Option
            selected={selectedFilters.pending}
            onClick={handleOptionSelect}
            value="pending"
          >
            Pending
          </Option>
          <Option
            selected={selectedFilters.draft}
            onClick={handleOptionSelect}
            value="draft"
          >
            Draft
          </Option>
        </OptionList>
      )}
    </StyledFilter>
  )
}
export default Filter
