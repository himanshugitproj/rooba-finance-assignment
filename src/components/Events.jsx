import React from 'react'

const Events = () => {
  return (
    (
        <div className="flex flex-col justify-top h-screen w-full items-left">
        <div>
          <h1 style={{fontFamily:'Lexend', fontSize:'26px', lineHeight:'32px', fontWeight:'700'}} className='w-3/4 text-white font-bold justify-center pt-10'>
              Explore Youre First Events
          </h1>
        </div>
        
        <div className='mt-20'>
          <h1 style={{fontFamily:'Lexend', fontSize:'57px', lineHeight:'62px', fontWeight:'800'}} className='w-[90%] text-white font-extrabold justify-center'>
              Event Name
          </h1>

          <div style={{alignItems: 'center'}} className='flex flex-row mt-7 justify-start align-middle'>
              <img src='../public/images/LocationIcon.svg'></img>
              <h3 style={{fontFamily:'Lexend', fontSize:'22px', lineHeight:'28px', fontWeight:'600', display:'inline'}} className='text-white ml-3'>
                Venue
              </h3>
              <img className='ml-10' src='../public/images/TimerIcon.svg'></img>
              <h3 style={{fontFamily:'Lexend', fontSize:'22px', lineHeight:'28px', fontWeight:'600', display:'inline'}} className='text-white ml-3'>
                04/3/2024 @19:00
              </h3>
          </div>

          <p style={{fontFamily:'Lexend', fontSize:'14px', lineHeight:'28px', fontWeight:'600'}} className='w-[75%] text-white justify-center mt-10 font-'>
            Lorem ipsum dolor sit amet consectetur adipg elit. Numqua as  dolor sit amet consectetur adipg I'm sad  that Csk lost the game ut nulla bt hogyi ea quisquam distiio id fugiaur.
          </p>
        </div>

    
        {/* <div className='flex flex-row mt-10'>
          <div className="items-center justify-center">
              <img src='../public/images/ProfilePic.svg'></img>
          </div>
          <div className="items-center justify-center ml-2">
          <p style={{fontFamily:'Lexend', fontSize:'20px', lineHeight:'44px', fontWeight:'500', display:'inline'}} className=' text-white justify-center pt-5 font-'>
              22k people interested
          </p>
          </div>
        </div> */}
        <h3 style={{fontFamily:'Lexend', fontSize:'26px', lineHeight:'32.5px', fontWeight:'600', display:'inline'}} className='text-white mt-10'>
            Artist Lineup
        </h3>
    
        <div>
          {/* Events */}
        
          
          <div className='flex flex-row mt-10'>
              <img className='h-32 w-24 mr-2 hover:w-36 hover:h-44 rounded-sm cursor-pointer' src='../public/images/ArtistLineup1.png'></img>
              <img className='h-32 w-24 mr-2 hover:w-36 hover:h-44 cursor-pointer' src='../public/images/ArtistLineup2.png'></img>
              <img className='h-32 w-24 mr-2 hover:w-36 hover:h-44 rounded-md cursor-pointer' src='../public/images/ArtistLineup3.png'></img>
          </div>
        </div>
    
        <div style={{justifyContent:'space-between' , alignItems:'baseline' }} className='flex flex-row mr-10 mt-40'>
            <img className='h-24 w-24 mr-2 rounded-sm' src='../public/images/QR.png'></img>
            <button onClick={() => window.location = 'mailto:himanshuyadav.18gcebit044@galgotiacollege.edu; himanshu.fello@gmail.com'} style={{ backgroundColor:'#FFCA5F', fontFamily:'Lexend', fontWeight:'700',lineHeight:'10px', fontSize:'15px'}} className='rounded-3xl justify-end justify-items-end w-32 h-10 hover:-mt-1 hover:w-38 hover:h-12'>Join Waitlist</button>
        </div>
    
        
    </div>
    
      )
  )
}

export default Events