import styled, { css } from "styled-components"
import monster from "../../assets/monster.svg"
import { Link } from "react-router-dom"
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
export const StyledSidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 110px;
  height: 100vh;
  flex-direction: row;
  border-radius: 0 20px 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bgSidebar};
  @media (max-width: 1024px) {
    width: 100%;
    height: 80px;
    flex-direction: row;
  }
`

export const Footer = styled.div`
  padding: 0 4rem;
  @media (min-width: 1024px) {
    width: 100%;
    padding: 4rem 0;
  }
`
export const ThemeIcon = css`
  width: 100%;
  fill: ${({ theme }) => theme.colors.bgTheme};
  transition: fill 0.3s ease-in-out;
  font-size: ${({ theme }) => theme.font.extraLarge};
  cursor: pointer;
  &:hover {
    fill: ${({ theme }) => theme.colors.bgThemeHover};
  }
`
export const SunIcon = styled(BsFillSunFill)`
  ${ThemeIcon}
`
export const MoonIcon = styled(BsFillMoonFill)`
  ${ThemeIcon}
`
export const Logo = styled(Link)`
  display: block;
  background-image: url(${monster});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.purple};
  background-size: 55%;
  background-position: center center;
  border-radius: 0 20px 20px 0;
  height: 100%;
  width: 100px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 100px;
  }
`
