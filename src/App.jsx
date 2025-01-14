import NavBar from "./components/NavBar"
import Home from "./components/Home"
import WebSection from "./components/WebSection"
import ProjectCard from "./components/ProjectCard"
import PillButton from "./components/PillButton"
import LogoButton from "./components/LogoButton"
import Footer from "./components/Footer"

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nihil amet obcaecati, harum error perspiciatis aut necessitatibus qui exercitationem animi magnam quae cupiditate delectus dolor officiis ab maiores officia iste!"

function App() {

  return (
      <>
        <NavBar/>
        <Home/>
        <WebSection title="About Me"  id="ABOUT">
          <div className="flex flex-col items-center md:w-96 max-w-3xl lg:pr-10 lg:w-max">
            <p>{lorem}</p>
            <PillButton url="#">Download CV</PillButton>
          </div>
          <img src="https://avatar.iran.liara.run/public" className="pt-10 md:pt-0 object-scale-down overflow-hidden" style={{transition: "transform 0.6 ease"}}/>
        </WebSection>

        <WebSection title="Skills & Projects" id="SKILLS">
          <article className="flex flex-col flex-wrap justify-center lg:-ml-28 w-full">
            <div className="w-full flex justify-around text-5xl flex-wrap">
              <LogoButton logo="html5" size="text-5xl" color="#f16529"/>
              <LogoButton logo="css3" size="text-5xl" color="#379ad6"/>
              <LogoButton logo="javascript" size="text-5xl" color="#f7df1e"/>
              <LogoButton logo="react" size="text-5xl" color="#61dafb"/>
              <LogoButton logo="tailwind-css" size="text-5xl" color="#38bdf8"/>
            </div>
            <div className="md:flex md:justify-around w-full flex-wrap">
              <ProjectCard image="../src/assets/placeholder.png" url="#" urlButton="#" title="Project 1">{lorem}</ProjectCard>
              <ProjectCard image="../src/assets/placeholder.png" url="#" urlButton="#" title="Project 1">{lorem}</ProjectCard>
              <ProjectCard image="../src/assets/placeholder.png" url="#" urlButton="#" title="Project 1">{lorem}</ProjectCard>
            </div>
          </article>
        </WebSection>
        <Footer/>
      </>
  )
}

export default App
