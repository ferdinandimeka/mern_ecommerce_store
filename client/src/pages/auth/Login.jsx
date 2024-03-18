import { useState } from 'react'
import { Box, useTheme, Hidden, FormControl, FormHelperText, InputLabel, Input, Button,
    IconButton, Checkbox } from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as yup from 'yup'
import signupImage from '../../assets/images/signIn.png'
import { AuthRoute } from './AuthRoute'
import toast from 'react-hot-toast'
import { setUserInfo } from '../../state'
import { useLoginUserMutation } from '../../state/apiSlice'
import FlexBetween from '../../components/FlexBetween'
import Loader from '../../components/Loader'


const Login = () => {

    const theme = useTheme()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [ showPassword, setShowPassword ] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const [ loginUser, { isloading } ] = useLoginUserMutation()

    const validateSchema = yup.object({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(8, 'password should be minimum of eight characters long')
        .required('Password is required')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            try {
                await loginUser(values).unwrap()
                dispatch(setUserInfo(values))
                toast.success('Logged In')
                navigate('/')
            } catch (err) {
                toast.error(err?.data?.error ||'An error occurred')
                // console.log(err?.data?.error, err)
            }
        }
    })
    
  return (
    <Box>
        <Box
            display='flex'
            justifyContent='center'
            mt='3%'
        >
            <Box
                width={{ xs: '90%', sm: '70%', md: '50%', lg: '35%' }}
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: '10px 0 0 10px',
                    boxShadow: '10px 10px 10px 0',
                    color: theme.palette.primary.main,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                
                    <AuthRoute />

                </Box>

                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            display='flex'
                            justifyContent='center'
                            flexWrap='wrap'
                            gap='0.2rem'
                            width='100%'
                            mt='2rem'
                        >
                            <FormControl>
                                <InputLabel htmlFor='email'>email</InputLabel>
                                <Input
                                    id='email'
                                    type='text'
                                    name='email'
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        backgroundColor: theme.palette.tertiary[100],
                                        color: theme.palette.secondary[900],
                                        padding: '0.2rem',
                                        borderRadius: '5px',
                                        width: '400px'
                                    }}
                                />
                                <FormHelperText
                                    id="my-helper-text"
                                    sx={{
                                        color: 'red'
                                    }}
                                >{formik.touched.email && formik.errors.email}</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor='password'>password</InputLabel>
                                <Input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    error={formik.touched.password && Boolean(formik.errors.password)}
                                    onBlur={formik.handleBlur}
                                    endAdornment={
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    }
                                    sx={{
                                        backgroundColor: theme.palette.tertiary[100],
                                        color: theme.palette.secondary[900],
                                        padding: '0.2rem',
                                        borderRadius: '5px',
                                        width: '400px'
                                    }}
                                />
                                <FormHelperText 
                                    id="my-helper-text"
                                    sx={{
                                        color: 'red'
                                    }}    
                                >{formik.touched.password && formik.errors.password}</FormHelperText>
                            </FormControl>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                my: '1.2rem',
                            }}
                        >
                            <Button
                                type='submit'
                                sx={{
                                    backgroundColor: theme.palette.secondary[400],
                                    color: theme.palette.secondary[100],
                                    width: '400px',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    marginTop: '1rem'
                                }}
                            >
                                Sign In
                            </Button>
                            { isloading && <Loader />}
                            <FlexBetween sx={{ gap: '6.5rem', marginTop: '1rem' }}>
                                <Box
                                    sx={{
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    <Checkbox sx={{ color: theme.palette.primary.main }} />
                                    Remember me
                                </Box>
                                <Box>
                                    <Button
                                        sx={{
                                            color: theme.palette.primary.main,
                                            // fontSize: '0.8rem'
                                        }}
                                    >
                                        Forgot password?
                                    </Button>
                                </Box>
                            </FlexBetween>
                        </Box>
                    </form>
                    <Box
                        sx={{
                            marginTop: '2rem',
                            fontSize: '0.9rem',
                            marginLeft: '4rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <Button
                            onClick={() => navigate('/register')}
                            sx={{
                                color: theme.palette.primary.main,
                                // fontSize: '0.8rem'
                            }}
                        >
                            Don't have an account? Sign Up
                        </Button>
                    </Box>
            </Box>

            <Hidden lgDown>
            <Box
                component='img'
                src={signupImage}
                alt="signup"
                width='35%'
                height='545px'
                borderRadius='0 10px 10px 0'
                sx={{
                    boxShadow: '10px 10px 10px 0',
                    color: theme.palette.primary.main
                }}
            />
            </Hidden>

        </Box>
    </Box>
  )
}

export default Login
