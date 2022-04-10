import Header from "./components/Header"
import About from "./components/About"
import Start from "./components/Home"
import Portfolio from "./components/Portfolio"
import Websites from "./components/Websites"
import Contact from "./components/Contact"

import SectorDivese from "./components/SectorDivese"
import { FilmIcon, StarIcon, CodeIcon, ShoppingCartIcon, GlobeIcon } from '@heroicons/react/outline'


export default function Home() {
  return (

    <h1 className="bg-gradient-to-b bg-fixed from-bodyColor to-ligth text-3xl font-bold flex flex-col justify-center">
      <Header/>
      <Start/>
      <SectorDivese nameSector="About me" idTitle="aboutMe" />
      <About/>
      <SectorDivese nameSector="Portfolio" idTitle="portfolio" />
      <Portfolio/>
      <SectorDivese nameSector="Website Prices" idTitle="websitesprices" />
      <Websites/>
      <SectorDivese nameSector="Hire me" idTitle="hire" />
      <Contact/>

    </h1>
  )
}
