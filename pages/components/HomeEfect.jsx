import React, {useEffect, useState} from 'react'
import {HomeIcon, FastForwardIcon, GlobeIcon} from '@heroicons/react/outline'

function HomeEfect() {
  const [stage, setStage] = useState(0)
  const [leftTop, setLeft] = useState(50)
  const [middleTop, setMiddle] = useState(0)
  const [rightTop, setRight] = useState(100)

  const move = () =>{
    const left = document.getElementById('left')
    const middle = document.getElementById('middle')
    const right = document.getElementById('right')
    const speed = 4
    const limit = (60/speed)

    if (stage < limit) {
      setLeft(leftTop + speed)
      setRight(rightTop - speed)
      setMiddle(middleTop + speed)
    }else if (stage >= limit && stage <(limit*2)){
      left.classList.add("rotate-[270deg]")
      left.classList.remove("rotate-90")
      setLeft(leftTop - speed)
      setRight(rightTop - speed)
      setMiddle(middleTop + speed)
    }else if (stage >= (limit*2) && stage<(limit*3)){
      right.classList.add("opacity-0")
      setLeft(leftTop - speed)
      setRight(rightTop + speed)
      setMiddle(middleTop - speed)
    }else if (stage >= (limit*3) && stage<(limit*4)){
      left.classList.remove("rotate-[270deg]")
      left.classList.add("rotate-90")
      right.classList.remove("opacity-0")
      setLeft(leftTop + speed)
      setRight(rightTop + speed)
      setMiddle(middleTop - speed)
    }
    else if (stage >= (limit*4) && stage<(limit*5)){
      right.classList.add("opacity-0")
      setLeft(leftTop + speed)
      setRight(rightTop - speed)
      setMiddle(middleTop + speed)
    }else if (stage >= (limit*5) && stage<(limit*6)){
      left.classList.add("rotate-[270deg]")
      left.classList.remove("rotate-90")
      setLeft(leftTop - speed)
      setRight(rightTop - speed)
      setMiddle(middleTop + speed)
    }else if (stage >= (limit*6) && stage<(limit*7)){
      right.classList.remove("opacity-0")
      setLeft(leftTop - speed)
      setRight(rightTop + speed)
      setMiddle(middleTop - speed)
    }else if (stage >= (limit*7) && stage<(limit*8)){
      left.classList.remove("rotate-[270deg]")
      left.classList.add("rotate-90")
      setLeft(leftTop + speed)
      setRight(rightTop + speed)
      setMiddle(middleTop - speed)
    }
    else{
      setLeft(50)
      setRight(100)
      setMiddle(0)
      return (setStage(0))
    }
    setStage(stage+1);
    left.style.top= leftTop + "%"
    middle.style.top= middleTop + "%"
    right.style.top= rightTop + "%"
  }
  useEffect(() => {
    setTimeout(move,100)
 },[move]);

  return (
    <div className="flex justify-center items-center h-screen pr-20 sm:w-1/3 w-2/3">
      <div className="relative font-mono text-textColor text-base h-[90vh] w-full">
        <FastForwardIcon className="absolute left-0 w-20 faster rotate-90" id="left"/>
        <GlobeIcon className="absolute left-1/2 w-20 faster animate-spin" id="middle"/>
        <HomeIcon className="absolute left-full w-20 faster"  id="right"/>
      </div>
    </div>
  )
}

export default HomeEfect
