import React from 'react'
import TravelHeader from './TravelHeader'
import TravelFooter from './TravelFooter'

function TravelPage() {
  return (
    <>
    <TravelHeader/>
    {/* container */}
    <div className='box-border flex object-center my-10 lg:max-h-60 lg:relative lg:left-72 items-center max-w-full'>

      {/* left-side text */}
      <div className="flex-col basis-1/3">
        <h1 className='text-6xl font-bold my-7'>Travel</h1>
        <p className='text-lg text-gray-600 font-semibold'>Discover exciting and latest world events, travel deals, safety tips and more news.</p>
      </div>

      {/* image gallery */}
      <div className='flex-col grow'>
        {/* buttons */}
        <div className='flex w-36 justify-between py-2'>
        <img width="30" height="30" className='cursor-pointer' src="https://img.icons8.com/ios-glyphs/30/circled-left-2.png" alt="circled-left-2"/>
        <div className="text-5 bg-slate-200 w-7 h-7 text-center font-semibold cursor-pointer">01</div>
        <div className="text-5 w-7 h-7 text-center cursor-pointer">02</div>
        <div className="text-5 w-7 h-7 text-center cursor-pointer">03</div>
        <img width="30" height="30" className='cursor-pointer scale-x-[-1]' src="https://img.icons8.com/ios-glyphs/30/circled-left-2.png" alt="circled-left-2"/>
        </div>

        {/* images */}
        <div className='flex max-w-full overflow-x-scroll'>
          <img className='max-w-72 me-3' src="https://images.unsplash.com/photo-1708852154434-d6436655b99d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img className='max-w-72 me-3' src="https://images.unsplash.com/photo-1708514349420-4eeb8397e733?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
          <img className='max-w-72 me-3' src="https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
    <TravelFooter/>
    </>
    
  )
}

export default TravelPage