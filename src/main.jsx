import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  palette: {
    primary: {
      light: '#ffba5a',
      main: '#ffba5a',
      dark: '#fb9400',
      contrastText: '#fff', // your primary color
    },
  },
  listItemText:{
    fontSize:'0.7em',//Insert your required size
  }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter >
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
