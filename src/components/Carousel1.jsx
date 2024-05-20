import React from "react";
import Slider from "react-slick";

const Carousel1 = () => {
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
  };
  return (
    <div
      className="slider-container"
      style={{
        width: "100%",
        height: "35%",
        position: "absolute",
        top: "20%",
        justifyContent: "center",
        color: "white",
      }}
    >
      <Slider {...settings}>
        <div>
          <div style={{ margin: "0 10px" }}>
            <h3
              style={{
                fontFamily: "Lexend",
                display:"inline-flex",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "600",
                display: "inline"
              }}
              className="text-white w-1/3"
            >
              Lunar Palace: (ft. Kanye west)
            </h3>
            <img style={{ height: "" }} src="/images/Lady.png"></img>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <h3
              style={{
                fontFamily: "Lexend",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "600",
                display: "inline",
              }}
              className="text-white "
            >
              Lunar Palace: (ft. Kanye west)
            </h3>
            <img src="/images/Astro.png"></img>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <h3
              style={{
                fontFamily: "Lexend",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "600",
                display: "inline",
              }}
              className="text-white "
            >
              Lunar Palace: (ft. Kanye west)
            </h3>
            <img src="/images/PaperPrint.png"></img>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <h3
              style={{
                fontFamily: "Lexend",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "600",
                display: "inline",
              }}
              className="text-white "
            >
              Lunar Palace: (ft. Kanye west)
            </h3>
            <img src="/images/LadyPic.png"></img>
          </div>
        </div>
        <div>
          <div style={{ margin: "0 10px" }}>
            <h3
              style={{
                fontFamily: "Lexend",
                fontSize: "22px",
                lineHeight: "28px",
                fontWeight: "600",
                display: "inline",
              }}
              className="text-white "
            >
              Lunar Palace: (ft. Kanye west)
            </h3>
            <img style={{ height: "" }} src="/images/Budweiser.png"></img>
          </div>
        </div>
       
        
      </Slider>
    </div>
  );
};

export default Carousel1;
