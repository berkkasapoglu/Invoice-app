import { useState } from "react"
import {
  StyledFilter,
  Button,
  OptionList,
  Option,
  ArrowDown,
} from "./Filter.styles"
import useClickOutside from "../../../hooks/useClickOutside"
import { useDispatch, useSelector } from "react-redux"
import { filterByStatus } from "../../../store/actions/invoicesActions"

function Filter({ isMobile }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { filters = {} } = useSelector((state) => state.invoices)
  const filterRef = useClickOutside(() => setIsFilterOpen(false))
  const dispatch = useDispatch()

  const toggleFilterList = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  const handleOptionSelect = (e) => {
    const currentFilters = {
      ...filters,
      [e.target.value]: !filters[e.target.value],
    }
    dispatch(filterByStatus(currentFilters))
  }

  return (
    <StyledFilter ref={filterRef}>
      <Button onClick={toggleFilterList}>
        Filter
        {!isMobile && " By Status"}
        <ArrowDown />
      </Button>
      {isFilterOpen && (
        <OptionList>
          <Option
            selected={filters.paid}
            onClick={handleOptionSelect}
            value="paid"
          >
            Paid
          </Option>
          <Option
            selected={filters.pending}
            onClick={handleOptionSelect}
            value="pending"
          >
            Pending
          </Option>
          <Option
            selected={filters.draft}
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
