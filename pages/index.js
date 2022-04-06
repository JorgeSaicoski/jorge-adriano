import Header from "./components/Header"
import About from "./components/About"
import Start from "./components/Home"
import SectorDivese from "./components/SectorDivese"
import { FilmIcon, StarIcon, CodeIcon, ShoppingCartIcon, GlobeIcon } from '@heroicons/react/outline'


export default function Home() {
  return (
    <h1 className="bg-bodyColor text-3xl font-bold flex flex-col justify-center">
      <Header/>
      <Start/>
      <SectorDivese nameSector="About me" idTitle="aboutMe" Icon={FilmIcon}/>
      <About/>
      <SectorDivese nameSector="Portfolio" idTitle="portfolio" Icon={CodeIcon}/>

    </h1>
  )
}
