import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Background from "./components/Background";
import Collections from "./components/Collections";
import Events from "./components/Events";
import Carousel1 from "./components/Carousel1";
import CarouselEvent from "./components/CarouselEvent";



function App() {
  const [show, setshow] = useState("Collections");

  const mainHeight = () => {
    // console.log(show)
    setTimeout(() => {
      document.getElementById('purple').style.height = document.getElementById('main')?.scrollHeight + 'px' || 'auto';
    }, 100)
  };

  const classFn = () => {
   
      // console.log("enough waiting")
      console.log(show + ' btn se')
      if(show=="Collections"){
        document.getElementById("eventbtn").classList.add('bg-neutral-700');
        document.getElementById("collectionbtn").classList.remove('bg-neutral-700')
      }
   

  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 2000,
    autoplay: true,
    initialSlide: 0,
    centerMode: true,
  };

  return (
    <div className="" style={{overflowX: 'hidden'}}>
      <div id="main" style={{overflowX: 'hidden'}} className="flex flex-row">
        {/* left col  */}
        <div style={{position:'relative', flex:'1'}} className="z-0 flex flex-row">
          <div className="flex flex-col h-screen items-left">
            <div className="ml-5">
              {/* company logo */}
              <Background></Background>
            </div>
            <div className="items-center justify-center ml-5 w-full">
              {/* background logo */}
              <Logo></Logo>
            </div>

            <div className="rounded-full pt-10">
              <div className="flex flex-row items-center justify-center m-10 bg-neutral-800 h-12 rounded-full">
                {/* event btn starts here */}
                <div
                  onClick={() => {
                    // debugger
                                  setshow("Events");
                                  classFn()
                                  
                                }
                          }
                  id="eventbtn"
                  className="text-white font-semibold p-3 rounded-full cursor-pointer w-full text-center "
                >
                  Events
                </div>

                {/* collection btn starts here */}
                <div
                  onClick={() => {
                    setshow("Collections");
                    if(show=="Events"){
                      document.getElementById("collectionbtn").classList.add('bg-neutral-700');
                      document.getElementById("eventbtn").classList.remove('bg-neutral-700')
                    }
                  }}
                  id="collectionbtn"
                  className="text-white font-semibold p-3 rounded-full cursor-pointer w-full text-center bg-neutral-700"
                >
                  Collections
                </div>
              </div>
            </div>
          </div>
         
          {/* Carousel */}

          
          {show == "Collections" ? (
            <Carousel1></Carousel1>
          ) : (
            
            <CarouselEvent></CarouselEvent>
          )}

          
        

          {/* purple animation scrolling text  */}
          <div id="purple" className="" style={{ backgroundColor: "#B9A0FF", position:'absolute',right:'0', height: mainHeight() }}>
            <div
              style={{ animation: "scroll-vertical 8s linear infinite" }}
              className="w-10 ml-3 z-50 ease-in-out "
            >
              <img style={{}} src="../public/images/Text.png"></img>
            </div>
          </div>

        </div>

        <div className="flex z-0 pl-10 pr-10" style={{flexBasis: '40%', backgroundColor: "#131314", zIndex:'100'}}>
          {show == "Collections" ? (
            <Collections></Collections>
          ) : (
            <Events></Events>
          )}


        </div>
      </div>
    </div>
  );
}

export default App;
