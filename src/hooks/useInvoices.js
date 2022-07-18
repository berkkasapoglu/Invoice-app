import { useSelector } from "react-redux"

function useInvoices() {
  const filterByStatus = (state) => {
    const {
      invoices: { invoiceItems, filters },
    } = state
    if (filters) {
      const currentFilters = Object.keys(filters).filter((key) => {
        return filters[key]
      })
      return currentFilters.length
        ? invoiceItems.filter((invoice) =>
            currentFilters.includes(invoice.status)
          )
        : invoiceItems
    } else {
      return invoiceItems
    }
  }

  const invoices = useSelector((state) => filterByStatus(state))
  return { invoices }
}
export default useInvoices
