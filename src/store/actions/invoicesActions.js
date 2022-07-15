import * as ACTION_TYPES from "../actions/action-types"

export const filterByStatus = (filters) => {
  return {
    type: ACTION_TYPES.FILTER_BY_STATUS,
    payload: filters
  }
}

export const getInvoice = (id) => {
  return {
    type: ACTION_TYPES.GET_INVOICE,
    payload: { id }
  }
}