import { legacy_createStore as createStore, combineReducers } from "redux"
import { invoicesReducer, invoiceViewReducer } from "./reducers/invoicesReducer"

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  invoice: invoiceViewReducer,
})

const store = createStore(rootReducer)

export default store
