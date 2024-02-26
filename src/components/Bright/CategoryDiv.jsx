import React from 'react'

function CategoryDiv({
    col,
    imgUrl,
    mainText,
    startPrice
}) {
  return (
    <div className={`flex relative justify-center items-center col-start-${col} col-span-1 row-span-1 rounded-xl`} style={{backgroundImage: `url('${imgUrl}')`, backgroundSize: 'cover'}}>
        <div className='absolute top-4 left-4 text-white'>Starting from ₦{startPrice.toLocaleString()}</div>
        <img className='absolute top-4 right-4' width="48" height="48" src="https://img.icons8.com/color-glass/48/like--v1.png" alt="like--v1"/>
        <div className='text-3xl font-bold text-white'>{mainText}</div>
    </div>
  )
}

export default CategoryDiv