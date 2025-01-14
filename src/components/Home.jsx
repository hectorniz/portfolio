import LogoButton from "./LogoButton"

const Home = () => {
  return (
    <>
      <section id="HOME" className="w-full h-screen object-cover flex felx-col justify-start items-center">
        <div>
          <h1 className="pl-5 lg:pl-24 text-gray-200 text-5xl lg:text-8xl font-mono">Hi I&apos;m</h1>
          <h1 className="pl-5 lg:pl-24 pt-3 text-orange-500 text-5xl lg:text-8xl font-mono font-semibold">&#123;Héctor S. Niz&#125;</h1>
          <h2 className="pl-5 lg:pl-24 pt-5 lg:pt-10 text-gray-200 text-3xl lg:text-4xl font-mono">A Full Stack Developer</h2>
          <div className="lg:pl-24 flex text-gray-200">
            <a href="https://github.com/hectorniz" target="blank">
              <LogoButton logo="github" size="text-7xl pt-5" color="#ea580c"/>
            </a>
            <a href="https://www.linkedin.com/in/hector-samuel-niz/" target="blank">
              <LogoButton logo="linkedin-square" size="text-7xl pt-5" color="#0077b7"/>
            </a>
          </div>
        </div>
        <img src="../src/assets/bg-image.jpg" className="w-full h-full object-cover absolute -z-10 opacity-20"/>
      </section>
    </>
  )
}

export default Home