import './App.css'
import About from './components/About'
import Aside from './components/Aside'
import Contact from './components/Contact'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Aside />
      {/* <main> */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* </main> */}
    </>
  )
}

export default App
