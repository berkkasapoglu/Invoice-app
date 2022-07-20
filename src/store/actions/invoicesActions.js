import * as ACTION_TYPES from "../actions/action-types"

export const filterByStatus = (filters) => {
  return {
    type: ACTION_TYPES.FILTER_BY_STATUS,
    payload: filters,
  }
}

export const openForm = () => {
  return {
    type: ACTION_TYPES.OPEN_FORM,
  }
}

export const closeForm = () => {
  return {
    type: ACTION_TYPES.CLOSE_FORM,
  }
}

export const addInvoice = (invoice) => {
  return {
    type: ACTION_TYPES.ADD,
    payload: {
      invoice: invoice,
    },
  }
}

export const removeInvoice = (id) => {
  return {
    type: ACTION_TYPES.REMOVE,
    payload: {
      id: id,
    },
  }
}

export const editInvoice = (id) => {
  return {
    type: ACTION_TYPES.EDIT,
    payload: {
      id: id,
    },
  }
}

export const changeStatus = (id, status) => {
  return {
    type: ACTION_TYPES.CHANGE_STATUS,
    payload: {
      status: status,
      id: id,
    },
  }
}

export const saveChanges = (id, invoice) => {
  return {
    type: ACTION_TYPES.SAVE_CHANGES,
    payload: {
      id: id,
      invoice: invoice,
    },
  }
}

export const toggleModal = (id) => {
  return {
    type: ACTION_TYPES.TOGGLE_MODAL,
    payload: {
      id: id
    },
  }
}
