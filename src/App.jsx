import './App.css'
import About from './components/About'
import Aside from './components/Aside'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import SocialPath from './components/SocialPath'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <Aside />
      {/* <main> */}
      <Home />
      <SocialPath />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* </main> */}
    </>
  )
}

export default App
