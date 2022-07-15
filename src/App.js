import Sidebar from "./components/Sidebar/Sidebar"
import Invoices from "./components/Invoices/Invoices"
import Container from "./components/Container/Container"
import InvoiceView from "./components/InvoiceView/InvoiceView"
import theme from "./config/theme"
import store from "./store"
import { ThemeProvider } from "styled-components"
import { Provider } from "react-redux"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ colors: theme.dark, font: theme.fontSizes }}>
        <BrowserRouter>
          <Sidebar />
          <Container>
            <Routes>
              <Route path="/" element={<Invoices />} />
              <Route path="/invoices/:id" element={<InvoiceView />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
