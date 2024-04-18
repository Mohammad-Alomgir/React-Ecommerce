import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,::after,::before{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    color: black;
}
ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
`;
