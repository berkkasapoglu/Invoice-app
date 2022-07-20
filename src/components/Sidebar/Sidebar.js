import {
  StyledSidebar,
  Logo,
  Footer,
  SunIcon,
  MoonIcon,
} from "./Sidebar.styles"
import { useDispatch, useSelector } from "react-redux"
import { changeTheme } from "../../store/actions/themeActions"
function Sidebar() {
  const selectedTheme = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  return (
    <StyledSidebar>
      <Logo to="/" />
      <Footer>
        {selectedTheme === "dark" ? (
          <SunIcon onClick={() => dispatch(changeTheme("light"))} />
        ) : (
          <MoonIcon onClick={() => dispatch(changeTheme("dark"))} />
        )}
      </Footer>
    </StyledSidebar>
  )
}
export default Sidebar
