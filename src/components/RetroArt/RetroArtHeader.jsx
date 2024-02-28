import React from 'react'
import { Link } from 'react-router-dom'

function RetroArtHeader() {
  return (
    <div className='flex w-full justify-between items-center py-4 border-b-black border-b-[0.1rem] mb-2'>
        <Link to='#' className='hover:text-emerald-400'>RetroArt</Link>
        <div className="flex justify-between gap-5 ">
            <Link to='#' className='hover:text-emerald-400'>Discover</Link>
            <Link to='#' className='hover:text-emerald-400'>Artwork</Link>
            <Link to='#' className='hover:text-emerald-400'>How it works</Link>
        </div>
        <button className="bg-black text-white p-3 hover:bg-emerald-900">Collect a Wallet</button>
    </div>
  )
}

export default RetroArtHeader