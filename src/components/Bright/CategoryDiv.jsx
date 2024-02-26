import React from 'react'

function CategoryDiv({
    col,
    imgUrl,
    mainText,
    startPrice
}) {
  return (
    <div className={`flex relative justify-center items-center col-start-${col} col-span-1 row-span-1 rounded-xl`} style={{backgroundImage: `url('${imgUrl}')`, backgroundSize: 'cover'}}>
        <div className='absolute top-0 p-2  backdrop-blur-[1px] flex justify-between w-full'>
        <div className='left-4 text-white'>Starting from ₦{startPrice.toLocaleString()}</div>
        <img className='right-4' width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/like--v2.png" alt="like--v2"/>
        </div>
        
        <div className='text-3xl font-bold text-white'>{mainText}</div>
    </div>
  )
}

export default CategoryDiv