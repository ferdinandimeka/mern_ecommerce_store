import { Box, useTheme, Button, Typography, List, ListItem, TextField } from "@mui/material";
import { FacebookOutlined, Instagram, YouTube } from "@mui/icons-material"; 
import FlexBetween from "../components/FlexBetween";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box>
        <Box
        sx={{
            backgroundColor: theme.palette.primary.main,
            //color: theme.palette.secondary.main,
            padding: '0.5rem',
            textAlign: 'center',
            fontSize: '1rem'
        }}
        >
            <FlexBetween
                sx={{
                justifyContent: 'space-around',
                gap: 4,
                }}
            >
                <Box>
                <p>LunaBay</p>
                </Box>

                <Box>
                    <Button
                        sx={{
                            color: theme.palette.secondary[100],
                        }}
                    >
                        <FacebookOutlined />
                    </Button>
                    <Button
                        sx={{
                            color: theme.palette.secondary[100],
                        }}
                    >
                        <YouTube />
                    </Button>
                    <Button
                        sx={{
                            color: theme.palette.secondary[100],
                        }}
                    >
                        <Instagram />
                    </Button>
                </Box>
            </FlexBetween>
        </Box>
        <Box
            sx={{
                textAlign: 'center',
                backgroundColor: theme.palette.secondary[300],
                color: theme.palette.secondary[900],
                
            }}
        >
            <Box
                display='flex'
                flexWrap='wrap'
                justifyContent='center'
                gap={4}
                sx={{
                    mx: { xs: '5%', lg: '15%' },
                    mb: '2rem',
                }}
            >
                <Box
                    sx={{
                        mt: '2rem',
                    }}
                >
                    <Typography variant='h4'>Company Info</Typography>
                    <List
                    >
                        <ListItem>About Us</ListItem>
                        <ListItem>Career</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>We are Hiring</ListItem>
                    </List>
                </Box>
                <Box
                    sx={{
                        mt: '2rem',
                    }}
                >
                    <Typography variant='h4'>Resources</Typography>
                    <List>
                        <ListItem>Customers</ListItem>
                        <ListItem>Watch A Demo</ListItem>
                        <ListItem>IOS & Android</ListItem>
                        <ListItem>API</ListItem>
                    </List>
                </Box>
                <Box
                    sx={{
                        mt: '2rem',
                    }}
                >
                    <Typography variant='h4'>Legal</Typography>
                    <List
                    >
                        <ListItem>About Us</ListItem>
                        <ListItem>Career</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>We are Hiring</ListItem>
                    </List>
                </Box>
                <Box
                    sx={{
                        mt: '2rem',
                    }}
                >
                    <Typography variant='h4'>Features</Typography>
                    <List>
                        <ListItem>User Analytics</ListItem>
                        <ListItem>Business Marketing</ListItem>
                        <ListItem>Unlimited Support</ListItem>
                        <ListItem>Live Chat</ListItem>
                    </List>
                </Box>
                <Box
                    sx={{
                        mt: '2rem',
                    }}
                >
                    <Typography fontSize={20} ml='-10rem'>Get In Touch</Typography>
                    <TextField
                        label="Email"
                        variant="outlined"
                        helperText="Enter your email"
                        borderRadius='5px 0 0 5px'
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        sx={{
                            borderRadius: '0 5px 5px 0',
                            height: '56px',
                        }}                     
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>

            <Box
                 sx={{
                    textAlign: 'center',
                    backgroundColor: theme.palette.secondary[200],
                    color: theme.palette.secondary[900],
                    height: '40px',
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        padding: '1rem'
                    }}
                >
                    &copy; 2023 LunaBay. All rights reserved.
                </Typography>
            </Box>
        </Box>
    </Box>
  );
};

export default Footer;
