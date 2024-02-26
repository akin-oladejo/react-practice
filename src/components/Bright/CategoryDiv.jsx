import React from 'react'

function CategoryDiv({
    col,
    imgUrl,
    mainText,
    startPrice
}) {
  return (
    <div className={`flex justify-center items-center col-start-${col} col-span-1 row-span-1 rounded-xl`} style={{backgroundImage: `url('${imgUrl}')`, backgroundSize: 'cover'}}>
        {/* <div className=''>Starting from ₦{startPrice}</div> */}
        <img className='place-self-end' width="40" height="40" src="https://img.icons8.com/pastel-glyph/64/000000/like--v2.png" alt="like--v2"/>
        <div className='text-3xl font-bold text-white'>{mainText}</div>
    </div>
  )
}

export default CategoryDiv