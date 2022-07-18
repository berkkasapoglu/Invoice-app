import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: ${({theme}) => theme.colors.bgOverlay};
  transition: opacity 500ms ease-in-out;
`