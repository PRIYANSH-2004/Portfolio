import Navbar from './components/Navbar'
import Hero from './components/Hero'
// import About from './components/About' // About section temporarily disabled
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
const App = () =>{
  return (
    <div className='overflow-x-hidden  bg-canvas text-text-muted antialiased selection:bg-accent/30 selection:text-text'>

    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-canvas bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.05),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

      </div>

    </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <main>
        <Hero  />
        {/* <About /> */}
        <Experience />
        <Technologies/>
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>


    </div>
  )
}



export default App
