import { legacy_createStore as createStore, combineReducers } from "redux"
import { invoicesReducer } from "./reducers/invoicesReducer"
import { loadState, saveState } from "./localStorage"

const persistedState = loadState()
const rootReducer = combineReducers({
  invoices: invoicesReducer,
})

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    invoices: {
      invoiceItems: store.getState().invoices.invoiceItems,
    },
  })
})

export default store
