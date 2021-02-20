import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-decoration: none!important;
}
body{
    background:#90cea1;
    width:100%;
}
h1,h2,h3,h4{
    text-decoration: none !important;
}
h2{
    font-size:2rem;
    text-align:center
   
}
h3{
    font-size:1.3rem;
    color: rgb(13, 37, 63);
    text-decoration: none!important;
}
p{
    font-size:1.1rem;
    line-height:200%;
    color: rgb(13, 37, 63);
}
`;
export default GlobalStyles;
