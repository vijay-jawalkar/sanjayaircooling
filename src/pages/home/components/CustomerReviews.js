import React from 'react'
import { CustomerReviewCard } from '../../../components'
import Slider from 'react-slick'

function CustomerReviews() {

    
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

    var settings = {
    
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='my-12'>

   <h2 className='text-zinc-800 font-extrabold text-3xl'> Customer Reviews</h2>
   <p className='text-md py-2 px-2'> Discover what our customers have to say about their experience!</p>

        <div className='mx-auto w-9/12 md:w-8/12  my-6'>
        <Slider {...settings}>
        <CustomerReviewCard/>
        <CustomerReviewCard/>
        <CustomerReviewCard/>
        </Slider>
       
        </div>
      
    </div>
  )
}

export default CustomerReviews