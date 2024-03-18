/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import { Box, Button, useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export const AuthRoute = () => {

    const theme = useTheme()
    const navigate = useNavigate()

    const [activeButton, setActiveButton] = useState('')

    const handleSignUpClick = () => {
        navigate('/register')
        setActiveButton('signup')
    }

    const handleSignInClick = () => {
        navigate('/login')
        setActiveButton('signin')
    }

    useEffect(() => {
        if (window.location.pathname === '/register') {
            setActiveButton('signup')
        } else (window.location.pathname === '/login') && setActiveButton('signin')
    }, [])

  return (
    <Box
        sx={{
            color: theme.palette.secondary[900],
            display: 'flex',
            justifyContent: 'center',
            mt: '2rem',
            backgroundColor: theme.palette.tertiary[200],
            borderRadius: '10px',
        }}
    >
        <Box
            width='400px'
        >
        <Button
            onClick={handleSignUpClick}
            sx={{ 
                width: '50%',
                backgroundColor: activeButton === 'signup' && theme.palette.secondary[400],
                color: activeButton === 'signup' ? theme.palette.secondary[900] : theme.palette.primary[900],
            }}
        >
            Sign Up
        </Button>

        <Button
            onClick={handleSignInClick}
            sx={{ 
                width: '50%',
                backgroundColor: activeButton === 'signin' && theme.palette.secondary[400],
                color: activeButton === 'signin' ? theme.palette.secondary[900] : theme.palette.primary[900],
            }}
        >
            Sign In
        </Button>
        </Box>
    </Box>
  )
}
