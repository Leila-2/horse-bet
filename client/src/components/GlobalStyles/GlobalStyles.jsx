import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

 *,
*::before,
*::after {
  box-sizing: border-box;
} 
ul {
  padding: 0;
  list-style: none;
  margin: 0;
}
body {
  margin: 0;
  background: #303841;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#fff;
}
h1{
font-weight: 700;
font-size: 40px;
line-height: 49px;
color:#F6C90E;
}
body,
h1,
p,
li {
  margin: 0;
}
img {
  max-width: 100%;
  display: block;
}
`;
