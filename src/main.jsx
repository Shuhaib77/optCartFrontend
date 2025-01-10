import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Your custom primary color
      light: '#80E27E', // Optional: lighter shade of primary
      dark: '#087F23', // Optional: darker shade of primary
      contrastText: '#FFFFFF', // Optional: text color for primary
    },
    secondary: {
      main: '#FF5722', // Your custom secondary color
      light: '#FF8A50', // Optional: lighter shade of secondary
      dark: '#C41C00', // Optional: darker shade of secondary
      contrastText: '#FFFFFF', // Optional: text color for secondary
    },
    background: {
      default: '#F4F4F4', // Default background color
      paper: '#FFFFFF', // Background for paper components
    },
    text: {
      primary: '#333333', // Default text color
      secondary: '#666666', // Secondary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Custom font family
  },
});


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline/>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  
)
