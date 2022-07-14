import Sidebar from "./components/Sidebar/Sidebar"
import { BrowserRouter } from "react-router-dom"
import Invoices from "./components/Invoices/Invoices"
import Container from "./components/Container/Container"
import theme from "./config/theme"
import { ThemeProvider } from "styled-components"
function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <BrowserRouter>
        <Sidebar />
        <Container>
          <Invoices />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
