import NavBar from "./components/NavBar"
import Home from "./components/Home"
import WebSection from "./components/WebSection"
import ProjectCard from "./components/ProjectCard"
import PillButton from "./components/PillButton"
import LogoButton from "./components/LogoButton"
import Footer from "./components/Footer"


function App() {

  return (
      <>
        <NavBar/>
        <Home/>
        <WebSection title="About Me"  id="ABOUT">
          <div className="flex flex-col items-center md:w-96 max-w-3xl lg:pr-10 lg:w-max">
            <p>
              Hi! I&apos;m Héctor, a passionate and dedicated Software Development student with a strong academic foundation and 
              hands-on experience in web and software development. With solid knowledge in <strong>HTML, CSS, JavaScript, React JS, 
              Tailwind, C, and C#.</strong> I am currently enhancing my expertise in <strong>ASP.NET</strong> to broaden my skill set and stay updated 
              with modern technologies.
            </p><br />
            <p>
              Throughout my studies and personal projects, I have developed a deep interest in creating intuitive, responsive, 
              and efficient solutions. I take pride in my <strong>quick learning abilities</strong>, meticulous <strong>attention to detail</strong>, and 
              commitment to <strong>delivering high-quality results</strong>. These qualities have allowed me to excel academically, maintaining 
              a GPA of 8.5 and completing 66% of my degree. Adittionally, my knowledge of Git and GitHub ensures effective 
              collaboration and version control in any development environment.
            </p><br />
            <p>
              I am eager to bring my skills to a trainee or junior-level role, where I can contribute to meaningful 
              projects while growing in a dynamic and challenging environment. My ultimate goal is to continue evolving as a 
              developer, embracing new challenges, and building innovative solutions that make a difference.
            </p><br />
            <PillButton url="#">Download CV</PillButton>
          </div>
          <img src="https://raw.githubusercontent.com/hectorniz/portfolio/refs/heads/master/src/assets/cropped_image.png" className="max-w-10/12 md:w-9/12 lg:w-fit xl:w-10/12 pt-10 md:pt-0 object-scale-down overflow-hidden" style={{transition: "transform 0.6 ease"}} alt="avatar"/>
        </WebSection>

        <WebSection title="Skills & Projects" id="SKILLS">
          <article className="flex flex-col flex-wrap justify-center lg:-ml-28 w-full">
            <h2 className="text-orange-500 text-2xl lg:text-3xl xl:text-4xl font-bold self-center mb-10">My Skills</h2>
            <div className="w-full flex justify-around text-5xl flex-wrap">
              <LogoButton logo="html5" size="text-5xl" color="#f16529"/>
              <LogoButton logo="css3" size="text-5xl" color="#379ad6"/>
              <LogoButton logo="javascript" size="text-5xl" color="#f7df1e"/>
              <LogoButton logo="react" size="text-5xl" color="#61dafb"/>
              <LogoButton logo="tailwind-css" size="text-5xl" color="#38bdf8"/>
              <LogoButton logo="git" size="text-5xl" color="#f34f29"/>
              <LogoButton logo="nodejs" size="text-5xl" color="#539e43"/>
              <LogoButton logo="mongodb" size="text-5xl" color="#4eb03f"/>
            </div>
            <h2 className="text-orange-500 text-2xl lg:text-3xl xl:text-4xl font-bold self-center my-10">My Projects</h2>
            <div className="md:flex md:justify-around w-full flex-wrap">
              <ProjectCard image="https://raw.githubusercontent.com/hectorniz/portfolio/refs/heads/master/src/assets/portfolio-image.png" url="#HOME" urlButton="https://github.com/hectorniz/portfolio" title="Portfolio Web">
                <p>
                  This is my very first project. I developed it using React+Vite with JavaScript in JSX syntax. 
                  I also used Tailwind CSS for styling and Boxicons for icons.
                </p>
              </ProjectCard>
            </div>
          </article>
        </WebSection>
        <Footer/>
      </>
  )
}

export default App
