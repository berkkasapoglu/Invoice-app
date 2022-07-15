import { useState } from "react"
import {
  StyledFilter,
  Button,
  OptionList,
  Option,
  ArrowDown,
} from "./Filter.styles"
import useClickOutside from "../../../hooks/useClickOutside"
import { useDispatch } from "react-redux"
import { filterByStatus } from "../../../store/actions/invoicesActions"

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    paid: false,
    pending: false,
    draft: false,
  })

  const filterRef = useClickOutside(() => setIsFilterOpen(false))
  const dispatch = useDispatch()

  const toggleFilterList = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const handleOptionSelect = (e) => {
    const currentFilters = {
      ...selectedFilters,
      [e.target.value]: !selectedFilters[e.target.value],
    }
    dispatch(filterByStatus(currentFilters))
    setSelectedFilters(currentFilters)
  }

  return (
    <StyledFilter ref={filterRef}>
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
