import { useState } from "react"


export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="#">
          <img className="w-32 hover:scale-105 transition-all" src="../src/assets/PngItem_3559795.png" alt="logo" />
        </a>

        <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">HOME</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">PRODUCTS</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">EXPLORE</li>
          <li className="p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer">CONTACT</li>
        </ul>

        <i className="bx bx-menu xl:hidden block text-5xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-7 
          font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{transition: "transform 0.3 ease, opacity 0.3 ease"}}  
        >
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>HOME</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>PRODUCTS</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>EXPLORE</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>CONTACT</li>
        </div>
    </header>
  )
}
