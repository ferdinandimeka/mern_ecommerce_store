import { useTheme } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { Box, AppBar, Divider, Menu, MenuItem, Typography, Button } from '@mui/material'
import { MenuOutlined, ArrowDropDownOutlined,
    FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,
    LocalPhoneOutlined, MailOutlineOutlined, FacebookOutlined, 
    YouTube, Instagram, Twitter, Person2Outlined,
} from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import FlexAround from './FlexAround'
import { useSelector, useDispatch } from 'react-redux'
import { Hidden } from '@mui/material'

const Navbar = () => {

    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    const navItems = [
        {
            name: 'Home',
            icon: null
        },
        {
            name: 'Shop',
            icon: <ArrowDropDownOutlined />
        },
        {
            name: 'About',
            icon: null
        },
        {
            name: 'Contact',
            icon: null
        },
        {
            name: 'Blog',
            icon: null
        },
        {
            name: 'Products',
            icon: null
        },
    ]

    return (
        <AppBar sx={{
            backgroundColor: theme.palette.primary[100],
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            boxShadow: theme.shadows[2]
        
        }}>
            <Box sx={{
                mx: theme.spacing(4),
            }}>
            <Hidden lgDown>
            <FlexBetween sx={{
                backgroundColor: theme.palette.primary[200],
            }}>
                <Box sx={{
                    ml: theme.spacing(2)
                }}>
                    <FlexBetween gap={1}>
                        <Button>
                            <LocalPhoneOutlined />
                        </Button>

                        <Typography variant='h6' color={theme.palette.primary.main}>
                            +(234) 9011591262
                        </Typography>

                        <Button>
                            <MailOutlineOutlined />
                        </Button>

                        <Typography variant='h6' color={theme.palette.primary.main}>
                            Fedeco@gmail.com
                        </Typography>

                    </FlexBetween>
                </Box>

                <Typography variant="h6" color={theme.palette.primary.main}>
                    Follow us and get a chance to win 80% discount
                </Typography>

                <Box>
                    <FlexBetween>
                        <Typography variant="h6" color={theme.palette.primary.main}>
                            Follow us:
                        </Typography>
                        <Button>
                            <FacebookOutlined />
                        </Button>
                        <Button>
                            <YouTube />
                        </Button>
                        <Button>
                            <Instagram />
                        </Button>
                        <Button>
                            <Twitter />
                        </Button>
                    </FlexBetween>
                </Box>
            </FlexBetween>
            </Hidden>
            <Divider />
            <FlexBetween>
                <Box>
                    <Typography variant="h6">
                        <Button onClick={() => navigate('/')}>
                            
                            <Typography variant="h6" color="primary">
                                <Box fontWeight="bold">
                                    LunaBay
                                </Box>
                            </Typography>
                        </Button>
                    </Typography>
                </Box>

                <Box>
                    <FlexBetween>
                        {navItems && navItems.map((item) => (
                            <FlexBetween
                                key={item.name}
                            >
                            <Button 
                                key={item.name}
                                endIcon={item.icon == null ? null : item.icon}
                                aria-haspopup="true"
                                aria-controls={open ? 'demo-customized-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                id='demo-customized-button'
                                onClick={handleClick}
                            >
                                <Typography variant="h6" color="primary">
                                    {item.name}
                                </Typography>
                            </Button>
                            {item.icon == null ? null : ( 
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            )}
                            </FlexBetween>
                        ))}
                    </FlexBetween>
                </Box>

                <Box
                    color={theme.palette.primary.main}
                >
                    <FlexBetween>
                        <Person2Outlined />
                        <Typography
                            variant='h6'
                            sx={{
                                cursor: 'pointer',
                                // ":hover": {backgroundColor: theme.palette.primary[200]}
                            }}
                        >Login</Typography>
                        <Typography mx='0.2rem'>/</Typography>
                        <Typography 
                            variant='h6'
                            sx={{
                                cursor: 'pointer'
                            }}
                        >Register</Typography>
                        <Button>
                            <SearchOutlined />
                        </Button>
                        <Button>
                            <ShoppingCartOutlined />
                        </Button>
                        <Button>
                            <FavoriteBorderOutlined />
                        </Button>
                    </FlexBetween>
                </Box>
            </FlexBetween>
            </Box>
        </AppBar>
    )
}

export default Navbar
