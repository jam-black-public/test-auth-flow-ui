import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #84E2FF;
    color: #ced4da;
    height: 100vh;
  }

  .App {
    text-align: center;
    background: #172435;
    min-height: 85vh;
    width: 100%;
    padding: 30px 0;
    border-radius: 20px;
    border: 10px solid #B3EFFE;
    max-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

   .App_top {
    text-align: center;
    background: #172435;
    min-height: 85vh;
    width: 100%;
    padding: 40px 0;
    border-radius: 20px;
    border: 10px solid #B3EFFE;
    max-width: 500px;
    margin: auto
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  .form-control {
     text-align: center;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  
  .mainLayout {
    padding: 20px 0;
  }
  
  .mainLayout h2 {
    text-align: center;
  }
  
  .mainLayout table {
    table-layout: fixed 
  }
  
  .mainLayout table th {
    overflow-wrap: break-word
  }
  
  .App-link {
    color: #61dafb;
  }

  a {
    display: inline-block;
    margin: 0 5px;
    color: #ced4da;
    text-decoration: underline;
    font-style: normal;
  }
  .forgot-password {
    font-size: 13px;
    font-style: italic;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
