import HeaderItems from "./HeaderItems"
import { HomeIcon, FilmIcon, StarIcon, CodeIcon, ShoppingCartIcon, GlobeIcon } from '@heroicons/react/outline'

function Header() {
  return (
    <header className="bg-headerColor text-textColor text-base p-1 flex sm:flex-row flex-col items-center justify-between fixed top-0 left-0 w-full z-50">
      <div className="text-3xl p-1 m-2 hover:animate-pulse items-center flex flex-row justify-evenly">
        <p className="text-second">Jorge Adriano</p>
      </div>
      <div className="flex flex-grow items-center justify-evenly w-full max-w-lg pt-2">
        <HeaderItems title="HOME" Icon={HomeIcon}/>
        <HeaderItems title="ABOUT" Icon={FilmIcon}/>
        <HeaderItems title="PORTFOLIO" Icon={CodeIcon}/>
        <HeaderItems title="HIRE" Icon={StarIcon}/>
        <HeaderItems title="WEB-SITES" Icon={ShoppingCartIcon}/>
      </div>
    </header>
  )
}

export default Header
