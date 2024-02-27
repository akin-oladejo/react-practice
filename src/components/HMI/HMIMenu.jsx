import React from 'react'

function HMIMenu(
  {className}
) {
  return (
    <div className={` ${className}`}>
        <img className='cursor-pointer' width="30" height="30" src="https://img.icons8.com/fluency/48/filled-sent.png" alt="filled-sent"/>
        <img className='cursor-pointer' width="30" height="30" src="https://img.icons8.com/fluency/48/circled-menu.png" alt="circled-menu"/>
        <img className='cursor-pointer' width="30" height="30" src="https://img.icons8.com/fluency/48/airpods-3.png" alt="airpods-3"/>
        <img className='cursor-pointer' width="30" height="30" src="https://img.icons8.com/ultraviolet/40/settings.png" alt="settings"/>
    </div>
  )
}

export default HMIMenu