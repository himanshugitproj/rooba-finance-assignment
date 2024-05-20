import React from 'react'
import Slider from "react-slick";


const CarouselEvent = () => {
    const settings = {
      infinite: true,
      speed: 600,
      slidesToShow: 2.2,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 2000,
      autoplay: true,
      initialSlide: 0,
      centerMode: true,
      focusOnSelect : true
     
    };
    return (
      <div
        className="slider-container"
        style={{
          width: "100%",
          height: "35%",
          position: "absolute",
          top: "17%",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Slider {...settings}>
          <div>
            <div className='pt-10' style={{ margin: "0 10px" }}>           
              <img style={{ height: "" }} src="/images/boy.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>           
              <img src="/images/Astro.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>
              <img src="/images/PaperPrint.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}> 
            <img src="/images/LadyPic.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>
              <img style={{ height: "" }} src="/images/Budweiser.png"></img>
            </div>
          </div>
         
          
        </Slider>
      </div>
    );
  };

export default CarouselEvent
