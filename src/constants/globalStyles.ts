import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html {
    height: -webkit-fill-available;
    box-sizing: border-box;
    height: 100%;
  }

  body {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    color: ${({ theme }) => theme.textColor.primary};
    background-color: ${({ theme }) => theme.backgroundColor.main};
    box-sizing: border-box;
    height: 100%;
    min-height: 100vh;
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }

  #root {
    height: 100%;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.borderColor.secondary};
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.borderColor.primary} ;
    border-radius: 100px;
  }

  .wf-loading {  
    letter-spacing: 0.56px;
    line-height: 1.2;

    h1 { 
      visibility: hidden; 
    }
  }
  
  .wf-active {
    letter-spacing: 0.6px;

    h1 { visibility: visible; }
  }
`;
