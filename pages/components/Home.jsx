import React, {useState, useEffect} from 'react'
import HomeEfect from "./HomeEfect"


function Home() {
  const [showText, setShowText] = useState(0)
  const [stop, setStop] = useState(true)
  const next = () =>{
    if (showText < 2) {
      setShowText(showText + 1)
    }else {
      setShowText(0)
    }
  }
  useEffect(() => {
    setTimeout(next,5000)
 },[showText]);
 useEffect(() => {
   if (showText === 0) {
     const i = document.getElementById('text1')
     const ii = document.getElementById('text3')
     ii.classList.add("opacity-0")

     i.classList.remove("opacity-0")
   }
   if (showText === 1) {
     const i = document.getElementById('text2')
     const ii = document.getElementById('text1')
     ii.classList.add("opacity-0")

     i.classList.remove("opacity-0")
   }
   if (showText === 2) {
     const i = document.getElementById('text3')
     const ii = document.getElementById('text2')
     ii.classList.add("opacity-0")

     i.classList.remove("opacity-0")
   }
},[showText]);
  return (
    <section className="pt-40 sm:pt-0 items-center flex flex-col" id="start">
      <div className="group flex flex-row flex-wrap justify-between sm:text-6xl text-3xl w-full">
        <div className="flex justify-start items-center w-1/2">
          <div className="relative font-mono">
            <p className="absolute top-5 left-0 opacity-0  tracking-widest faster" id="text1" >Beatifull WebSite</p>
            <p className="absolute top-5 left-0 opacity-0  tracking-widest faster" id="text2" >eCommerce</p>
            <p className="absolute top-5 left-0 opacity-0  tracking-widest faster" id="text3" >Finances Help</p>
          </div>
        </div>
        <HomeEfect/>
      </div>

    </section>
  )
}

export default Home
