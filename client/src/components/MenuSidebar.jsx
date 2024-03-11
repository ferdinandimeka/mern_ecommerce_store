/* eslint-disable react/prop-types */
import { useTheme, Box, Drawer } from '@mui/material'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import { ClearOutlined } from '@mui/icons-material'

const MenuSidebar = ({ drawerWidth, isSideBarOpen, setIsSideBarOpen }) => {

    const theme = useTheme()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const [active, setActive] = useState(pathname)

    const sidebarItems = [
        {
            name: 'Home',
        },
        {
            name: 'Shop',
        },
        {
            name: 'About',
        },
        {
            name: 'Contact',
        },
        {
            name: 'Blog',
        },
        {
            name: 'Products',
        },
    ]

    useEffect(() => {   
        setActive(pathname.substring(1))
    }, [pathname])

    return (
        <>
            {isSideBarOpen && (
                <Drawer
                    sx={{
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            backgroundColor: theme.palette.secondary[900],
                            color: theme.palette.text.primary,
                            height: '70%',
                            mt: '3.3rem'
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={isSideBarOpen}
                    onClose={() => setIsSideBarOpen(false)}
                >
                    <FlexBetween>
                        <ClearOutlined
                            sx={{
                                cursor: 'pointer',
                                m: theme.spacing(2),
                                color: theme.palette.text.primary,
                                '&:hover': {
                                    color: theme.palette.secondary.main,
                                },
                            }}
                            onClick={() => setIsSideBarOpen(false)}
                        />
                    </FlexBetween>
                    
                    <Box sx={{ p: theme.spacing(2) }}>
                        {sidebarItems.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    cursor: 'pointer',
                                    color: theme.palette.text.primary,
                                    fontWeight: active === item.name.toLowerCase() ? 'bold' : 'normal',
                                    '&:hover': {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                                onClick={() => {
                                    navigate(`/${item.name}`)
                                    setIsSideBarOpen(false)
                                }}
                            >
                                {item.name}
                            </Box>
                        ))}
                    </Box>
                </Drawer>
            )}
        </>
    )
}

export default MenuSidebar