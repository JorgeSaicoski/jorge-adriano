import React, {useEffect, useState} from 'react'

function SectorDivese({nameSector,idTitle,Icon}) {
  const [top, setTop] = useState(0)
  const [bottom, setBottom] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll',(event) => {
        const id = document.getElementById(`${idTitle}`)
        setTop(id.getBoundingClientRect().top)
        setBottom(id.getBoundingClientRect().bottom)
        if (top<(800) && bottom>(100)) {
          id.classList.add("w-full")
          id.classList.add("sm:w-1/2")
          id.classList.remove("w-0")
          id.classList.add("p-2")
        }
        else{
          id.classList.add("w-0")
          id.classList.remove("p-2")
          id.classList.remove("w-full")
          id.classList.remove("sm:w-1/2")
        }

    });
  })
  return (
    <div className="overflow-hidden h-32 sm:h-20 w-0 bg-headerColor text-focus rounded-br-[5vh] rounded-tl-lg slowly sm:m-12 relative background-title" id={`${idTitle}`}>
      <p className="absolute top-1/3">{nameSector}</p>
      <Icon/>
    </div>
  )
}

export default SectorDivese
