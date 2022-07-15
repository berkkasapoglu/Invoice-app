import styled from "styled-components"
import monster from "../../assets/monster.svg"
import { Link } from "react-router-dom"
export const StyledSidebar = styled.nav`
  width: 110px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 0 20px 20px 0;
  background-color: ${({theme}) => theme.colors.bgSecondary};
`

export const Logo = styled(Link)`
  display: block;
  background-image: url(${monster});
  background-repeat: no-repeat;
  background-color: ${({theme}) => theme.colors.purple};
  background-size: 55%;
  background-position: center center;
  border-radius: 0 20px 20px 0;
  width: 100%;
  height: 100px;
`
