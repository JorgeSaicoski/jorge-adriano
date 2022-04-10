import React from 'react'

function HeaderItems({title}) {
  return (
    <div className="flex flex-col justify-center items-center cursor-pointer hover:text-focus group">
      <p className="tracking-widest opacity-0 group-hover:opacity-100 text-xs sm:text-base">{title}</p>
    </div>
  )
}

export default HeaderItems
