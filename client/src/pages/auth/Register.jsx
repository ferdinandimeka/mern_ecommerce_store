import { Box, useTheme, Typography, Button, Divider, FormControl, InputLabel,
    FormHelperText, Input, IconButton, Hidden } from '@mui/material'
import { useState } from 'react'
import { FacebookRounded, Google, VisibilityOff, Visibility } from '@mui/icons-material'
import signupImage from '../../assets/images/signup_image.png'
import { AuthRoute } from './AuthRoute'
import * as yup from 'yup'
import { useFormik } from 'formik'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCreateUserMutation } from '../../state/apiSlice'
import { setUserInfo } from '../../state'
import Loader from '../../components/Loader'
 
const Register = () => {

    const theme = useTheme()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const style = {
        backgroundColor: theme.palette.tertiary[300],
        width: '130px',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        my: '2rem'
    }

    const [ createUser, { isloading } ] = useCreateUserMutation()
    const [ showPassword, setShowPassword ] = useState(false)
    const handleClickShowPassword = () => setShowPassword((show) => !show)
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }


    const validateSchema = yup.object({
        firstname: yup.string().required('firstname is required'),
        lastname: yup.string().required('lastname is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().min(8, 'password should be minimum of eight characters long')
        .required('Password is required')
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: validateSchema,
        onSubmit: async (values) => {
            try {
                await createUser(values).unwrap()
                dispatch(setUserInfo(values))
                toast.success('Account created successfully')
                navigate('/login')
            } catch (err) {
                toast.error(err?.data?.error ||'An error occurred')
                // console.log(err?.data?.error, err)
            }
        }
    })
    
  return (
    <>
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

                    <Typography my='1rem'
                    fontWeight='bold'>Sign Up</Typography>
                    <Box>
                        <Box
                            display='flex'
                            flexDirection='column'
                            gap='0.5rem'
                        >
                            <Button
                                sx={{
                                    backgroundColor: theme.palette.tertiary[200],
                                    fontSize:'0.8rem',
                                    fontWeight: 'bold',
                                    gap: '0.5rem',
                                    borderRadius: '20px',
                                    width: '300px'
                                }}
                            >
                                <FacebookRounded />
                                Sign Up with Facebook
                            </Button>
                            <Button
                                sx={{
                                    backgroundColor: theme.palette.tertiary[200],
                                    fontSize:'0.8rem',
                                    fontWeight: 'bold',
                                    gap: '0.6rem',
                                    borderRadius: '20px',
                                    width: '300px'
                                }}
                            >
                                <Google />
                                Sign Up with Google
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        display='flex'
                        gap='0.5rem'
                    >
                        <Divider sx={style} />
                        <Typography my='20px'>OR</Typography>
                        <Divider sx={style} />
                    </Box>

                    <form onSubmit={formik.handleSubmit}>
                        <Box
                            display='flex'
                            justifyContent='center'
                            flexWrap='wrap'
                            gap='0.2rem'
                            width='100%'
                        >
                            <FormControl>
                                <InputLabel htmlFor='firstname'>firstname</InputLabel>
                                <Input
                                    id='firstname'
                                    type='text'
                                    name='firstname'
                                    onChange={formik.handleChange}
                                    value={formik.values.firstname}
                                    error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        backgroundColor: theme.palette.tertiary[100],
                                        color: theme.palette.secondary[900],
                                        padding: '0.2rem',
                                        borderRadius: '5px'
                                    }}
                                />
                                <FormHelperText
                                    id="my-helper-text"
                                    sx={{
                                        color: 'red'
                                    }}
                                >{formik.touched.firstname && formik.errors.firstname}</FormHelperText>
                            </FormControl>

                            <FormControl>
                                <InputLabel htmlFor='lastname'>lastname</InputLabel>
                                <Input
                                    id='lastname'
                                    type='text'
                                    name='lastname'
                                    onChange={formik.handleChange}
                                    value={formik.values.lastname}
                                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                    onBlur={formik.handleBlur}
                                    sx={{
                                        backgroundColor: theme.palette.tertiary[100],
                                        color: theme.palette.secondary[900],
                                        padding: '0.2rem',
                                        borderRadius: '5px'
                                    }}
                                />
                                <FormHelperText 
                                    id="my-helper-text"
                                    sx={{
                                        color: 'red'
                                    }}
                                >{formik.touched.lastname && formik.errors.lastname}</FormHelperText>
                            </FormControl>

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
                                justifyContent: 'center',
                                m: '1rem',
                            }}
                        >
                            <Button
                                type='submit'
                                sx={{
                                    backgroundColor: theme.palette.secondary[400],
                                    color: theme.palette.secondary[100],
                                    width: '400px',
                                    borderRadius: '5px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>

            <Hidden lgDown>
            <Box
                component='img'
                src={signupImage}
                alt="signup"
                width='35%'
                borderRadius='0 10px 10px 0'
                sx={{
                    boxShadow: '10px 10px 10px 0',
                    color: theme.palette.primary.main
                }}
            />
            </Hidden>

            { isloading && <Loader />}
        </Box>
    </>
  )
}

export default Register
