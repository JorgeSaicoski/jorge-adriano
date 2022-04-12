import React, {useEffect, useState} from 'react'
import Card from "./Card"
import race from ".//../../public/race.jpg"


function Portfolio() {
  const [top, setTop]=useState()
  const [bottom, setBottom]=useState()
  useEffect(()=>{
    window.addEventListener('scroll',(event) => {
        const portfolio = document.getElementById("portfolioSection")
        setTop(portfolio.getBoundingClientRect().top)
        setBottom(portfolio.getBoundingClientRect().bottom)
        if (top<(800) && bottom>(400)) {
          portfolio.classList.remove("w-0")
          portfolio.classList.add("w-full")

        }
        else{
          portfolio.classList.add("w-0")
          portfolio.classList.remove("w-full")

        }

    });
  })
  return (
    <section className="m-12" >
      <div className ="grid grid-cols-1 gap-4 sm:grid-cols-2 slowly overflow-hidden text-center w-full" id="portfolioSection">
        <Card name="example Website" className="cardPort" image={race} description="I have no portfolio wet. If you have any idea about design WebSite, I can do."/>
        <Card name="example eCommerce" className="cardPort" image={race} description="I have no portfolio wet. If you want a eCommerce a I can do."/>
      </div>
    </section>
  )
}

export default Portfolio
