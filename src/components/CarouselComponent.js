import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
function CarouselComponent() {
  return (
    <div>
      <Carousel autoPlay={true} showArrows={true} infiniteLoop={true} swipeable={true}>
                <div>
                    <img src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg" /> 
                </div>
                <div>
                    <img src="https://www.shopickr.com/wp-content/uploads/2015/09/shopclues-bogo-sale-9-2015.jpg" />  
                </div>
                <div>
                    <img src="https://www.shopickr.com/wp-content/uploads/2017/01/lifestyle-stores-online-india-flat-60-percent-off.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default CarouselComponent
