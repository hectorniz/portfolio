import { AboutMe } from "./components/AboutMe"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"

function App() {
  return (
    <div className="w-full h-full absolute bg-gradient-to-r from-blue-400 to-emerald-400">
      <NavBar/>
      <Home/>
      <AboutMe/>
    </div>
  )
}

export default App
