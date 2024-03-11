import { Box, Button, Typography, useTheme, useMediaQuery, Card,
  CardActionArea, CardMedia, CardContent
} from '@mui/material'
import { SecurityOutlined, ChatBubbleOutlineTwoTone, MoneyOutlined  } from '@mui/icons-material'
import fashion from "../../assets/images/fash.png"
import FlexAround from '../../components/FlexAround'
import FlexBetween from '../../components/FlexBetween'
import Swipers from '../../components/Swipers'
import products from '../../data'
import Footer from '../../components/Footer'

export const Home = () => {

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box>
        <Box 
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          display='block'
          justifyContent='center'
        >
          <FlexAround>
              <Box
                mb={{ xs: 2, md: 10, lg: 15 }}
                mt={{ xs: 10, md: 10, lg: 15}}
                //mx='10%'
                component='img'
                alt='home image'
                src={fashion}
                width={'65%'}
                borderRadius={5}
                sx={{ objectFit: 'cover' }}
              />
          </FlexAround>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          // mt={{ xs: 5, md: 10, lg: 15 }}
          // mx={{ xs: 5, md: 10, lg: 10 }}
          mb='5rem'
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Typography
              //textAlign='center'
              fontSize={{ xs: '1.0rem', sm: '1.5rem', md: '2rem', lg: '2.8rem' }}
              fontWeight='bold'
            >
              Welcome to Fashion Store
          </Typography>
          <Button
            variant='contained'
            color='primary'
            sx={{
              borderRadius: 2,
              fontSize: { xs: '1rem', md: '1.5rem', lg: '2rem' },
              fontWeight: 'bold',
              width: { xs: '8rem', md: '15rem', lg: '20rem' },
              height: { xs: '3rem', md: '4rem', lg: '5rem' },
              padding: '0.5rem',
              mt: '0.5rem'
            }}
          >
            Shop Now
          </Button>
        </Box>

      <Box
        mt={{ xs: 2, md: 10, lg: 15 }}
        mx={{ xs: 5, md: 10, lg: 10 }}
        mb='5rem'
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Typography 
          fontSize={40}
          display='flex'
          justifyContent='center'
          mb='0.5rem'
        >Shoes Collection
        </Typography>
        <Swipers
          images={[
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNob2VzfGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHNob2VzfGVufDB8fDB8fHww',
          ]}
        />
      </Box>

      <Box
        mt={{ xs: 5, md: 10, lg: 15 }}
        mx={{ xs: 5, md: 10, lg: 10 }}
        mb='5rem'
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <Typography 
          fontSize={40}
          display='flex'
          justifyContent='center'
          mb='0.5rem'
        >Clothes Collection
        </Typography>
        <Swipers
          images={[
            'https://media.istockphoto.com/id/1217286276/photo/3d-render-blank-shirt-isolated-on-white-background-empty-clothing-for-design-isolated-with.webp?s=170667a&w=0&k=20&c=JqdpX6SGwQBQ43uTvL18efqWuFnpMR6BTDyDBoN1Dc0=',
            'https://media.istockphoto.com/id/1307157693/photo/mens-black-hoodie-template-hanging-on-a-plastic-hanger-back-view-for-design-presentation-print.webp?s=170667a&w=0&k=20&c=rb530VwDnNW06za9FjJxTWEUlLNhIlGnr1ZvapDcFhI=',
            'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8',
            'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGFwcGFyZWx8ZW58MHx8MHx8fDA%3D',
            'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxhcHBhcmVsfGVufDB8fDB8fHww20&c=hzcbsUtzowPhV3qzmJMbDR7pPvPGYoQbLpTYmv6tMVE=',
          ]}
        />
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        mx={{ xs: 5, md: 10, lg: 10 }}
      >
          <Typography variant='h5'>Featured Products</Typography>
          <Typography variant='h3'>Best Seller Products</Typography>
          <Typography 
            variant='h6'
            textAlign='center'
            mt={1}
          >
          Step up your style game with our latest collection that's taking the 
          fashion world by storm! Elevate your wardrobe with trendy pieces that blend fashion-forward 
          designs with unbeatable comfort. Don't miss out on the chance to be ahead of the curve. 
          Shop now and make a statement with every step!
          </Typography>
          <Box>
            <Box
              display='flex'
              flexDirection='row'
              flexWrap='wrap'
              justifyContent='center'
              alignItems='center'
              mt={5}
              mb={5}
              sx={{ gap: 5 }}
            >
              {products.map((product, index) => (
                <Card
                  key={index}
                  data-aos="flip-left"
                  sx={{
                    width: { xs: '80%', sm: '40%', md: '40%', lg: '30%' },
                    borderRadius: 5,
                    boxShadow: 10,
                    mt: 5
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      height='250'
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5'>
                        {product.name}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        {product.description}
                      </Typography>
                      <Typography variant='h6' color={theme.palette.text.primary}>
                        {product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))}
            </Box>
          </Box>
                  
          <Box>
            <Box
              display='flex'
              flexDirection={{ xs: 'column', md: 'row' }}
              alignItems='center'
              justifyContent='center'
              my={10}
              gap={ isMobile ? 6 : 3}
              mx={{ xs: 5, md: 10, lg: 10 }}
            >
              
              <Box
                width={'100%'}
              >
                <Typography variant={isTablet ? "h3" : "h4"} >Best Sellers</Typography>
                <Typography
                  //variant={isMobile && "h6"}
                  textAlign='left'
                  sx={{ fontSize: 15, color: theme.palette.secondary[900]}}
                  mt={1}
                >
                Tried and Tested: Our Best Sellers have been purchased and loved by countless customers, so you can trust that they're high-quality products that deliver on their promises.
                Customer Favorites: Wondering what others are loving right now? Our Best Sellers section gives you insight into the products that are trending and highly sought-after by shoppers just like you.
                Proven Performance: Whether it's a timeless classic or a cutting-edge innovation, our Best Sellers have consistently exceeded expectations and delivered exceptional performance in real-world situations.
                Curated Selection: We carefully curate our Best Sellers collection to ensure that you have access to the most popular and highly-rated products across all categories, making it easier for you to find exactly what you're looking for
                Stay Ahead of the Curve: By exploring our Best Sellers, you can stay ahead of the latest trends and discover new products that are gaining popularity among savvy shoppers.
                </Typography>
              </Box>

              <Box 
                sx={{ gap: 3 }}
                display='flex'
                flexDirection={{ xs: 'column', md: 'row' }}
              >
              <Box
                src='https://images.pexels.com/photos/375751/pexels-photo-375751.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                component='img'
                sx={{
                  width: { xs: '90%', md: '30%', lg: '40%' },
                  height: { xs: '50%', md: '50%', lg: '100%' },
                  borderRadius: 5,
                  boxShadow: 10,
                  mt: 5
                }}
              >
              </Box>

              <Box
                src='https://images.pexels.com/photos/347700/pexels-photo-347700.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
                component='img'
                sx={{
                  width: { xs: '90%', md: '30%', lg: '40%' },
                  height: { xs: '50%', md: '50%', lg: '100%' },
                  borderRadius: 5,
                  boxShadow: 10,
                  mt: 5
                }}
              >
              </Box>
              </Box>
            </Box>
          </Box>
            
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            mb={8}
          >
            <Box m="3rem">
              <Typography variant={isTablet ? "h3" : "h4"}>Best Services</Typography>
            </Box>

            <Box
              display='flex'
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ gap: 5 }}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                sx={{ gap: 1 }}
              >
                <SecurityOutlined
                  sx={{
                    fontSize: 100,
                    color: theme.palette.primary[900]
                  }}
                />
                <Typography variant='h5'>Secure Payment</Typography>
                <Typography
                  textAlign='center'
                  sx={{ fontSize: 15, color: theme.palette.secondary[900]}}
                >
                  We use the latest security measures to ensure your personal information is protected at all times.
                  Use SSL (Secure Sockets Layer) encryption to secure data transmission between your website and your customers' browsers. This encrypts sensitive information such as credit card details, preventing unauthorized access during transmission.
                </Typography>
              </Box>

              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                sx={{ gap: 1 }}
              >
                <ChatBubbleOutlineTwoTone
                  sx={{
                    fontSize: 100,
                    color: theme.palette.primary[900]
                  }}
                />
                <Typography variant='h5'>24/7 Customer Support</Typography>
                <Typography
                  textAlign='center'
                  sx={{ fontSize: 15, color: theme.palette.secondary[900]}}
                >
                  Our team of experts is always available to answer your questions and resolve any issues you may have.
                  We ensure that customers can reach out for assistance at any time, even outside regular business hours. This could include email support, live chat, or a dedicated hotline.
                </Typography>
              </Box>

              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                sx={{ gap: 1 }}
              >
                <MoneyOutlined
                  sx={{
                    fontSize: 100,
                    color: theme.palette.primary[900]
                  }}
                />
                <Typography variant='h5'>Money Back Guarantee</Typography>
                <Typography
                  textAlign='center'
                  sx={{ fontSize: 15, color: theme.palette.secondary[900]}}
                >
                  If you're not satisfied with your purchase, we'll give you a full refund, no questions asked.
                  Offer a reasonable time frame for customers to request a refund, such as 30 or 60 days from the date of purchase. A longer time frame can give customers confidence in their purchase decision and encourage them to buy from you.
                </Typography>
              </Box> 
            </Box>
          </Box>
      </Box>
      <Footer />
    </Box>
  )
}
