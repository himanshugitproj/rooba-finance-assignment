import React from 'react'

const Collections = () => {
  return (
    <div className="flex flex-col justify-top h-screen w-full items-left">
    <div>
      <h1 style={{fontFamily:'Lexend', fontSize:'26px', lineHeight:'32px', fontWeight:'700'}} className='w-3/4 text-white font-bold justify-center pt-10'>
          Explore Youre First Collectible
      </h1>
    </div>
    
    <div className="items-center justify-center">
      <h1 style={{fontFamily:'Lexend', fontSize:'57px', lineHeight:'62px', fontWeight:'800'}} className='w-[30%] text-white font-extrabold justify-center mt-10'>
          Meta Lives
      </h1>
      <h3 style={{fontFamily:'Lexend', fontSize:'24px', lineHeight:'32px', fontWeight:'700'}} className='w-[75%] text-white font-bold justify-center mt-5'>
          Live in Astrix
      </h3>
      <p style={{fontFamily:'Lexend', fontSize:'14px', lineHeight:'28px', fontWeight:'600'}} className='w-[75%] text-white justify-center mt-5 font-'>
        Lorem ipsum dolor sit amet consectetur adipg elit. Numqua as I'm sad that Csk lost the game ut nulla bt hogyi ea quisquam distiio id fugiaur.
      </p>
    </div>

    <div className='flex flex-row mt-10'>
      <div className="items-center justify-center">
          <img src='/images/ProfilePic.svg'></img>
      </div>
      <div className="items-center justify-center ml-2">
      <p style={{fontFamily:'Lexend', fontSize:'20px', lineHeight:'44px', fontWeight:'500', display:'inline'}} className=' text-white justify-center pt-5 font-'>
          22k people interested
      </p>
      </div>
    </div>

    <div>
      {/* Collectibles */}
    
      <p style={{fontFamily:'Lexend', fontSize:'14px', lineHeight:'17.5px', fontWeight:'600'}} className='mt-5 text-white justify-center pt-5 font-semibold'>
        Collectibles
      </p>
      <div className='flex flex-row mt-5'>
          <img className='h-52 w-36 mr-2 hover:w-60 cursor-pointer' src='/images/CardCollections.svg'></img>
          <img className='h-52 w-36 mr-2 hover:w-60 cursor-pointer' src='/images/CardCollections.svg'></img>
          <img className='h-52 w-36 mr-2 hover:w-60 cursor-pointer' src='/images/CardCollections.svg'></img>
      </div>
    </div>

    <div className='flex flex-row-reverse mr-10 mt-20 rounded-full '>
        <button onClick={() => window.location = 'mailto:himanshuyadav.18gcebit044@galgotiacollege.edu; himanshu.fello@gmail.com'} style={{backgroundColor:'#FFCA5F', fontFamily:'Lexend', fontWeight:'700',lineHeight:'10px', fontSize:'15px'}} className=' rounded-3xl justify-items-end w-32 h-10 hover:-mt-1 hover:w-38 hover:h-12'>Join Waitlist</button>
    </div>
    
    
</div>

  )
}

export default Collections
