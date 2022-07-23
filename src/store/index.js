import { legacy_createStore as createStore, combineReducers } from "redux"
import { invoicesReducer } from "./reducers/invoicesReducer"
import { themeReducer } from "./reducers/themeReducer"
import { loadState, saveState } from "./localStorage"

const persistedState = loadState()
const rootReducer = combineReducers({
  invoices: invoicesReducer,
  theme: themeReducer,
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
    theme: store.getState().theme
  })
})

export default store
