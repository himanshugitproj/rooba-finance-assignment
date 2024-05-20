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
              <img style={{ height: "" }} src="../public/images/boy.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>           
              <img src="../public/images/Astro.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>
              <img src="../public/images/PaperPrint.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}> 
            <img src="../public/images/LadyPic.png"></img>
            </div>
          </div>
          <div>
           <div className='pt-10' style={{ margin: "0 10px" }}>
              <img style={{ height: "" }} src="../public/images/Budweiser.png"></img>
            </div>
          </div>
         
          
        </Slider>
      </div>
    );
  };

export default CarouselEvent