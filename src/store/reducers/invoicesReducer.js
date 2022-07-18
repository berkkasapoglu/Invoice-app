import * as ACTION_TYPES from "../actions/action-types"
import generateUniqueId from "../../utilities/generateId"

const initialInvoicesState = {
  invoiceItems: [],
  filters: null,
  isFormOpen: false,
  isModalOpen: false,
}

export const invoicesReducer = (
  state = initialInvoicesState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPES.FILTER_BY_STATUS:
      return {
        ...state,
        filters: payload,
      }
    case ACTION_TYPES.ADD:
      const id = generateUniqueId(state.invoiceItems)
      const newInvoice = { id, ...payload.invoice }
      return {
        ...state,
        invoiceItems: [...state.invoiceItems, newInvoice],
      }
    case ACTION_TYPES.REMOVE:
      const invoices = [...state.invoiceItems]
      const newInvoices = invoices.filter(
        (invoice) => invoice.id !== payload.id
      )
      return {
        ...state,
        invoiceItems: newInvoices,
      }
    case ACTION_TYPES.EDIT:
      return {
        ...state,
        isFormOpen: true,
        isModalOpen: true,
        isEditModeOpen: true,
        invoiceId: payload.id,
      }
    case ACTION_TYPES.SAVE_CHANGES: {
      const invoiceItemsCopy = [...state.invoiceItems]
      const newInvoiceItems = invoiceItemsCopy.map((item) => {
        let updatedItem = { ...item }
        if (updatedItem.id === payload.id) {
          updatedItem = payload.invoice
        }
        return updatedItem
      })
      return {
        ...state,
        invoiceItems: newInvoiceItems
      }
    }
    case ACTION_TYPES.CHANGE_STATUS: {
      const invoiceItems = [...state.invoiceItems]
      const newInvoiceItems = invoiceItems.map((invoice) => {
        const updatedInvoice = { ...invoice }
        if (updatedInvoice.id === payload.id) {
          updatedInvoice.status = payload.status
        }
        return updatedInvoice
      })
      return {
        ...state,
        invoiceItems: newInvoiceItems,
      }
    }
    case ACTION_TYPES.OPEN_FORM:
      return {
        ...state,
        isFormOpen: true,
        isModalOpen: true,
      }
    case ACTION_TYPES.CLOSE_FORM:
      return {
        ...state,
        isFormOpen: false,
        isModalOpen: false,
        isEditModeOpen: false,
      }
    default:
      return state
  }
}
