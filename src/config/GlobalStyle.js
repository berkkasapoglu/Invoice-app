import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family:    "Montserrat",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  margin: 0;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
ul,
dd {
  margin: 0;
  padding: 0;
}

input,
button,
textarea,
select {
  font: inherit;
}

input {
  border: none;
  background-color: inherit;
  outline: none;
}

select {
  background-color: inherit;
  border: none;
  color: inherit;
}

button {
  background-color: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img,
picture {
  max-width: 100%;
  display: block;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
`

export default GlobalStyle
