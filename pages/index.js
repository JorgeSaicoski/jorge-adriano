import Header from "./components/Header"
import About from "./components/About"
import Start from "./components/Home"

export default function Home() {
  return (
    <h1 className="bg-bodyColor text-3xl font-bold flex flex-col justify-center">
      <Header/>
      <Start/>
      <About/>
    </h1>
  )
}
