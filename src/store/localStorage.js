import initialState from "../data/invoice"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("data")
    if (serializedState === null) {
      return {
        invoices: {
          invoiceItems: initialState
        }
      }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("data", serializedState)
  } catch {}
}
