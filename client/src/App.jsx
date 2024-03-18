import './App.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Home } from './pages/home'
import Navbar from './components/Navbar'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="page-transition"
          timeout={300}
        >
        <Router>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>    
          </ThemeProvider>
        </Router>
        </CSSTransition>
      </TransitionGroup>  
    </>
  )
}

export default App
