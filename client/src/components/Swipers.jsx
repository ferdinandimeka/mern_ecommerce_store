/* eslint-disable react/prop-types */
import { Box, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Zoom, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/a11y'
import 'swiper/css/zoom'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'

// eslint-disable-next-line react/prop-types
const Swipers = ({ images }) => {

  //const isMobile = useMediaQuery('(max-width: 400px)')
  const isTablet = useMediaQuery('(max-width: 960px)')

  return (
    <Box
      sx={{}}
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={isTablet ? 2 : 4 }
        effect="coverflow"
        effectCoverflow={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        zoom={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        //scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {images?.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide-${index}`}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Swipers