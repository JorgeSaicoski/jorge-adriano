import Card from "./Card"
import race from ".//../../public/race.jpg"
import React, { useState, useEffect } from 'react'

function About() {
  const [top, setTop]=useState()
  const [bottom, setBottom]=useState()
  useEffect(()=>{
    window.addEventListener('scroll',(event) => {
        const about = document.getElementById('about')
        setTop(about.getBoundingClientRect().top)
        setBottom(about.getBoundingClientRect().bottom)
        if (top<(800) && bottom>(400)) {
          about.classList.remove("opacity-0")
        }
        else{
          about.classList.add("opacity-0")
        }

    });
  })
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 slowly opacity-0 w-full" id="about">
      <Card name="race" className="ease-out duration-1000" image={race} description="Ferrari Fan"/>
      <Card name="race" image={race}/>
      <Card name="race" image={race}/>
      <Card name="race" image={race}/>
    </section>
  )
}

export default About
