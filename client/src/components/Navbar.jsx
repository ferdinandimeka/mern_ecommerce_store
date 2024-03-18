import { useTheme } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { Box, AppBar, Divider, Menu, MenuItem, Typography, Button, Badge } from '@mui/material'
import { MenuOutlined, ArrowDropDownOutlined,
    FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,
    LocalPhoneOutlined, MailOutlineOutlined, FacebookOutlined, 
    YouTube, Instagram, Twitter, Person2Outlined,
} from '@mui/icons-material'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import { useSelector, useDispatch } from 'react-redux'
import { Hidden } from '@mui/material'
import MenuSidebar from './MenuSidebar'

const Navbar = () => {

    const theme = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
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

    // useEffect(() => {
    //     event.preventDefault()
    // },[])

    return (
        <AppBar sx={{
            backgroundColor: theme.palette.tertiary[50],
            color: theme.palette.text.primary,
            padding: theme.spacing(1),
            boxShadow: theme.shadows[2],
            position: 'sticky',
        }}>
            <Box sx={{
                mx: theme.spacing(4),
            }}>
            <Hidden lgDown>
            <FlexBetween sx={{
                backgroundColor: theme.palette.tertiary[200],
            }}>
                <Box sx={{
                    ml: theme.spacing(2)
                }}>
                    <FlexBetween gap={1}>
                        <Button>
                            <LocalPhoneOutlined />
                        </Button>

                        <Typography variant='h6' color={theme.palette.primary.main}>
                            +(234) 09117663492
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
                
                <Hidden mdDown>
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
                                onClick={item.icon !== null && handleClick}
                            >
                                <Typography variant="h6" color="primary">
                                    {item.name}
                                </Typography>
                            </Button>
                            
                            {item.icon !== null ? (
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
                            ) : null }
                            </FlexBetween>
                        ))}
                    </FlexBetween>
                </Box>
                </Hidden>
                
                <Box
                    color={theme.palette.primary.main}
                >
                    <FlexBetween>
                        <Person2Outlined />
                        <Hidden mdDown>
                        <Typography
                            variant='h6'
                            onClick={() => navigate('/login')}
                            sx={{
                                cursor: 'pointer'
                            }}
                        >Login</Typography>
                        <Typography mr='0.2rem'>/</Typography>
                        <Typography
                            variant='h6'
                            onClick={() => navigate('/register')}
                            sx={{
                                cursor: 'pointer',
                                mr: theme.spacing(1)
                            }}
                        >Register</Typography>
                        <Button>
                            <SearchOutlined />
                        </Button>
                        </Hidden>
                        <Button sx={{
                            ml: theme.spacing(2)
                        }}>
                            <Badge badgeContent={1} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </Button>
                        <Hidden mdDown>
                        <Button>
                            <FavoriteBorderOutlined />
                        </Button>
                        </Hidden>

                        <Hidden mdUp>
                        <Button onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                            <MenuOutlined />
                            <MenuSidebar
                                isSideBarOpen={isSideBarOpen}
                                setIsSideBarOpen={setIsSideBarOpen}
                                drawerWidth="100%"
                            />
                        </Button>   
                        </Hidden>
                    </FlexBetween>
                </Box>
            </FlexBetween>
            </Box>
        </AppBar>
    )
}

export default Navbar
