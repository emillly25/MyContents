import { createGlobalStyle } from "styled-components";
import "./style/font/font.css";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {

	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

body {
	line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  font-weight: 300;
}
ol, ul {
	list-style: none;
}


`;

export { GlobalStyle };