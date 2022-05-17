import Header from "./components/Header"
import About from "./components/About"
import Start from "./components/Home"
import Portfolio from "./components/Portfolio"
import Websites from "./components/Websites"
import Contact from "./components/Contact"
import Head from 'next/head'

import SectorDivese from "./components/SectorDivese"
import { FilmIcon, StarIcon, CodeIcon, ShoppingCartIcon, GlobeIcon } from '@heroicons/react/outline'


export default function Home() {
  return (

    <div className="bg-gradient-to-b bg-fixed from-bodyColor to-ligth text-3xl font-bold flex flex-col justify-center">
      <Head>
          <title>Jorge Adriano</title>
          <meta charSet='utf-8' />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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

    </div>
  )
}
