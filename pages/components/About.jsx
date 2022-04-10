import Card from "./Card"
import ferrari from ".//../../public/ferrari.jpg"
import finance from ".//../../public/finance.jpg"
import game from ".//../../public/game.jpg"
import heavy from ".//../../public/heavy.jpg"
import sport from ".//../../public/sport.jpg"
import stock from ".//../../public/stock.jpg"
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
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 slowly opacity-0 m-12 text-center" id="about">
      <Card name="Race" image={ferrari} description="I love the racing and I am a Ferrari Tifosi"/>
      <Card name="Stock Market" image={stock} description="I have experience in stock market"/>
      <Card name="Finances Help" image={finance} description="If you need a help to organize your personal finances, contact me "/>
      <Card name="Sports" image={sport} description="Soccer is a pasion, competion is a motivation"/>
      <Card name="Games" image={game} description="I play a lot of racing games"/>
      <Card name="Heavy Metal" image={heavy} description="My dream is went to a Metallica Concert"/>
    </section>
  )
}

export default About
