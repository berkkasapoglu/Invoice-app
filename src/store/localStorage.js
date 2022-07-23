import initialState from "../data/invoice"

export const loadState = () => {
  try {
    const invoicesState = localStorage.getItem("invoices")
    const themeState = localStorage.getItem("theme")
    if (invoicesState === null) {
      return {
        invoices: {
          invoiceItems: initialState,
        },
        theme: "dark",
      }
    }
    return {
      invoices: JSON.parse(invoicesState),
      theme: JSON.parse(themeState)
    }
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    for (const key in state) {
      localStorage.setItem([key], JSON.stringify(state[key]))
    }
  } catch {}
}
