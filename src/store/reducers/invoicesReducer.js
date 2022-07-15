import data from "../../data/invoice"
import * as ACTION_TYPES from "../actions/action-types"

export const invoicesReducer = (state = data, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.FILTER_BY_STATUS:
      const filters = Object.keys(payload).filter((key) => {
        return payload[key]
      })
      let newState
      if (filters.length) {
        newState = data.filter((invoice) => filters.includes(invoice.status))
      }
      return newState ? newState : data
    default: 
      return state
  }
}

export const invoiceViewReducer = (state = null, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.GET_INVOICE:
      return data.find(invoice => invoice.id === payload.id)
    default: 
      return state
  }
}
