import Sidebar from "./components/Sidebar/Sidebar"
import Invoices from "./components/Invoices/Invoices"
import Container from "./components/Container/Container"
import InvoiceView from "./components/InvoiceView/InvoiceView"
import Form from "./components/Form/Form"
import ModalOverlay from "./components/common/ModalOverlay/ModalOverlay"
import theme from "./config/theme"
import { ThemeProvider } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (
    <ThemeProvider theme={{ colors: theme.dark, font: theme.fontSizes }}>
      <BrowserRouter>
        <Sidebar />
        <ModalOverlay />
        <Form />
        <Container>
          <Routes>
            <Route path="/" element={<Invoices />} />
            <Route path="/invoices/:id" element={<InvoiceView />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
