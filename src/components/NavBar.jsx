import { useState } from "react"

const NavBar = () => {

  const styles1 = "p-3 hover:bg-orange-500 hover:text-white rounded-md transition-all cursor-pointer" 
  const styles2 = "list-none w-full text-center p-4 hover:bg-orange-500 hover:text-white transition-all cursor-pointer"

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="flex fixed w-full justify-between items-center text-gray-200 px-8 md:px-32 mt-8">
      <a href="#HOME">
            <img className="w-24 hover:scale-110 transition-all" src="https://raw.githubusercontent.com/hectorniz/portfolio/38cc230289b11fe4b12c5e91b5285861313da99a/src/assets/logo.svg" alt="logo"/>
      </a>
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
        <li className={styles1}><a href="#HOME">HOME</a></li>
        <li className={styles1}><a href="#ABOUT">ABOUT ME</a></li>
        <li className={styles1}><a href="#SKILLS">SKILLS & PROJECTS</a></li>
        <li className={styles1}><a href="#CONTACT">CONTACT</a></li>
      </ul>

      <i className="bx bx-menu xl:hidden block text-5xl text-gray-200 hover:text-orange-500 cursor-pointer " onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
      <div className={`absolute xl:hidden top-24 left-0 w-full  flex flex-col items-center gap-7 
        font-semibold text-lg transform transition-transform ${isMenuOpen ? "block bg-slate-800 bg-opacity-60" : "hidden"}`}
        style={{transition: "transform 0.3 ease, opacity 0.3 ease"}}  
      >
        <ul>
          <li className={styles2} onClick={() => setIsMenuOpen(!isMenuOpen)}><a href="#HOME">HOME</a></li>
          <li className={styles2} onClick={() => setIsMenuOpen(!isMenuOpen)}><a href="#ABOUT">ABOUT ME</a></li>
          <li className={styles2} onClick={() => setIsMenuOpen(!isMenuOpen)}><a href="#SKILLS">SKILLS & PROJECTS</a></li>
          <li className={styles2} onClick={() => setIsMenuOpen(!isMenuOpen)}><a href="#CONTACT">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;