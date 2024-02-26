import './App.css'
import Navbar from './components/Navbar'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
