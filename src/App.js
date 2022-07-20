import theme from "./config/theme"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { useSelector } from "react-redux/es/exports"
import Wrapper from "./components/Wrapper/Wrapper"
import AnimatedRoutes from "./AnimatedRoutes"
import GlobalStyle from "./config/GlobalStyle"

function App() {
  const selectedTheme = useSelector((state) => state.theme)
  return (
    <ThemeProvider
      theme={{ colors: theme[selectedTheme], font: theme.fontSizes }}
    >
      <Wrapper>
        <GlobalStyle />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
