import React from 'react'
import { render } from 'react-dom'
// import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
//import { red, amber } from '@material-ui/core/colors'

import './styles.css'
import App from './Components/App'

const theme = createMuiTheme();
// console.log(theme);
// console.log(red);

/*
const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700]
    },
    type: 'dark'
  },
  spacing: 10
})
*/

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
